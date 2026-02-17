export function Services() {
    const services = [
        { name: "Any Haircut", price: "$25.00", duration: "45min" },
        { name: "Any Haircut/Beard", price: "$30.00", duration: "50min" },
        { name: "Shape Up", price: "$20.00", duration: "20min" },
    ]

    return (
        <section id="services" className="section-padding bg-background relative z-10">
            <div className="container-tight">
                <div className="mb-20 md:mb-32">
                    <span className="text-sm uppercase tracking-widest text-primary block mb-4 font-bold">Menu</span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase">Services</h2>
                </div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row md:items-baseline justify-between py-8 border-b border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="mb-2 md:mb-0">
                                <h3 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">{service.name}</h3>
                            </div>
                            <div className="flex items-center gap-8 md:gap-12">
                                <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{service.duration}</span>
                                <span className="text-xl md:text-2xl font-bold text-primary">{service.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center md:text-left">
                    <p className="text-primary text-sm uppercase tracking-widest font-bold bg-white/5 py-3 px-6 rounded-lg inline-block border border-primary/20">
                        * Eyebrows, designs, and enhancements are always free
                    </p>
                </div>
            </div>
        </section>
    )
}
