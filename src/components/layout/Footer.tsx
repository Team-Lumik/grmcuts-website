import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative w-32 h-10">
                            <Image
                                src="/images/logo-transparent.png"
                                alt="GrmCutz Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 max-w-xs">
                            Premium grooming services in Manassas, VA. Sharp cuts, clean finish, and a chill atmosphere.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.instagram.com/grmcutz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Navigate</h4>
                        <ul className="space-y-2">
                            <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
                            <li>
                                <a
                                    href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-1"
                                >
                                    Book Now <ExternalLink size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Location</h4>
                        <address className="not-italic text-gray-400 flex flex-col gap-2">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="text-white font-medium">Inside JazCutz</p>
                                    <p>9424 Church St</p>
                                    <p>Manassas, VA 20110</p>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                <p className="text-sm text-gray-300">
                                    <span className="block font-bold text-white mb-1">Hours</span>
                                    Tue - Sat: By Appointment<br />
                                    Sun - Mon: Closed
                                </p>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} GrmCutz. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-help hover:text-gray-300 transition-colors">Privacy Policy</span>
                        <span className="cursor-help hover:text-gray-300 transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
