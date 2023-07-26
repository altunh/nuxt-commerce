import { db } from "@/server/lib/db"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const product = await db.product.findUnique({
    where: { id },
    include: {
      category: {
        select: { id: true, name: true },
      },
      reviews: {
        select: {
          id: true,
          title: true,
          body: true, 
          rating: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            }
          }
        }
      },
      _count: {
        select: { wishedBy: true }
      }
    }
  })
  return product
})