'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'
import { Instagram, ExternalLink } from 'lucide-react'

export function FeaturedVideo() {
    const instagramRef = useRef<HTMLQuoteElement>(null)

    // Ensure the embed process runs if the script is already loaded
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process()
        }
    }, [])

    return (
        <section className="section-padding bg-background relative z-10 border-t border-white/5">
            <div className="container-tight text-center">
                <div className="mb-16">
                    <span className="text-sm uppercase tracking-widest text-primary block mb-4 font-bold">Social</span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase">Latest on<br />Instagram</h2>
                </div>

                <div className="flex justify-center max-w-[540px] mx-auto relative min-h-[600px]">

                    {/* Official Instagram Embed - Minimal Container */}
                    <blockquote
                        ref={instagramRef}
                        className="instagram-media w-full"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DR-U22VksF7/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{
                            background: '#050505',
                            border: '0',
                            borderRadius: '0',
                            boxShadow: 'none',
                            margin: '0',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                            display: 'block'
                        }}
                    >
                        {/* Fallback Content */}
                        <div className="p-8 text-center text-white flex flex-col items-center justify-center h-full gap-6 bg-secondary/30">
                            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-2">
                                <Instagram size={32} className="text-white" />
                            </div>
                            <p className="font-bold text-xl uppercase tracking-wider">View on Instagram</p>
                            <a
                                href="https://www.instagram.com/reel/DR-U22VksF7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
                            >
                                <ExternalLink size={14} />
                                Open Post
                            </a>
                        </div>
                    </blockquote>

                    {/* Load Instagram Script Lazily */}
                    <Script
                        src="//www.instagram.com/embed.js"
                        strategy="lazyOnload"
                        onLoad={() => {
                            if (window.instgrm) {
                                window.instgrm.Embeds.process()
                            }
                        }}
                    />
                </div>
            </div>

            {/* Global Type Definition */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    if (typeof window !== 'undefined' && !window.instgrm) {
                        window.instgrm = {
                            Embeds: {
                                process: function() {}
                            }
                        }
                    }
                `
            }} />
        </section>
    )
}

declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void
            }
        }
    }
}
