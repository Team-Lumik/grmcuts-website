import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import styles from './page.module.css'
import { format } from 'date-fns'
import Link from 'next/link'

export default async function AdminDashboard() {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session) {
        redirect('/admin/login')
    }

    // Fetch bookings directly since we are on server
    const bookings = await prisma.booking.findMany({
        orderBy: { date: 'desc' }, // Newest first for list, or asc? Upcoming first usually better. 
        // Let's do desc for "Recent Activity" feel.
        include: { service: true, barber: true }
    })

    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Admin Dashboard</h1>
                <div className={styles.actions}>
                    <Link href="/" className={styles.homeBtn}>View Site</Link>
                    {/* Add Logout button component logic if needed */}
                </div>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.statCard}>
                    <h3>Total Bookings</h3>
                    <p className={styles.statValue}>{bookings.length}</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Today's Appts</h3>
                    {/* Placeholder calculation */}
                    <p className={styles.statValue}>
                        {bookings.filter(b => format(b.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')).length}
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Recent Bookings</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Service</th>
                                <th>Customer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <tr key={booking.id}>
                                    <td>{format(booking.date, 'MMM d, yyyy')}</td>
                                    <td>{format(booking.date, 'h:mm a')}</td>
                                    <td>{booking.service.name}</td>
                                    <td>
                                        <div className={styles.customerInfo}>
                                            <span>{booking.customerName}</span>
                                            <span className={styles.email}>{booking.customerEmail}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.status} ${styles[booking.status.toLowerCase()]}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan={5} className={styles.empty}>No bookings found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
