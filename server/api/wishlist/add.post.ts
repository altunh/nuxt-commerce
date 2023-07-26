import { db } from "@/server/lib/db"
import { assertLoggedIn } from "@/server/lib/auth"

export default defineEventHandler(async (event) => {
  const user = await assertLoggedIn(event)
  const { id: productId } = await readBody(event)
  const product = await db.product.findFirstOrThrow({ 
    where: { id: productId } 
  })
  const updatedUser = await db.user.update({
    where: {
      id: user?.id
    },
    data: {
      wishedProducts: {
        connect: { id: productId }
      }
    }
  })
  return true
})