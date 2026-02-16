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

    return (
        <section id="reviews" className="py-20 bg-secondary/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Love</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-lg hover:shadow-primary/5 transition-all">
                            <div className="flex gap-1 text-primary mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed italic">"{review.text}"</p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                <span className="font-bold text-white">{review.name}</span>
                                <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
