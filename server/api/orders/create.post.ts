import { db } from "@/server/lib/db"
import { assertLoggedIn } from "@/server/lib/auth"

export default defineEventHandler(async (event) => {
  const user = await assertLoggedIn(event)
  const {
    name,
    phone,
    address,
    zipCode,
    city,
    country,
    items
  } = await readBody(event)

  const order = await db.order.create({
    data: {
      name, phone, address, zipCode, city, country,
      userId: user?.id as string,
      total: 0
    }
  })

  const orderItems = await Promise.all(items.map(async (item: any) => {
    const orderItem = await db.orderItem.create({
      data: {
        productId: item.id,
        quantity: item.quantity,
        orderId: order.id,
      },
      select: {
        product: {
          select: { price: true }
        }
      }
    })
    if (!orderItem || !orderItem?.product)
      throw createError({
        status: 500, 
        message: "Failed to create order item"
      })
  }))

  const total = orderItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
  })

  await db.order.update({
    where: { id: order.id },
    data: { total }
  })
  
  return true
})