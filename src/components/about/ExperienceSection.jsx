import { FadeUp } from "@/components/FadeUp";
import Image from "next/image";

const features = [
  { title: "Custom Design Approach", desc: "Each project planned around your specific property, goals, and outdoor lifestyle." },
  { title: "Detail-Oriented Installation", desc: "Precise workmanship on every edge, joint, and finish — no shortcuts." },
  { title: "Premium Outdoor Materials", desc: "Quality stone, sod, soil, and hardware selected for Ontario's climate." },
];

export default function ExperienceSection() {
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Left: text */}
        <FadeUp>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Our Approach</p>
          <div className="mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-charcoal sm:text-3xl lg:text-4xl">
            Designed For Ontario Outdoor Living
          </h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            From interlock patios and retaining walls to complete backyard transformations, Everstone Outdoor Living creates elegant outdoor environments built for changing seasons, functionality, and lasting visual appeal.
          </p>
          <div className="mt-8 grid gap-5">
            {features.map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="font-serif text-base font-black text-charcoal">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-charcoal/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Right: image */}
        <FadeUp delay={0.1}>
          <div className="relative h-80 overflow-hidden rounded-2xl border-2 border-gold/20 shadow-luxury lg:h-[480px]">
            <Image
              src="/images/about/about-experience.png"
              alt="Everstone outdoor living experience"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
