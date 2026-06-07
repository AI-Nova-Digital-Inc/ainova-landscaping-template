import Image from "next/image";
import { Phone } from "lucide-react";

export default function SodFinalCTA() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-4 py-20 text-center text-white">
      <Image src="/images/sod/sod-hero-main.png" alt="Perfect lawn ready for installation" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-evergreen-950/70 via-evergreen-950/75 to-evergreen-950/85" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-gold">Transform Your Property</p>
        <div className="mx-auto mb-5 h-px w-10 bg-gold/70" />
        <h2 className="font-serif text-3xl font-black leading-tight text-warm-white drop-shadow-2xl sm:text-4xl lg:text-5xl">
          Ready For A Perfect Lawn?
        </h2>
        <p className="mt-5 text-lg leading-8 text-warm-white/80">
          Transform your property with premium sod installation and expert landscaping craftsmanship.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#estimate" className="rounded-full bg-gold px-8 py-4 font-bold text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400">
            Get Free Estimate
          </a>
          <a href="tel:15195550148" className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/18">
            <Phone size={16} /> Call Now +1-519-555-0148
          </a>
        </div>
      </div>
    </section>
  );
}
