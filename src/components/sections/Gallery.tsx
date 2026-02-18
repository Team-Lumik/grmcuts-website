'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { X } from 'lucide-react'

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Using the 8 uploaded gallery images
    const cuts = [
        { id: 1, image: '/images/gallery-1.jpg' },
        { id: 2, image: '/images/gallery-2.jpg' },
        { id: 3, image: '/images/gallery-3.jpg' },
        { id: 4, image: '/images/gallery-4.jpg' },
        { id: 5, image: '/images/gallery-5.jpg' },
        { id: 6, image: '/images/gallery-6.jpg' },
        { id: 7, image: '/images/gallery-7.jpg' },
        { id: 8, image: '/images/gallery-8.jpg' },
    ]

    return (
        <section id="gallery" className="section-padding bg-background relative z-10 border-t border-white/5">
            <div className="container-tight">
                <div className="mb-16 md:mb-24">
                    <span className="text-sm uppercase tracking-widest text-primary block mb-4 font-bold">Portfolio</span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase">Selected<br />Work</h2>
                </div>

                {/* 4-column grid for 8 images with luxury hover group */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 group/gallery">
                    {cuts.map((cut) => (
                        <div
                            key={cut.id}
                            className="relative aspect-[4/5] overflow-hidden bg-secondary cursor-pointer transition-all duration-500 hover:z-20 group-hover/gallery:opacity-60 hover:!opacity-100"
                            onClick={() => setSelectedImage(cut.image)}
                        >
                            <Image
                                src={cut.image}
                                alt={`Barber work by GrmCutz`}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button
                        href="https://www.instagram.com/grmcutz/"
                        external
                    >
                        See more on Instagram
                    </Button>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <div className="relative w-full h-full max-w-5xl max-h-[85vh] animate-in zoom-in-95 duration-300">
                        <Image
                            src={selectedImage}
                            alt="Full size haircut"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
