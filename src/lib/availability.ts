import { addMinutes, format, isBefore, isEqual, parse, setHours, setMinutes, getDay } from 'date-fns'

interface BusinessHours {
    open: { hour: number; minute: number }
    close: { hour: number; minute: number }
}

const BUSINESS_HOURS: Record<number, BusinessHours | null> = {
    0: null, // Sunday - Closed
    1: null, // Monday - Closed
    2: { open: { hour: 15, minute: 30 }, close: { hour: 19, minute: 0 } }, // Tuesday
    3: { open: { hour: 15, minute: 30 }, close: { hour: 19, minute: 0 } }, // Wednesday
    4: { open: { hour: 15, minute: 30 }, close: { hour: 19, minute: 0 } }, // Thursday
    5: { open: { hour: 15, minute: 30 }, close: { hour: 19, minute: 0 } }, // Friday
    6: { open: { hour: 9, minute: 0 }, close: { hour: 16, minute: 30 } },  // Saturday
}

// Generate all possible slots for the day based on open hours and service duration
export function generateTimeSlots(dateStr: string, durationStr: number) {
    const slots: string[] = []
    const date = parse(dateStr, 'yyyy-MM-dd', new Date())
    const dayOfWeek = getDay(date)

    const hours = BUSINESS_HOURS[dayOfWeek]
    if (!hours) {
        return [] // Closed
    }

    let currentTime = setMinutes(setHours(date, hours.open.hour), hours.open.minute)
    const endTime = setMinutes(setHours(date, hours.close.hour), hours.close.minute)

    // Loop until we can't fit the service anymore
    while (isBefore(addMinutes(currentTime, durationStr), endTime) || isEqual(addMinutes(currentTime, durationStr), endTime)) {
        slots.push(format(currentTime, 'HH:mm'))
        // Standard slot interval can be 15 or 30 mins, let's say 15 mins for consistency with route.ts buffer logic
        currentTime = addMinutes(currentTime, 15)
    }

    return slots
}

