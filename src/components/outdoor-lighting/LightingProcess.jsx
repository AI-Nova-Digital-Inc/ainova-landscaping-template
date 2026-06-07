"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    num: "01", label: "Design Walkthrough",
    img: "/images/outdoor-lighting/gallery/gallery-01.jpg",
    heading: "Design Consultation & Walkthrough",
    desc: "We walk your property at dusk when possible, identifying focal points — architecture, trees, pathways, water features — and discuss the mood, brightness, and zones you want to control independently.",
  },
  {
    num: "02", label: "Lighting Plan",
    img: "/images/outdoor-lighting/gallery/gallery-02.jpg",
    heading: "Lighting Plan & Fixture Selection",
    desc: "A scaled layout is produced showing fixture placement, aiming angles, and cable routes. We recommend fixture types — spotlights, path lights, wall wash, uplights — and colour temperatures for each zone.",
  },
  {
    num: "03", label: "Cable Trenching",
    img: "/images/outdoor-lighting/gallery/gallery-03.jpg",
    heading: "Cable Trenching & Routing",
    desc: "Low-voltage cable is trenched 6 inches below grade along planned routes. All cables are protected with conduit at crossing points and routed to minimize future disruption to landscaping or hardscape.",
  },
  {
    num: "04", label: "Fixture Mounting",
    img: "/images/outdoor-lighting/gallery/gallery-04.jpg",
    heading: "Fixture Mounting & Precision Aiming",
    desc: "Fixtures are installed at engineered positions and aimed precisely to avoid light spill onto neighbours, minimize glare, and achieve the designed effect for each focal point, pathway, and architectural feature.",
  },
  {
    num: "05", label: "Programming & Handoff",
    img: "/images/outdoor-lighting/gallery/gallery-05.jpg",
    heading: "Transformer Install & Programming",
    desc: "A weather-rated transformer is mounted and programmed with timed schedules and photocell control. Zones are balanced for consistent output, the full system is tested, and we walk you through controls at handoff.",
  },
];

export default function LightingProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Our Process</p>
          <div className="mx-auto mb-4 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">How We Light Your Property</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/70">Five steps from design walkthrough to a fully programmed lighting system that transforms your property after dark.</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.num}
              type="button"
              onClick={() => setActive(i)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-gold text-charcoal shadow-lg"
                  : "border border-white/20 text-warm-white/70 hover:border-gold/50 hover:text-warm-white"
              }`}
            >
              <span className="mr-1.5 text-xs opacity-60">{s.num}</span>{s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid items-center gap-8 overflow-hidden rounded-3xl bg-white shadow-luxury lg:grid-cols-2"
          >
            <div className="relative h-72 lg:h-[420px]">
              <Image src={step.img} alt={step.heading} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-8 lg:p-12">
              <span className="font-serif text-7xl font-black text-evergreen-700/15 leading-none">{step.num}</span>
              <h3 className="mt-2 font-serif text-2xl font-black text-charcoal lg:text-3xl">{step.heading}</h3>
              <div className="my-4 h-px w-10 bg-gold" />
              <p className="text-base leading-8 text-charcoal/70">{step.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
