import { db } from "@/server/lib/db"
import { assertLoggedIn } from "@/server/lib/auth"

export default defineEventHandler(async (event) => {
  const user = await assertLoggedIn(event)
  const orders = await db.order.findMany({
    where: { userId: user?.id },
    select: {
      id: true,
      total: true,
      createdAt: true,
      items: {
        include: {
          product: true
        }
      }
    },
  })
  return orders
})