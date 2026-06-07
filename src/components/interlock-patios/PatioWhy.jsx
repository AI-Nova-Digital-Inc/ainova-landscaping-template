import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const reasons = [
  { number: "01", title: "Expand Your Living Space", img: "/images/interlock-patios/benefits/benefit-01.jpg", text: "A well-designed patio extends your home's usable space outdoors — perfect for dining, relaxing, and entertaining through Ontario's warmer months." },
  { number: "02", title: "Luxury Curb Appeal", img: "/images/interlock-patios/benefits/benefit-02.jpg", text: "Premium paver patios with accent borders, patterns, and built-in seating walls add visual value and make a lasting first impression." },
  { number: "03", title: "Built for Ontario Seasons", img: "/images/interlock-patios/benefits/benefit-03.jpg", text: "Properly installed with drainage and a compacted base, interlock patios handle freeze-thaw cycles without cracking or heaving." },
];

export default function PatioWhy() {
  return (
    <section className="bg-charcoal px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Why Choose Interlock</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-warm-white lg:text-4xl">Why Choose An Interlock Patio?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-warm-white/65">Interlock patios combine premium aesthetics with long-term durability — the right choice for Kitchener-Waterloo homeowners who want outdoor living done right.</p>
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
