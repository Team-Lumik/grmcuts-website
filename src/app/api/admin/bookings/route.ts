import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
    // In real app, verify admin session cookie here or via middleware

    try {
        const bookings = await prisma.booking.findMany({
            orderBy: { date: 'asc' },
            include: {
                service: true,
                barber: true
            }
        })

        return NextResponse.json({ bookings })
    } catch {
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 })
    }
}
