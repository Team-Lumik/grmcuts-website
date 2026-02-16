import { Hero } from "@/components/sections/Hero";

import { Gallery } from "@/components/sections/Gallery";
import { FeaturedVideo } from "@/components/sections/FeaturedVideo";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />

        <Gallery />
        <FeaturedVideo />
        <Services />
        <Testimonials />
        <BookingCTA />
        <Location />
      </main>
    </div>
  );
}
