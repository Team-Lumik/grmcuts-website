import { MapPin, Clock } from 'lucide-react'

export function Location() {
    return (
        <section id="location" className="section-padding bg-background border-t border-white/5 relative z-10">
            <div className="container-tight">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Info Side */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-sm uppercase tracking-widest text-primary block mb-4 font-bold">Visit Us</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tighter uppercase mb-8">Location &<br />Hours</h2>
                            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
                                Experience premier grooming inside <span className="text-white font-serif italic text-xl">JazCutz</span>.
                                Appointments recommended, walk-ins welcome upon availability.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="border-l-2 border-primary/50 pl-6">
                                <h3 className="text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <MapPin size={16} className="text-primary" /> Address
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    9242 Church St<br />
                                    Manassas, VA 20110
                                </p>
                                <a
                                    href="https://maps.google.com/?q=9242+Church+St,+Manassas,+VA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-xs font-bold uppercase tracking-widest mt-4 inline-block border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors pb-0.5"
                                >
                                    Get Directions
                                </a>
                            </div>

                            <div className="border-l-2 border-primary/50 pl-6">
                                <h3 className="text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Clock size={16} className="text-primary" /> Hours
                                </h3>
                                <ul className="text-gray-400 space-y-2 text-sm">
                                    <li className="flex justify-between max-w-[200px]"><span className="uppercase tracking-wide">Tue - Fri</span> <span className="text-white">3:30pm - 7pm</span></li>
                                    <li className="flex justify-between max-w-[200px]"><span className="uppercase tracking-wide">Sat</span> <span className="text-white">9am - 4:30pm</span></li>
                                    <li className="flex justify-between max-w-[200px]"><span className="uppercase tracking-wide">Sun - Mon</span> <span className="text-white/50">Closed</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-white/5 max-w-[200px]">
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">After Hour Cuts</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        Text <span className="text-white font-medium">571-564-4461</span><br />
                                        or DM on <a href="https://www.instagram.com/grmcutz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">Instagram</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Side - Minimal */}
                    <div className="relative">
                        <div className="aspect-square w-full bg-secondary grayscale hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.277397753644!2d-77.47775968465493!3d38.751388979592755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65b6a71500001%3A0xe7a5c5f877777777!2s9242%20Church%20St%2C%20Manassas%2C%20VA%2020110!5e0!3m2!1sen!2sus!4v1676661234567!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-white/20 hidden md:block"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
