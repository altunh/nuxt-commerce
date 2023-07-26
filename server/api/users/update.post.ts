import { db } from "@/server/lib/db"
import { assertLoggedIn } from "@/server/lib/auth"

export default defineEventHandler(async (event) => {
  const user = await assertLoggedIn(event)
  const { firstName, lastName } = await readBody(event)
  const updatedUser = await db.user.update({
    where: {
      id: user?.id
    },
    data: { firstName, lastName }
  })
  return true
})