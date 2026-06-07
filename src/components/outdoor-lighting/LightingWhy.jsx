import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const reasons = [
  { number: "01", title: "Extend Outdoor Living Hours", img: "/images/outdoor-lighting/benefits/benefit-01.jpg", text: "Well-placed landscape lighting lets you enjoy your patio, garden, and driveway long after sunset — extending usable outdoor time." },
  { number: "02", title: "Improve Home Security", img: "/images/outdoor-lighting/benefits/benefit-02.jpg", text: "Strategically lit pathways, entries, and dark corners deter trespassers and improve visibility around the property at night." },
  { number: "03", title: "Premium After-Dark Curb Appeal", img: "/images/outdoor-lighting/benefits/benefit-03.jpg", text: "Architectural lighting transforms the look of your home after dark — highlighting stonework, trees, and landscaping features." },
];

export default function LightingWhy() {
  return (
    <section className="bg-charcoal px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Why Outdoor Lighting</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-warm-white lg:text-4xl">Why Invest in Outdoor Lighting?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-warm-white/65">Outdoor lighting is one of the highest-ROI upgrades a homeowner can make — improving safety, security, ambiance, and curb appeal simultaneously.</p>
          </div>
        </FadeUp>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ number, title, img, text }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-evergreen-900/30 shadow-luxury transition duration-300 hover:-translate-y-1.5 hover:border-gold/40">
                <div className="relative h-52 overflow-hidden">
                  <Image src={img} alt={title} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <span className="absolute left-5 top-5 font-serif text-4xl font-black text-gold/60">{number}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl font-black text-warm-white">{title}</h3>
                  <div className="my-3 h-px w-8 bg-gold/50" />
                  <p className="text-sm leading-6 text-warm-white/65">{text}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
