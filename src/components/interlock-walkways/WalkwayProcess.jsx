"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    num: "01", label: "Consultation & Layout",
    img: "/images/interlock-walkways/gallery/gallery-01.jpg",
    heading: "Consultation & Layout Design",
    desc: "We walk the property with you, establish the walkway route, width, and transition points, and recommend paver styles that complement your home's existing hardscape and architecture.",
  },
  {
    num: "02", label: "Excavation",
    img: "/images/interlock-walkways/gallery/gallery-02.jpg",
    heading: "Excavation & Sub-Base Prep",
    desc: "Soil is excavated to 8–10 inches below finished grade. The sub-base is checked for soft spots, graded to drain away from structures, and cleared of roots or debris before base material goes in.",
  },
  {
    num: "03", label: "Compacted Base",
    img: "/images/interlock-walkways/gallery/gallery-03.jpg",
    heading: "Compacted Granular Base",
    desc: "Multiple lifts of clear stone and granular A are compacted using a plate compactor to form a rigid, frost-resistant base. This step determines whether your walkway stays level and crack-free long-term.",
  },
  {
    num: "04", label: "Paver Installation",
    img: "/images/interlock-walkways/gallery/gallery-04.jpg",
    heading: "Bedding Sand & Paver Installation",
    desc: "A 1-inch layer of coarse bedding sand is screeded perfectly level. Pavers are set by hand to your chosen pattern with consistent spacing, and all cuts are made precisely along curves and edges.",
  },
  {
    num: "05", label: "Finish & Cleanup",
    img: "/images/interlock-walkways/gallery/gallery-05.jpg",
    heading: "Edge Restraints, Joint Sand & Cleanup",
    desc: "Edge restraints are spiked along all borders to prevent spreading. Polymeric sand is swept into joints, compacted, and activated with water. The site is cleaned, graded, and ready for use within 24 hours.",
  },
];

export default function WalkwayProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Our Process</p>
          <div className="mx-auto mb-4 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">How We Install Your Walkway</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/70">Five steps to a paver walkway that looks sharp and holds up through every Ontario winter.</p>
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
