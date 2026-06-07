import { FadeUp } from "@/components/FadeUp";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const bullets = [
  "Premium Materials",
  "Professional Installation",
  "Transparent Quotes",
  "Fully Insured",
  "Clean Job Sites",
  "Long-Term Durability",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left: image */}
        <FadeUp>
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-luxury lg:h-[480px]">
            <Image
              src="/images/about/about-sod-installation.png"
              alt="Premium sod installation by Everstone"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeUp>

        {/* Right: text */}
        <FadeUp delay={0.1}>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Why Everstone</p>
          <div className="mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-warm-white sm:text-3xl lg:text-4xl">
            Why Homeowners Choose Everstone Outdoor Living
          </h2>
          <p className="mt-5 text-lg leading-8 text-warm-white/70">
            We focus on premium craftsmanship, transparent communication, clean job sites, and outdoor spaces designed for long-term durability and curb appeal.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle size={18} className="shrink-0 text-gold" />
                <span className="text-sm font-semibold text-warm-white/85">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#estimate"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            Contact Our Team
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
