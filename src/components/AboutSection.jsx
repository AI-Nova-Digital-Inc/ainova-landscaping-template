import { site } from "@/config/site";
import { FadeUp } from "@/components/FadeUp";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-warm-white px-4 pb-12 pt-12 lg:pb-16 lg:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Image collage */}
        <FadeUp>
          <div className="relative h-[480px] lg:h-[560px]">
            {/* Main large image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-gold/30 shadow-luxury">
              <Image src="/images/gallery/gallery-stone-steps-01.png" alt="Premium stone steps landscaping" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            {/* Bottom-right overlay image */}
            <div className="absolute -bottom-6 -right-4 h-48 w-56 overflow-hidden rounded-2xl border-2 border-gold/40 shadow-luxury lg:-right-8 lg:h-56 lg:w-64">
              <Image src="/images/gallery/gallery-retaining-wall-01.png" alt="Retaining wall landscaping" fill sizes="280px" className="object-cover" />
            </div>
            {/* Top-left badge */}
            <div className="absolute -left-4 top-6 rounded-2xl bg-evergreen-800 px-5 py-4 shadow-luxury lg:-left-8">
              <p className="text-2xl font-black text-gold">10+</p>
              <p className="text-xs font-semibold text-warm-white/80">Years Experience</p>
            </div>
          </div>
        </FadeUp>

        {/* Text */}
        <FadeUp delay={0.12}>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Committed to Refined Outdoor Living</p>
          <div className="mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-charcoal sm:text-3xl lg:text-4xl">
            The Premier Landscaping Company in Kitchener-Waterloo
          </h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Everstone Outdoor Living designs and builds refined outdoor spaces for homeowners who value craftsmanship, curb appeal, and lasting quality. From interlock patios to retaining walls and complete backyard transformations, our work is built around your property, lifestyle, and long-term vision.
          </p>
          <p className="mt-4 text-lg leading-8 text-charcoal/70">
            Our team focuses on transparent communication, premium materials, clean job sites, and detail-driven installation methods designed for Ontario homes and changing seasons.
          </p>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-evergreen-700 px-8 py-4 font-semibold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600">
            Learn More About Us
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
