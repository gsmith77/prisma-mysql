import { PrismaClient } from "@prisma/client";

export const prisma: typeof PrismaClient = new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";
