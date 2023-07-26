import { db } from "@/server/lib/db"

export default defineEventHandler(async (event) => {
  const products = await db.product.findMany({
    include: {
      category: {
        select: {
          id: true,
          name: true
        }
      }
    }
  })
  return products
})