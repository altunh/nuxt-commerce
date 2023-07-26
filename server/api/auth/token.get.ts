import { getSession } from "@/server/lib/auth"

export default eventHandler(async (event) => {
  const token = await getSession(event)
  if (!token) {
    throw createError({
      status: 401,
      message: "Not logged in"
    })
  }
  
  return token
})