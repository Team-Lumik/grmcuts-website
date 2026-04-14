import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

// @ts-ignore
const prisma = new PrismaClient({
    datasourceUrl: "file:./dev.db"
})

async function main() {
    // Create Barbers
    await prisma.barber.upsert({
        where: { id: 'barber-1' },
        update: {},
        create: {
            id: 'barber-1',
            name: 'Jay "The Blade" Cortez',
            bio: 'Master barber with 10 years of experience. Specialist in fades and designs.',
            image: '/images/barber1.jpg'
        }
    })

    // Create Services
    const services = [
        { name: 'Any Haircut', price: 35.00, duration: 45, description: 'Clean haircut (low, mid, high) with lineup.' },
        { name: 'Any Haircut/Beard', price: 40.00, duration: 50, description: 'Full haircut combined with beard shaping and trim.' },
    ]

    for (const s of services) {
        // We don't have a unique key on name, so we just create if not exists or specific check
        // For simplicity in seed, let's just create if count is 0, or upsert if we had specific IDs.
        // Let's use name as unique for upsert for now to avoid duplicates on re-run
        // But schema doesn't have unique on name. Let's start with clean slate or just create.
        // Check if exists first
        const exists = await prisma.service.findFirst({ where: { name: s.name } })
        if (!exists) {
            await prisma.service.create({ data: s })
        }
    }

    console.log('Seed data created.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
