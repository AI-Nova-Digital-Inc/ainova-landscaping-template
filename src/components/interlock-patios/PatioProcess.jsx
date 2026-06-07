"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    num: "01", label: "Design Consultation",
    img: "/images/interlock-patios/gallery/gallery-01.jpg",
    heading: "On-Site Design Consultation",
    desc: "We meet on-site to understand your vision, measure the space, assess drainage, and recommend paver styles, patterns, and colours that complement your home's exterior and outdoor living goals.",
  },
  {
    num: "02", label: "Excavation & Grading",
    img: "/images/interlock-patios/gallery/gallery-02.jpg",
    heading: "Excavation & Precision Grading",
    desc: "Existing soil is excavated to the required depth — typically 8–12 inches. The sub-grade is graded to slope away from the home for proper water runoff and long-term structural stability.",
  },
  {
    num: "03", label: "Granular Base",
    img: "/images/interlock-patios/gallery/gallery-03.jpg",
    heading: "Compacted Granular Base",
    desc: "A compacted layer of clear stone and granular A is installed in lifts and plate-compacted to form a rigid, frost-stable base — the single most critical step that determines whether your patio stays level for decades.",
  },
  {
    num: "04", label: "Edge Restraints",
    img: "/images/interlock-patios/gallery/gallery-04.jpg",
    heading: "Edge Restraint Installation",
    desc: "Plastic or aluminum edge restraints are spiked into the base along all perimeters to permanently lock pavers in place and prevent edge creep or spreading over time — even through Ontario freeze-thaw cycles.",
  },
  {
    num: "05", label: "Paver Installation",
    img: "/images/interlock-patios/gallery/gallery-05.jpg",
    heading: "Paver Laying & Pattern Setting",
    desc: "Pavers are laid to your chosen pattern — herringbone, running bond, or custom design — with consistent joints maintained throughout. All cuts are made with a wet saw for clean, precise edges at every border.",
  },
  {
    num: "06", label: "Sand & Sealing",
    img: "/images/interlock-patios/gallery/gallery-06.jpg",
    heading: "Polymeric Sand & Final Sealing",
    desc: "Joints are filled with polymeric sand and plate-compacted in. Optional sealer is applied to enhance colour, lock sand permanently, and protect the surface from staining and freeze-thaw damage for years to come.",
  },
];

export default function PatioProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Our Process</p>
          <div className="mx-auto mb-4 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">How We Build Your Patio</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/70">Six steps to a patio that looks stunning and holds up through every Ontario season.</p>
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
