import { FadeUp } from "@/components/FadeUp";
import { Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <FadeUp>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Get Started</p>
          <div className="mx-auto mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-charcoal sm:text-3xl lg:text-4xl">
            Request A Free Landscaping Estimate
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">
            Tell us about your outdoor project and our team will help create a refined landscape designed around your property.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/about#estimate"
              className="rounded-full bg-evergreen-700 px-8 py-4 font-semibold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600"
            >
              Book Your Estimate
            </a>
            <a
              href="tel:15195550148"
              className="flex items-center gap-2 rounded-full border-2 border-charcoal/20 px-8 py-4 font-semibold text-charcoal transition hover:border-evergreen-700 hover:text-evergreen-700"
            >
              <Phone size={16} />
              Call Now +1-519-555-0148
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
