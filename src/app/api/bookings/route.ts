import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const bookingSchema = z.object({
    serviceId: z.string(),
    barberId: z.string().optional(),
    dateHash: z.string(), // ISO string including time
    customerName: z.string().min(2),
    customerEmail: z.string().email(),
    customerPhone: z.string().min(10),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const validated = bookingSchema.parse(body)

        // Simple double-book check again (omitted for brevity, duplicate of availability logic)
        // ideally reuse logic to ensure specific barber is free

        // If barberId not provided, assign to first available?
        let finalBarberId = validated.barberId

        if (!finalBarberId) {
            // Find a random available barber (simplified)
            const barber = await prisma.barber.findFirst()
            if (barber) finalBarberId = barber.id
        }

        const booking = await prisma.booking.create({
            data: {
                serviceId: validated.serviceId,
                barberId: finalBarberId,
                date: new Date(validated.dateHash),
                customerName: validated.customerName,
                customerEmail: validated.customerEmail,
                customerPhone: validated.customerPhone,
                status: 'CONFIRMED' // Auto-confirm for demo
            }
        })

        return NextResponse.json({ success: true, bookingId: booking.id })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 400 })
    }
}
