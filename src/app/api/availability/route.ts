import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { generateTimeSlots } from '@/lib/availability'
import { addMinutes, parse, format, isWithinInterval } from 'date-fns'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const dateStr = searchParams.get('date') // YYYY-MM-DD
    const serviceId = searchParams.get('serviceId')
    const barberId = searchParams.get('barberId')

    if (!dateStr || !serviceId) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    try {
        const service = await prisma.service.findUnique({ where: { id: serviceId } })
        if (!service) return NextResponse.json({ error: 'Service not found' }, { status: 404 })

        const duration = service.duration

        // 1. Generate all theoretical slots
        const allSlots = generateTimeSlots(dateStr, duration)

        // 2. Fetch existing bookings for the day (and specifically for barber if selected)
        // If no barber selected, we check if ANY barber is free (simplified: just check global conflicts for now or assume 1 barber if implicit)
        // The prompt implies multiple barbers capability "choose barber (optional)".
        // If optional, we assign to 'Any' available.
        // For now, let's assume if barberId is NOT provided, we check if there is AT LEAST one barber free.
        // But schema logic: Booking has barberId optional? Yes.

        // Let's simplified assumption: We have distinct barbers. 
        // If barberId provided, check that barber.
        // If not, check ALL barbers. specific slot is avail if ANY barber is avail.

        // Let's fetch all barbers first
        const barbers = await prisma.barber.findMany()
        const targetBarberIds = barberId ? [barberId] : barbers.map(b => b.id)

        // Fetch bookings for the day
        const dayStart = new Date(`${dateStr}T00:00:00`)
        const dayEnd = new Date(`${dateStr}T23:59:59`)

        const existingBookings = await prisma.booking.findMany({
            where: {
                date: {
                    gte: dayStart,
                    lte: dayEnd,
                },
                status: { in: ['PENDING', 'CONFIRMED'] }
            },
            include: { service: true }
        })

        // 3. Filter slots
        const availableSlots = allSlots.filter(slotTime => {
            const slotStart = parse(`${dateStr}T${slotTime}`, "yyyy-MM-dd'T'HH:mm", new Date())
            const slotEnd = addMinutes(slotStart, duration)

            // We need to find AT LEAST ONE barber who is free during this slot
            const freeBarber = targetBarberIds.find(bId => {
                // Check if this barber has a conflict
                const barberBookings = existingBookings.filter(b => b.barberId === bId || (!b.barberId)) // If booking has no barber assigned (unlikely but possible), assume it blocks everyone? No, should be assigned.

                const hasConflict = barberBookings.some(booking => {
                    // Buffer time logic: 
                    // Effective booking range = [start, end + 10 mins buffer]
                    // New booking range = [start, end + 10 mins buffer]
                    // Overlap check

                    const bookingStart = booking.date
                    const bookingEnd = addMinutes(booking.date, booking.service.duration + 10) // 10 min buffer

                    const proposedStart = slotStart
                    const proposedEnd = addMinutes(slotEnd, 10) // 10 min buffer

                    // Check overlap
                    return areIntervalsOverlapping(
                        { start: bookingStart, end: bookingEnd },
                        { start: proposedStart, end: proposedEnd }
                    )
                })

                return !hasConflict
            })

            return !!freeBarber
        })

        return NextResponse.json({ slots: availableSlots })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

function areIntervalsOverlapping(a: { start: Date, end: Date }, b: { start: Date, end: Date }) {
    return a.start < b.end && a.end > b.start
}
