import styles from './page.module.css'
import Image from 'next/image'

const GALLERY_IMAGES = [
    { src: '/images/hero.png', alt: 'Shop Interior' },
    { src: '/images/fade.png', alt: 'Clean Fade' },
    // Repeats for demo since we don't have many generated images yet
    { src: '/images/hero.png', alt: 'Shop Interior' },
    { src: '/images/fade.png', alt: 'Clean Fade' },
    { src: '/images/hero.png', alt: 'Shop Interior' },
    { src: '/images/fade.png', alt: 'Clean Fade' },
]

export default function GalleryPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className={styles.title}>The Gallery</h1>
                <p className={styles.subtitle}>A showcase of our finest cuts and styles.</p>
            </div>

            <div className={styles.grid}>
                {GALLERY_IMAGES.map((img, i) => (
                    <div key={i} className={styles.imageWrapper}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
