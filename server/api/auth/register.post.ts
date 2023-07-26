import { db } from "@/server/lib/db"
import { getServerSession, getToken } from "#auth"
import { assertNotLoggedIn, encrypt, isLoggedIn } from "@/server/lib/auth"

export default defineEventHandler(async (event) => {
  
  // Make sure the user is not logged in
  await assertNotLoggedIn(event)

  const {
    email,
    firstName,
    lastName,
    password
  } = await readBody(event)

  if (!email || !firstName || !lastName || !password) {
    throw createError({
      status: 400,
      message: "Missing required fields"
    })
  }

  const hashedPassword = await encrypt(password)
  const user = await db.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword
    }
  })

  if (!user) {
    return {
      status: 500,
      message: "Unable to create user"
    }
  }

  return {
    status: 200,
    message: "User created",
    body: {
      user
    }
  }
})