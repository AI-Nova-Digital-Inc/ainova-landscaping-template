import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const reasons = [
  {
    title: "Preventing Soil Erosion & Managing Drainage",
    text: "Unmanaged slopes erode slowly every season. A properly built retaining wall redirects water, stabilizes soil, and protects your home's foundation from hydrostatic pressure and shifting grade.",
    src: "/images/retaining-walls/retaining-reason-01.png",
    alt: "Preventing soil erosion with retaining wall",
  },
  {
    title: "Maximizing Usable Backyard Space on Sloped Lots",
    text: "Sloped and tiered yards waste space. Retaining walls transform unusable grade changes into flat, functional outdoor areas — patios, garden tiers, play areas, or lawn zones.",
    src: "/images/retaining-walls/retaining-reason-02.png",
    alt: "Maximizing usable backyard space",
  },
  {
    title: "Elevating Curb Appeal & Property Value",
    text: "A professionally built stone retaining wall signals quality construction. It creates clean lines, defines property boundaries, and significantly boosts your home's street presence and resale value.",
    src: "/images/retaining-walls/retaining-reason-03.png",
    alt: "Retaining wall curb appeal property value",
  },
];

export default function RetainingWhySection() {
  return (
    <section className="bg-charcoal px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Why Retaining Walls</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              Why Your Property Needs a Structural Retaining Wall
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              A retaining wall is more than a decorative feature. It protects your landscape, manages soil movement, improves drainage, and helps turn sloped or unusable areas into functional outdoor living space.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, text, src, alt }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-3xl border border-white/8 bg-white/5 transition hover:border-gold/30">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-gold backdrop-blur-sm">
                    Reason 0{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-serif text-lg font-black text-warm-white">{title}</h3>
                  <p className="text-sm leading-7 text-warm-white/65">{text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
