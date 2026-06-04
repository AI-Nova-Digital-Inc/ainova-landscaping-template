import { Diamond } from "lucide-react";

const badges = ["Premium Stonework", "Quality Sod", "Interlock Specialists", "Outdoor Lighting", "Fully Insured", "Local Service"];

export default function TrustStrip() {
  return (
    <section className="border-y border-black/6 bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-7 text-center text-xs font-black uppercase tracking-[0.28em] text-charcoal/45">Trusted Materials. Professional Standards.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {badges.map((badge) => (
            <div key={badge} className="inline-flex items-center gap-2 rounded-full border border-evergreen-700/20 bg-evergreen-50/60 px-5 py-2.5">
              <Diamond className="size-3 fill-gold text-gold" />
              <span className="text-sm font-black text-evergreen-800">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
