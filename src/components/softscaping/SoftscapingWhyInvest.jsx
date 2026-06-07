import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const reasons = [
  {
    title: 'The "Right Plant, Right Place" Philosophy',
    text: "Sunlight, drainage, soil type, and exposure all matter. We select trees, shrubs, perennials, and ground cover designed to thrive in your specific property conditions.",
    src: "/images/softscaping/softscaping-reason-01.png",
    alt: "Right plant right place garden design",
  },
  {
    title: "Privacy, Shade & Seasonal Interest",
    text: "From evergreen privacy screens to flowering shrubs and ornamental trees, we design softscapes that add beauty, privacy, and year-round structure.",
    src: "/images/softscaping/softscaping-reason-02.png",
    alt: "Privacy hedge and shade planting",
  },
  {
    title: "Soften Hardscapes & Boost Curb Appeal",
    text: "Garden beds, mulch, river rock, and plantings add warmth and life around patios, walkways, retaining walls, and front entrances.",
    src: "/images/softscaping/softscaping-reason-03.png",
    alt: "Softscaping around hardscape features",
  },
];

export default function SoftscapingWhyInvest() {
  return (
    <section className="bg-charcoal px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Why Softscaping</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              Why Invest in Professional Softscaping?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-warm-white/65 leading-7">
              Plants are a living investment. Proper softscaping helps your gardens thrive, improves curb appeal, softens hardscaping, and creates a more refined outdoor environment.
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
