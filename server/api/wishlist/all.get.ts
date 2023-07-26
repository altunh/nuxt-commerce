import { db } from "@/server/lib/db"
import { assertLoggedIn } from "@/server/lib/auth"

export default defineEventHandler(async (event) => {
  const user = await assertLoggedIn(event)
  const wishlist = await db.user.findFirst({
    where: { id: user?.id },
    select: {
      wishedProducts: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true
        }
      }
    }
  })
  return wishlist
})