import { addMinutes, format, isBefore, isEqual, parse, setHours, setMinutes } from 'date-fns'

const SHOP_OPEN = 9 // 9 AM
const SHOP_CLOSE = 19 // 7 PM
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BUFFER_MINUTES = 10

// Generate all possible slots for the day based on open hours and service duration
export function generateTimeSlots(dateStr: string, durationStr: number) {
    const slots: string[] = []
    const date = parse(dateStr, 'yyyy-MM-dd', new Date())

    let currentTime = setMinutes(setHours(date, SHOP_OPEN), 0)
    const endTime = setMinutes(setHours(date, SHOP_CLOSE), 0)

    // Loop until we can't fit the service anymore
    while (isBefore(addMinutes(currentTime, durationStr), endTime) || isEqual(addMinutes(currentTime, durationStr), endTime)) {
        slots.push(format(currentTime, 'HH:mm'))
        // Standard slot interval can be 15 or 30 mins, let's say 30 mins for simplicity
        // OR we can make slots flexible. 
        // For a robust system, slots usually start every 15 mins.
        currentTime = addMinutes(currentTime, 15)
    }

    return slots
}
