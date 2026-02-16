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
        { name: 'Fade', price: 35.00, duration: 45, description: 'Clean fade (low, mid, high) with lineup.' },
        { name: 'Taper', price: 30.00, duration: 30, description: 'Classic taper cut for a sharp look.' },
        { name: 'Lineup', price: 15.00, duration: 15, description: 'Crisp lineup around the hairline and beard.' },
        { name: 'Beard Trim', price: 20.00, duration: 30, description: 'Sculpting and trimming the beard with razor finish.' },
        { name: 'Full Service', price: 60.00, duration: 75, description: 'Haircut + Beard Trim + Hot Towel.' },
        { name: 'Kids Cut', price: 25.00, duration: 30, description: 'For styling young gents under 12.' },
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
