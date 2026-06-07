"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    num: "01", label: "Property Assessment",
    img: "/images/lawn-maintenance/gallery/gallery-01.jpg",
    heading: "Property Assessment",
    desc: "Before your first visit we assess your lawn size, grass type, soil condition, and any problem areas — bare patches, compaction, drainage issues — so we schedule correctly and arrive with the right equipment.",
  },
  {
    num: "02", label: "Mowing & Edging",
    img: "/images/lawn-maintenance/gallery/gallery-02.jpg",
    heading: "Scheduled Mowing & Edging",
    desc: "We mow at the correct height for your grass type — never removing more than one-third of the blade — then edge cleanly along driveways, walkways, and garden beds for a sharp, defined finish every visit.",
  },
  {
    num: "03", label: "Trimming",
    img: "/images/lawn-maintenance/gallery/gallery-03.jpg",
    heading: "Trimming & Line Work",
    desc: "String trimmers tackle areas the mower can't reach — around fences, trees, and obstacles. Every visible edge is cleaned to match the mowed surface and leave a uniform, professional look throughout the yard.",
  },
  {
    num: "04", label: "Blowing & Cleanup",
    img: "/images/lawn-maintenance/gallery/gallery-04.jpg",
    heading: "Blowing & Full Site Cleanup",
    desc: "Clippings, debris, and dust are blown off all hard surfaces — driveways, walkways, patios, and steps — so your property looks immaculate from curb to backyard after every single visit.",
  },
  {
    num: "05", label: "Seasonal Treatments",
    img: "/images/lawn-maintenance/gallery/gallery-05.jpg",
    heading: "Seasonal Treatments & Reporting",
    desc: "Depending on the season we include fertilization scheduling, aeration recommendations, overseeding flagging, and end-of-season leaf cleanup. You receive a visit summary so you're always informed on your lawn's condition.",
  },
];

export default function LawnProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Our Process</p>
          <div className="mx-auto mb-4 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">How We Maintain Your Lawn</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/70">The same five-step routine every visit — because consistent results come from a consistent process.</p>
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
