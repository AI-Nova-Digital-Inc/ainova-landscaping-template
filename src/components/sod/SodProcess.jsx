"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    num: "01", label: "Old Sod Removal", img: "/images/sod/process/process-step-01.png",
    heading: "Complete Old Sod Removal",
    desc: "We begin by stripping and removing all existing sod, dead grass, thatch, and debris. Full removal ensures no old root systems interfere with new growth and gives us a clean, workable base to build upon.",
  },
  {
    num: "02", label: "Soil Installation", img: "/images/sod/process/process-step-02.png",
    heading: "Premium Soil Installation",
    desc: "Fresh, nutrient-rich topsoil is installed across the full lawn area. We use a blend optimized for Ontario's clay-heavy ground conditions, improving drainage and providing the ideal growing medium for premium sod.",
  },
  {
    num: "03", label: "Grading & Sloping", img: "/images/sod/process/process-step-03.png",
    heading: "Precision Grading & Sloping",
    desc: "Proper grading is the foundation of a lasting lawn. We slope the grade away from your home's foundation and eliminate low spots that collect standing water — protecting both your lawn and your property.",
  },
  {
    num: "04", label: "Fertilizer Application", img: "/images/sod/process/process-step-04.png",
    heading: "Starter Fertilizer Application",
    desc: "A premium starter fertilizer is applied directly to the prepared soil before sod is laid. This encourages rapid root establishment and gives new sod the nutrients it needs to anchor quickly and grow dense.",
  },
  {
    num: "05", label: "Sod Installation", img: "/images/sod/process/process-step-05.png",
    heading: "Premium Sod Installation",
    desc: "We install certified Kentucky Bluegrass and fescue sod sourced from Ontario growers, laid in staggered rows with tight seams. Every edge, border, and curved transition is cut to fit with precision.",
  },
  {
    num: "06", label: "Roll New Sod", img: "/images/sod/process/process-step-06.png",
    heading: "Rolling For Root Contact",
    desc: "After installation, we roll the entire lawn to press the sod firmly into the soil beneath. This eliminates air pockets, ensures maximum soil contact, and accelerates root establishment for a lush, even surface.",
  },
  {
    num: "07", label: "Initial Watering", img: "/images/sod/process/process-step-07.png",
    heading: "Deep Initial Watering",
    desc: "We complete every installation with a thorough initial watering that soaks through the sod and into the soil below. You receive a detailed watering schedule customized to your lawn size and the current season.",
  },
];

export default function SodProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Premium Process</p>
          <div className="mx-auto mb-4 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">The Gold Standard</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/70">Our Premium Sod Installation Process</p>
        </div>

        {/* Step tabs */}
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

        {/* Step content */}
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
