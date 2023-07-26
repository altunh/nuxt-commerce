import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string,
      email: string,
      firstName: string,
      lastName: string,
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT extends JWT {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser extends User {
    id: string
    email: string
    firstName: string
    lastName: string
  }
}