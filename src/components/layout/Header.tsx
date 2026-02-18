'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled || isOpen
                ? 'bg-black/95 backdrop-blur-md border-white/5 py-4 lg:py-8'
                : 'bg-transparent border-transparent py-8 lg:py-20'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between gap-8">
                    <Link href="/" className="relative w-[280px] h-[80px] lg:w-[540px] lg:h-[190px] transition-transform hover:scale-105 active:scale-95 flex-shrink-0">
                        <Image
                            src="/images/logo-transparent.png"
                            alt="GrmCutz Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <Link href="#gallery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Gallery</Link>
                        <Link href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Services</Link>
                        <Link href="#reviews" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Reviews</Link>
                        <div className="h-4 w-px bg-white/10 mx-2"></div>
                        <a
                            href="https://www.instagram.com/grmcutz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                        <Button
                            href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                            external
                            className="px-6 py-2.5 text-xs"
                        >
                            Book Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-4 animate-in slide-in-from-top-2">
                    <div className="flex flex-col gap-4">
                        <Link href="#gallery" className="text-lg font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>Gallery</Link>
                        <Link href="#services" className="text-lg font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>Services</Link>
                        <Link href="#reviews" className="text-lg font-medium text-gray-300 hover:text-white" onClick={toggleMenu}>Reviews</Link>
                        <a
                            href="https://www.instagram.com/grmcutz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-white"
                        >
                            <Instagram size={20} /> Instagram
                        </a>
                        <Button
                            href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                            external
                            className="w-full py-4 text-sm"
                            onClick={toggleMenu}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
