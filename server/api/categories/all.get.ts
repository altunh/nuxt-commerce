import { db } from "@/server/lib/db"

export default defineEventHandler(async (event) => {
  const categories = await db.category.findMany()
  return categories
})