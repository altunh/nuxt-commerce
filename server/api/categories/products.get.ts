import { db } from "@/server/lib/db"

export default defineEventHandler(async (event) => {
  const { id: categoryId } = await readBody(event)
  const products = await db.category.findMany({
    where: { id: categoryId },
    include: {
      products: true
    }
  })
  return products
})