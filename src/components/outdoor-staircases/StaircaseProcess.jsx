"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    num: "01", label: "Site Assessment",
    img: "/images/outdoor-staircases/gallery/gallery-01.jpg",
    heading: "Site Assessment & Design",
    desc: "We measure the grade change, calculate riser-to-tread ratios for safe stepping, and design the staircase layout on-site. Material options — armour stone, interlock, or natural stone — are reviewed together.",
  },
  {
    num: "02", label: "Excavation",
    img: "/images/outdoor-staircases/gallery/gallery-02.jpg",
    heading: "Excavation & Foundation Prep",
    desc: "The staircase footprint is excavated below frost line. A compacted granular base is installed to prevent heaving and shifting through Ontario's extreme freeze-thaw cycles, giving the staircase a solid anchor.",
  },
  {
    num: "03", label: "Base Footing",
    img: "/images/outdoor-staircases/gallery/gallery-03.jpg",
    heading: "Base Stone & Footing",
    desc: "Large base stones or concrete footings are set and leveled at grade to anchor the first riser firmly. This foundation layer is the most critical element in long-term staircase stability and safety.",
  },
  {
    num: "04", label: "Riser & Tread Install",
    img: "/images/outdoor-staircases/gallery/gallery-04.jpg",
    heading: "Riser & Tread Installation",
    desc: "Each riser is set plumb and level, with treads selected for consistent depth and safe overhang. Stones are pinned or mortared as required for the material type, height, and load requirements of the staircase.",
  },
  {
    num: "05", label: "Backfill & Grading",
    img: "/images/outdoor-staircases/gallery/gallery-05.jpg",
    heading: "Backfill & Side Grading",
    desc: "Side walls are backfilled with compacted granular material. Surrounding grade is re-established to drain away from the structure and transition cleanly to lawn, sod, or existing hardscape on both sides.",
  },
  {
    num: "06", label: "Final Finish",
    img: "/images/outdoor-staircases/gallery/gallery-06.jpg",
    heading: "Final Finish & Cleanup",
    desc: "Joints are pointed, caps are set, and the full staircase is inspected for plumb, level, and uniform overhang on every tread. The site is cleaned and all debris removed before final client walkthrough.",
  },
];

export default function StaircaseProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Our Process</p>
          <div className="mx-auto mb-4 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">How We Build Your Staircase</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/70">Six steps from grade change to a safe, beautiful staircase built to last through every Ontario season.</p>
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
