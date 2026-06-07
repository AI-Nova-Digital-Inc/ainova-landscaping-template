import { Phone } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const trustPoints = [
  "Custom Planting Plans",
  "Professional Soil Preparation",
  "Free On-Site Consultations",
];

export default function SoftscapingCTA() {
  return (
    <section className="bg-evergreen-800 px-4 py-16 lg:py-24">
      <FadeUp>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-gold">Transform Your Property</p>
          <div className="mx-auto mb-6 h-px w-10 bg-gold/60" />
          <h2 className="font-serif text-3xl font-black leading-tight text-warm-white sm:text-4xl lg:text-5xl">
            Ready to Breathe New Life Into Your Landscape?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-warm-white/78">
            Transform your property with custom garden beds, privacy planting, mulch, river rock, and professional softscaping designed around your home.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-warm-white/80">
                <span className="shrink-0 rounded-full bg-gold/25 p-0.5">
                  <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l4 4 6-6" />
                  </svg>
                </span>
                {point}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#estimate"
              className="rounded-full bg-white px-10 py-4 font-bold text-evergreen-800 shadow-luxury transition hover:-translate-y-0.5 hover:bg-warm-white"
            >
              Book Now
            </a>
            <a
              href="tel:15195550148"
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/18"
            >
              <Phone size={16} /> Call Now +1-519-555-0148
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
