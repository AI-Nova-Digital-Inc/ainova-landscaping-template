import { site } from "@/config/site";
import { FadeUp } from "@/components/FadeUp";
import { CheckCircle2, Phone } from "lucide-react";

const points = ["Fast, No-Obligation Quotes", "Expert Design Advice", "Transparent, Honest Pricing"];

export default function EstimateCTA() {
  return (
    <section className="bg-evergreen-900 px-4 py-24 text-center lg:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <h2 className="font-serif text-3xl font-black text-warm-white sm:text-4xl lg:text-5xl">
            Request A Free Landscaping Estimate Today
          </h2>
          <div className="mx-auto mt-5 mb-7 h-px w-12 bg-gold" />
          <p className="text-lg leading-8 text-warm-white/72">
            Ready to transform your outdoor space? Tell us about your project and our team will help you plan a refined, durable landscape built around your home.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {points.map((p) => (
              <span key={p} className="inline-flex items-center gap-2 text-sm font-semibold text-warm-white/85">
                <CheckCircle2 className="size-4 text-gold" /> {p}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="w-full rounded-full bg-warm-white px-8 py-4 font-black text-evergreen-900 shadow-luxury transition hover:-translate-y-0.5 hover:bg-white sm:w-auto">
              Book Your Free Estimate
            </a>
            <a href={`tel:${site.phone}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/8 px-8 py-4 font-semibold text-white transition hover:bg-white/15 sm:w-auto">
              <Phone size={17} /> Call Now {site.phoneDisplay}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
