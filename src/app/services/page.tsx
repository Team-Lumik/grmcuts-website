import prisma from '@/lib/prisma'
import Link from 'next/link'
import styles from './page.module.css'
import { Check } from 'lucide-react'

interface ServiceItem {
    id: string
    name: string
    price: number
    duration: number
    description: string | null
}

// Fallback data if DB is empty (since seeding failed)
const FALLBACK_SERVICES = [
    { id: '1', name: 'Any Haircut', price: 25.00, duration: 45, description: 'Clean haircut (low, mid, high) with lineup.' },
    { id: '2', name: 'Any Haircut/Beard', price: 30.00, duration: 50, description: 'Full haircut combined with beard shaping and trim.' },
    { id: '3', name: 'Shape Up', price: 20.00, duration: 20, description: 'Crisp lineup around the hairline and beard.' },
]

async function getServices(): Promise<ServiceItem[]> {
    try {
        const services = await prisma.service.findMany()
        return services.length > 0 ? services : FALLBACK_SERVICES
    } catch (e) {
        console.error("Database connection failed, using fallback:", e)
        return FALLBACK_SERVICES
    }
}

export default async function ServicesPage() {
    const services = await getServices()

    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className={styles.title}>Our Services</h1>
                <p className={styles.subtitle}>Precision cuts, classic styles, and premium grooming.</p>
            </div>

            <div className={styles.grid}>
                {services.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2 className={styles.cardTitle}>{service.name}</h2>
                            <span className={styles.price}>${service.price}</span>
                        </div>
                        <p className={styles.description}>{service.description || "Premium styling service."}</p>
                        <div className={styles.meta}>
                            <span className={styles.duration}>{service.duration} mins</span>
                            <ul className={styles.features}>
                                <li><Check size={14} className={styles.check} /> Professional Consultant</li>
                                <li><Check size={14} className={styles.check} /> Hot Towel Finish</li>
                            </ul>
                        </div>
                        <Link href={`/book?service=${service.id}`} className={styles.button}>
                            Book This Service
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
