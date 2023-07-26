import { getToken } from "#auth"
import * as argon2 from "argon2"
import type { JWT } from "next-auth/jwt"
import type { H3Event } from "h3"

export async function encrypt(password: string) {
  return await argon2.hash(password)
}

export async function verify(password: string, hashedPassword: string) {
  return await argon2.verify(hashedPassword, password)
}

const isValidSession = (session: JWT | null) => !!session?.email

export async function getSession(event: H3Event) {
  const session = await getToken({ event })
  return session
}

export async function isLoggedIn(event: H3Event) {
  const session = await getToken({ event })
  return isValidSession(session)
}

export async function assertNotLoggedIn(event: H3Event) {
  if (await isLoggedIn(event)) {
    throw createError({
      status: 400,
      message: "Already logged in"
    })
  }
}

export async function assertLoggedIn(event: H3Event) {
  const session = await getToken({ event })
  if (!isValidSession(session)) {
    throw createError({
      status: 401,
      message: "Not logged in"
    })
  }
  return session
}