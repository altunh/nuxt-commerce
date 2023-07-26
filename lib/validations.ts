import * as z from 'zod'

export const productSchema = z.object({
  name: z.string().min(3).max(48),
  description: z.string().min(3).max(255),
  price: z.number().min(0.0)
})

export const orderSchema = z.object({
  name: z.string().min(3).max(32),
  address: z.string().min(3).max(255),
  zipCode: z.string().min(3).max(32),
  phone: z.string().min(3).max(32),
  city: z.string().min(3).max(32),
  country: z.string().min(3).max(32),
})

export const reviewSchema = z.object({
  title: z.string().min(3).max(48),
  body: z.string().min(3).max(255),
  rating: z.number().min(0).max(5),
})

export const userSchema = z.object({
  firstName: z.string().min(3).max(32),
  lastName: z.string().min(3).max(32),
  email: z.string().email(),
  password: z.string().min(8).max(32),
})