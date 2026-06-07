import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const materials = [
  {
    title: "Armor Stone Retaining Walls",
    text: "Large-format natural armor stone delivers unmatched structural strength for taller walls and steep grade changes. Bold, rugged, and built to last decades in Ontario's freeze-thaw climate.",
    src: "/images/retaining-walls/retaining-material-armor-stone.png",
    alt: "Armor stone retaining wall installation",
  },
  {
    title: "Modular Interlock Block Walls",
    text: "Highly versatile modular block systems allow for curves, steps, and tiered designs. A clean, modern aesthetic perfect for residential backyard walls, garden borders, and front yard features.",
    src: "/images/retaining-walls/material-block-wall.png",
    alt: "Modular interlock block retaining wall",
  },
  {
    title: "Natural Stone Garden Walls",
    text: "Natural fieldstone and flagstone walls bring organic warmth and a timeless look to garden beds, property borders, and low decorative walls. Each installation is unique.",
    src: "/images/retaining-walls/material-natural-stone.png",
    alt: "Natural stone garden wall",
  },
];

export default function RetainingMaterials() {
  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Materials</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">
              Premium Retaining Wall Materials We Install
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-charcoal/65">
              Choosing the right wall material depends on your slope, design goals, budget, and property layout. We install durable stone systems designed for Ontario freeze-thaw conditions.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map(({ title, text, src, alt }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm transition hover:shadow-luxury">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="mb-3 font-serif text-lg font-black text-charcoal">{title}</h3>
                  <p className="text-sm leading-7 text-charcoal/65">{text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#estimate"
              className="inline-block rounded-full bg-evergreen-700 px-10 py-4 font-bold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600"
            >
              Get A Free Quote
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
