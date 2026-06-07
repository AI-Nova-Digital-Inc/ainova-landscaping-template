"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const steps = [
  { step: "01", label: "Preparation", img: "/images/interlock-driveways/process/01-preparation.jpg", text: "We mark the driveway layout, confirm grades, review drainage direction, and prepare the site for clean excavation and installation." },
  { step: "02", label: "Excavation", img: "/images/interlock-driveways/process/02-excavation.jpg", text: "Old asphalt, concrete, soil, or unstable material is removed to the proper depth so the new driveway can be built on a strong foundation." },
  { step: "03", label: "Base Preparation", img: "/images/interlock-driveways/process/03-base-prep.jpg", text: "A compacted granular base is installed in layers to support vehicle loads and reduce movement through Ontario freeze-thaw cycles." },
  { step: "04", label: "Screeding", img: "/images/interlock-driveways/process/04-screeding.webp", text: "A smooth bedding layer is carefully screeded to create an even surface for accurate paver placement and consistent final elevation." },
  { step: "05", label: "Paver Installation", img: "/images/interlock-driveways/process/05-paver-installation.webp", text: "Pavers are installed in the selected pattern with clean alignment, proper spacing, and attention to the final visual finish." },
  { step: "06", label: "Cutting", img: "/images/interlock-driveways/process/06-cutting.webp", text: "Pavers are carefully cut around borders, curves, edges, and fixed structures to create a clean professional finish." },
  { step: "07", label: "Accent Borders", img: "/images/interlock-driveways/process/07-accent-borders.webp", text: "Contrasting borders and accent patterns are installed to define the driveway, add structure, and create a premium custom look." },
  { step: "08", label: "Edge Restraints", img: "/images/interlock-driveways/process/08-edge-restraints.webp", text: "Edge restraints are installed to hold the pavers in place and help prevent spreading or shifting over time." },
  { step: "09", label: "Compaction", img: "/images/interlock-driveways/process/09-compaction.webp", text: "The installed pavers are compacted into the bedding layer to lock the surface together and create a stable finish." },
  { step: "10", label: "Polymeric Sand", img: "/images/interlock-driveways/process/10-polymeric-sand.webp", text: "Polymeric sand is swept into the joints and activated to help reduce weed growth, improve stability, and complete the surface." },
  { step: "11", label: "Sealing", img: "/images/interlock-driveways/process/11-sealing.webp", text: "Optional sealing can enhance colour, protect the surface, and give the driveway a clean finished appearance." },
];

export default function InterlockProcess() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(steps.length - 1, i + 1));
  const current = steps[active];

  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-warm-white lg:text-4xl">
              Our Interlock Driveway Installation Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-warm-white/65">
              A beautiful driveway starts below the surface. Our installation process focuses on excavation, proper base preparation, drainage, screeding, paver alignment, compaction, polymeric sand, and optional sealing for long-term performance.
            </p>
          </div>
        </FadeUp>

        {/* Tab row */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex min-w-max gap-1 border-b border-white/12 pb-1">
            {steps.map(({ step, label }, i) => (
              <button
                key={step}
                type="button"
                onClick={() => setActive(i)}
                className={`relative whitespace-nowrap px-4 py-2.5 text-sm font-semibold transition ${active === i ? "text-gold" : "text-warm-white/55 hover:text-warm-white/80"}`}
              >
                <span className="mr-1.5 text-xs opacity-60">{step}</span>
                {label}
                {active === i && (
                  <motion.span layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
              className="relative aspect-video overflow-hidden rounded-3xl shadow-luxury"
            >
              <Image
                src={current.img}
                alt={current.label}
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <span className="font-serif text-6xl font-black text-gold/30">{current.step}</span>
              <h3 className="mt-2 font-serif text-2xl font-black text-warm-white lg:text-3xl">{current.label}</h3>
              <div className="my-4 h-px w-10 bg-gold/60" />
              <p className="text-base leading-7 text-warm-white/70">{current.text}</p>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={prev}
                  disabled={active === 0}
                  className="grid size-11 place-items-center rounded-full border border-white/20 text-warm-white transition hover:border-gold hover:text-gold disabled:opacity-30"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={active === steps.length - 1}
                  className="grid size-11 place-items-center rounded-full border border-white/20 text-warm-white transition hover:border-gold hover:text-gold disabled:opacity-30"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="ml-2 self-center text-sm text-warm-white/40">
                  Step {active + 1} of {steps.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
