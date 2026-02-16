'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Gallery() {
    const [filter, setFilter] = useState('All')

    // Using the 8 uploaded gallery images
    const cuts = [
        { id: 1, category: 'Fades', image: '/images/gallery-1.jpg' },
        { id: 2, category: 'Tapers', image: '/images/gallery-2.jpg' },
        { id: 3, category: 'Beards', image: '/images/gallery-3.jpg' },
        { id: 4, category: 'Designs', image: '/images/gallery-4.jpg' },
        { id: 5, category: 'Fades', image: '/images/gallery-5.jpg' },
        { id: 6, category: 'Tapers', image: '/images/gallery-6.jpg' },
        { id: 7, category: 'Beards', image: '/images/gallery-7.jpg' },
        { id: 8, category: 'Designs', image: '/images/gallery-8.jpg' },
    ]

    const categories = ['All', 'Fades', 'Tapers', 'Beards', 'Designs']

    const visibleCuts = filter === 'All'
        ? cuts
        : cuts.filter(cut => cut.category === filter)

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
                                alt={`${cut.category} by GrmCutz`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Minimal Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">
                                    {cut.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <a
                        href="https://www.instagram.com/grmcutz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                    >
                        View More on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
