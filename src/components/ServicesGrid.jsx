import { FadeUp } from "@/components/FadeUp";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

const services = [
  { title: "Sod Installation", desc: "Fresh sod, grading, and soil prep for instant curb appeal and a lush lawn.", img: "/images/services/service-sod-installation.png", href: "/sod-installation" },
  { title: "Softscaping & Gardens", desc: "Planting, mulch, river rock, garden edging, and low-maintenance landscape upgrades.", img: "/images/services/service-softscaping-gardens.png", href: "/services/softscaping-services" },
  { title: "Retaining Walls", desc: "Structural and decorative walls designed for drainage, grade, and long-term durability.", img: "/images/services/service-retaining-walls.png", href: "/services/retaining-walls" },
  { title: "Interlock Driveways", desc: "Premium paver driveways built to handle Ontario freeze-thaw conditions beautifully.", img: "/images/services/service-interlock-driveways.png" },
  { title: "Interlock Walkways", desc: "Clean walkways and garden paths with crisp paver detailing and premium finish.", img: "/images/services/service-interlock-walkways.png" },
  { title: "Outdoor Staircases", desc: "Stone steps and grade transitions that make sloped yards safer and more elegant.", img: "/images/services/service-outdoor-staircases.png" },
  { title: "Interlock Patios", desc: "Backyard patios and outdoor living areas planned for comfort and long-term use.", img: "/images/services/service-interlock-patios.png" },
  { title: "Outdoor Lighting", desc: "Architectural lighting that extends your outdoor living space into the evening hours.", img: "/images/services/service-outdoor-lighting.png" },
  { title: "Lawn Maintenance", desc: "Seasonal lawn care, edging, cleanup, and upkeep for a sharp exterior all year.", img: "/images/services/service-lawn-maintenance.png" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-evergreen-950 px-4 pb-24 pt-10 lg:pb-32 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, img, href }, i) => (
            <FadeUp key={title} delay={(i % 3) * 0.07}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-evergreen-900/40 shadow-luxury transition duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(214,180,106,0.15)]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={img}
                    alt={`${title} landscaping service`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-black text-warm-white">{title}</h3>
                  <div className="my-3 h-px w-8 bg-gold/60" />
                  <p className="text-sm leading-6 text-warm-white/68">{desc}</p>
                  <a href={href || "#contact"} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-warm-white transition hover:border-gold/50 hover:bg-white/14 hover:text-gold">
                    View Service Details <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
