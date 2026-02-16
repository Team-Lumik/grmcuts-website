'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'

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
                ? 'bg-black/95 backdrop-blur-md border-white/5 py-4'
                : 'bg-transparent border-transparent py-6 md:py-8'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative w-32 h-12 md:w-40 md:h-14 transition-transform hover:scale-105">
                        <Image
                            src="/images/logo-transparent.png"
                            alt="GrmCutz Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#gallery" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Gallery</Link>
                        <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
                        <Link href="#reviews" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Reviews</Link>
                        <div className="h-4 w-px bg-white/10"></div>
                        <a
                            href="https://www.instagram.com/grmcutz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                        >
                            Book Now
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-4 animate-in slide-in-from-top-2">
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
                        <a
                            href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-black text-center py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                            onClick={toggleMenu}
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
