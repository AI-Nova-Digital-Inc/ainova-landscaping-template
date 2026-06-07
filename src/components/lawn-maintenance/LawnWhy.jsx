import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const reasons = [
  { number: "01", title: "Consistent Sharp Results", img: "/images/lawn-maintenance/benefits/benefit-01.jpg", text: "Regular mowing, edging, and trimming keep your lawn looking crisp and well-maintained throughout the growing season." },
  { number: "02", title: "Protects Your Investment", img: "/images/lawn-maintenance/benefits/benefit-02.jpg", text: "Proper lawn care prevents compaction, weed overgrowth, and bare patches — keeping your sod or grass healthy long-term." },
  { number: "03", title: "Reliable, Scheduled Service", img: "/images/lawn-maintenance/benefits/benefit-03.jpg", text: "We show up on schedule so you don't have to think about it. A tidy lawn every week without lifting a finger." },
];

export default function LawnWhy() {
  return (
    <section className="bg-charcoal px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Why Professional Lawn Care</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-warm-white lg:text-4xl">Why Hire A Professional Lawn Maintenance Team?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-warm-white/65">A well-maintained lawn improves your home's curb appeal, protects your landscaping investment, and saves you time every week.</p>
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
