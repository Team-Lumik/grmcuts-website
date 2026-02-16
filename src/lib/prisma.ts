import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import path from 'path'

const prismaClientSingleton = () => {
    // Determine database path
    const dbPath = process.env.DATABASE_URL
        ? (process.env.DATABASE_URL.startsWith('file:')
            ? process.env.DATABASE_URL.slice(5)
            : process.env.DATABASE_URL)
        : path.join(process.cwd(), 'dev.db')

    // Prisma 7 with driver adapter
    // The issue was trying to pass a Database instance to PrismaBetterSqlite3 directly 
    // when it might expect options or a specific shape, but let's re-read the type definition carefully.
    // Wait, the type definition said: constructor(config: BetterSQLite3InputParams, options?: ...)
    // And BetterSQLite3InputParams = Options & { url: ':memory:' | string }

    // BUT typically adapters take the driver instance. 
    // Let's look at standard docs example. 
    // Actually, looking at the previous error: "Property 'url' is missing in type 'Database' but required in type '{ url: ... }'"
    // This implies PrismaBetterSqlite3 constructor MIGHT be expecting the config object directly if imported this way?
    // OR I am importing the wrong thing?

    // Let's try passing the database instance to the adapter, 
    // BUT if the type def expects { url: string }, maybe we just pass that?
    // WAIT. "export declare class PrismaBetterSqlite3 ... constructor(config: BetterSQLite3InputParams..." 
    // This looks like it wants configuration, NOT an existing connection instance?
    // That seems odd for an "adapter". usually adapters wrap an existing connection.

    // Let's try following what the type error says -> pass an object with url.

    const adapter = new PrismaBetterSqlite3({
        url: dbPath
    })

    return new PrismaClient({
        adapter,
        log: ['warn', 'error'],
    })
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
