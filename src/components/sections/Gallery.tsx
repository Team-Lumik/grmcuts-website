'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Gallery() {
    const [filter, setFilter] = useState('All')

    // Using the 8 uploaded gallery images with multiple tags
    const cuts = [
        { id: 1, categories: ['Fades'], image: '/images/gallery-1.jpg' },
        { id: 2, categories: ['Tapers', 'Beards'], image: '/images/gallery-2.jpg' },
        { id: 3, categories: ['Beards'], image: '/images/gallery-3.jpg' },
        { id: 4, categories: ['Designs'], image: '/images/gallery-4.jpg' },
        { id: 5, categories: ['Fades', 'Beards'], image: '/images/gallery-5.jpg' },
        { id: 6, categories: ['Tapers'], image: '/images/gallery-6.jpg' },
        { id: 7, categories: ['Beards'], image: '/images/gallery-7.jpg' },
        { id: 8, categories: ['Designs', 'Fades'], image: '/images/gallery-8.jpg' },
    ]

    const categories = ['All', 'Fades', 'Tapers', 'Beards', 'Designs']

    const visibleCuts = filter === 'All'
        ? cuts
        : cuts.filter(cut => cut.categories.includes(filter))

    return (
        <section id="gallery" className="section-padding bg-background relative z-10 border-t border-white/5">
            <div className="container-tight">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div>
                        <span className="text-sm uppercase tracking-widest text-primary block mb-4 font-bold">Portfolio</span>
                        <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase">Selected<br />Work</h2>
                    </div>

                    {/* Minimal Filter Tabs */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${filter === cat ? 'text-primary border-b border-primary pb-1 font-bold' : 'text-zinc-500'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4-column grid for 8 images */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                    {visibleCuts.map((cut) => (
                        <div
                            key={cut.id}
                            className="relative group aspect-[4/5] overflow-hidden bg-secondary"
                        >
                            <Image
                                src={cut.image}
                                alt={`Barber work by GrmCutz`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Subtle Darken Overlay on Hover (No Text) */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <a
                        href="https://www.instagram.com/grmcutz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all duration-300"
                    >
                        See more on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
