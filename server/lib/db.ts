import { PrismaClient } from "@prisma/client"
import { __prod__ } from "@/lib/constants"

declare global {
    var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (__prod__) {
    prisma = new PrismaClient()
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}

export const db = prisma