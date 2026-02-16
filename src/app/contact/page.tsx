import styles from './page.module.css'
import { MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className={styles.title}>Get In Touch</h1>
                <p className={styles.subtitle}>Visit our studio or drop us a message.</p>
            </div>

            <div className={styles.grid}>
                {/* Contact Info */}
                <div className={styles.infoColumn}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Studio Info</h2>

                        <div className={styles.infoItem}>
                            <MapPin className={styles.icon} />
                            <div>
                                <h3>Location</h3>
                                <p>123 Barber Street</p>
                                <p>Metro City, ST 12345</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Phone className={styles.icon} />
                            <div>
                                <h3>Phone</h3>
                                <p>(555) 123-4567</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Mail className={styles.icon} />
                            <div>
                                <h3>Email</h3>
                                <p>book@grmcuts.com</p>
                            </div>
                        </div>

                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Instagram /></a>
                            <a href="#" className={styles.socialLink}><Twitter /></a>
                        </div>
                    </div>

                    <div className={styles.mapCard}>
                        {/* Map Placeholder */}
                        <div className={styles.mapPlaceholder}>
                            Google Maps Embed Placeholder
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formColumn}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Send a Message</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="your@email.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="How can we help?"></textarea>
                            </div>

                            <button type="button" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
