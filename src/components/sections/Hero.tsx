import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
            {/* 1. Cinematic Video Background */}
            <div className="absolute inset-0 z-0 select-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover object-center w-full h-full"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                {/* 2. Cinematic Overlays */}
                {/* Darkens video for text readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Gradient from bottom for seamless section transition */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

                {/* "Grain" Texture for Film Look (Optional, can be removed for cleaner look) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
                </div>
            </div>

            {/* 3. Hero Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 gap-8 flex flex-col items-center">

                    {/* Location Badge */}
                    <div className="mb-4">
                        <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-white/70 text-xs md:text-sm tracking-[0.3em] font-medium uppercase">
                            Manassas, VA
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight uppercase leading-[0.9]">
                        Precision<span className="text-primary">.</span><br />
                        Defined<span className="text-primary">.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="max-w-md text-white/60 text-sm md:text-base font-light tracking-wide leading-relaxed">
                        Experience the art of modern grooming. <br className="hidden md:block" />
                        Luxury cuts, fades, and beard sculpting.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-8 w-full md:w-auto">
                        <a
                            href="https://booksy.com/en-us/1437938_grmcuts_barber-shop_38420_manassas#ba_s=seo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto min-w-[200px] px-8 py-4 bg-primary text-white text-sm uppercase tracking-widest font-bold hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(210,43,43,0.3)] hover:shadow-[0_0_30px_rgba(210,43,43,0.5)]"
                        >
                            Book Appointment
                        </a>
                        <Link
                            href="#gallery"
                            className="text-white/70 hover:text-white text-sm uppercase tracking-widest border-b border-white/20 hover:border-white transition-all pb-1"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[2000ms] text-white/30">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </div>
        </section>
    )
}
