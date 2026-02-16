import { Calendar } from 'lucide-react'

export function BookingCTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-secondary via-black to-secondary border-t border-white/5 relative overflow-hidden">
            {/* Abstract background shapes */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                    Start Looking Sharp
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Ready to book?
                </h2>

                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                    Choose your service → pick a time → you’re set.
                </p>

                <a
                    href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                    <Calendar size={20} />
                    BOOK NOW
                </a>
            </div>
        </section>
    )
}
