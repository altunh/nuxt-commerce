import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'

import { __auth_secret__ } from '@/server/lib/constants'
import { db } from "@/server/lib/db"
import { verify } from '@/server/lib/auth'

export default NuxtAuthHandler({
  secret: __auth_secret__,
  useSecureCookies: false,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        }
      })
      if (!dbUser) {
        if (user) {
          token.id = user.id
        }
        return token
      }

      return {
        id: dbUser.id,
        email: dbUser.email,
        firstName: dbUser.firstName,
        lastName: dbUser.lastName,
      }
    }
  },
  providers: [
    // @ts-ignore
    CredentialsProvider.default({
      credentials: {
        email: { label: "Email", type: "text", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string,
          password: string,
        }
        if (!email || !password) {
          throw new Error("Missing required fields")
        }

        const dbUser = await db.user.findUnique({
          where: {
            email: email,
          }
        })
        if (!dbUser || !(await verify(password, dbUser.password))) {
          throw new Error("Invalid email or password")
        }

        return {
          id: dbUser.id,
          email: dbUser.email,
          firstName: dbUser.firstName,
          lastName: dbUser.lastName,
        }
      }
    })
  ]
})