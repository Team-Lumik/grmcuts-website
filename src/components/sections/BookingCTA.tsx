import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'


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

                <Button
                    href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                    external
                    className="gap-2 px-10 py-5 text-lg"
                >
                    <Calendar size={20} />
                    BOOK NOW
                </Button>
            </div>
        </section>
    )
}
