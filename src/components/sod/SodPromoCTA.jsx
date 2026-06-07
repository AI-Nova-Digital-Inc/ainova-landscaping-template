import { site } from "@/config/site";
import { FadeUp } from "@/components/FadeUp";
import { Phone } from "lucide-react";

export default function SodPromoCTA() {
  return (
    <section className="relative overflow-hidden bg-evergreen-800 px-4 py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-evergreen-600/20 blur-3xl" />
      </div>
      <FadeUp>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Limited Season Offer</p>
          <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
            Free Lawn Care Package With Every Installation
          </h2>
          <p className="mt-5 text-lg leading-8 text-warm-white/75">
            Book your sod installation this season and receive complimentary starter fertilizer and professional lawn care guidance — included at no extra charge.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#estimate" className="rounded-full bg-gold px-8 py-4 font-bold text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400">
              Book Estimate
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-bold text-warm-white transition hover:bg-white/10">
              <Phone size={16} /> Call Now {site.phoneDisplay}
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
