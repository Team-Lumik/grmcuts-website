import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// In a real app, use a robust auth solution (NextAuth, etc.)
// For this demo, simple env password check.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json()

        if (password === ADMIN_PASSWORD) {
            // Set a cookie
            const cookieStore = await cookies()
            cookieStore.set('admin_session', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                path: '/',
                maxAge: 60 * 60 * 24 // 1 day
            })
            return NextResponse.json({ success: true })
        }

        return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    } catch {
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 })
    }
}
