import { Star } from 'lucide-react'

export function Testimonials() {
    const reviews = [
        {
            name: "Stephan",
            date: "Oct 4, 2025",
            text: "Did exactly what I asked for , and very easy to work with !"
        },
        {
            name: "Darius",
            date: "Nov 26, 2025",
            text: "Best in the shop!!"
        },
        {
            name: "gabe",
            date: "Nov 21, 2025",
            text: "Man, let me tell y’all somethin’. This young brother right here? He got hands blessed by the Lord Himself. Been around a lotta barbers in my day, but this one? Yeah… this one’s a keeper."
        },
        {
            name: "Brady",
            date: "Jun 26, 2025",
            text: "Just got a fresh cut and I couldn’t be happier! Germain was professional, skilled, and really paid attention to the details. He took the time to make sure everything was clean and sharp, and the fade came out perfect. The atmosphere was chill, and I felt completely comfortable throughout. Highly recommend—definitely found my go-to spot! 💈🔥"
        }
    ]

    // Double the reviews for infinite scroll
    const scrollingReviews = [...reviews, ...reviews]

    return (
        <section id="reviews" className="py-24 bg-secondary/20 relative overflow-hidden border-t border-white/5">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="text-center mb-20">
                    <span className="text-sm uppercase tracking-[0.3em] text-primary block mb-4 font-bold">Client Love</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Testimonials</h2>
                </div>

                {/* Infinite Carousel Container */}
                <div className="flex overflow-hidden group">
                    <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] py-4">
                        {scrollingReviews.map((review, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[350px] md:w-[450px] bg-black/40 backdrop-blur-md border border-white/5 p-10 rounded-xl shadow-2xl transition-all duration-500 hover:border-primary/20 hover:bg-black/60"
                            >
                                <div className="flex gap-1 text-primary mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-8 leading-relaxed italic text-lg">&ldquo;{review.text}&rdquo;</p>
                                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white tracking-wide">{review.name}</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{review.date}</span>
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <span className="text-[10px] text-primary font-bold">G</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
