"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const steps = [
  { num: 1, label: "Site Preparation", title: "1. Site Preparation", desc: "The location of your retaining wall should be marked out first. Utilities, phone services, and cable TV providers should then be contacted to locate any buried cables or pipe services.", img: "/images/retaining-walls/process/process-step-01.png" },
  { num: 2, label: "Excavation & Base Depth", title: "2. Base", desc: "The depth of excavation depends on soil type. Clay soil requires deeper excavation; sandy soil requires 6–8 inches. Always excavate to a depth that ensures proper drainage and frost protection.", img: "/images/retaining-walls/process/process-step-02.png" },
  { num: 3, label: "Leveling & Compaction", title: "3. Leveling", desc: "The excavated area is filled with crushed stone and compacted using a gas-powered plate compactor to 4 inches — 8 inches laying a proper foundation of retaining wall.", img: "/images/retaining-walls/process/process-step-03.png" },
  { num: 4, label: "Wall Construction", title: "4. Wall Construction", desc: "Starting with the base row and making sure everything is perfectly-leveled. Then staggering and also stepping back as each row is put in place.", img: "/images/retaining-walls/process/process-step-04.png" },
  { num: 5, label: "Backfilling", title: "5. Backfilling", desc: "Gravel backfill should be added after every 2 rows of block, using clear gravel. Filter fabric is used to separate the existing soils from the clear gravel, and compacting at the end of a row by tamping the area behind the last row free.", img: "/images/retaining-walls/process/process-step-05.png" },
  { num: 6, label: "Drainage Pipe", title: "6. Drainage Pipe", desc: "Installation of Perforated drainage pipe along the first row of your wall. This will ensure water flows away from behind the retaining wall.", img: "/images/retaining-walls/process/process-step-06.png" },
  { num: 7, label: "Wall Fabric", title: "7. Wall Fabric", desc: "Installation of retaining wall fabric, keeping your clear stone dry to keep out silts and prevent accumulation of silt formation in the future.", img: "/images/retaining-walls/process/process-step-07.png" },
  { num: 8, label: "Final Finish", title: "8. Finish", desc: "The final row of blocks or coping should be glued with a concrete adhesive. After the glue has set (approx. 4–8 hours), backfill with soil, put in sod, or install plants to complete your installation.", img: "/images/retaining-walls/process/process-step-08.png" },
];

export default function RetainingProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-evergreen-900 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              Our Built-to-Last Installation Process
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              A retaining wall is only as strong as what is buried underneath it. Our process focuses on excavation, drainage, base preparation, proper block placement, backfill, and long-term structural stability.
            </p>
          </div>
        </FadeUp>

        {/* Step tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {steps.map((step, i) => (
            <button
              key={step.num}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                active === i
                  ? "bg-gold text-charcoal"
                  : "border border-white/20 bg-white/8 text-warm-white/70 hover:border-gold/40 hover:text-warm-white"
              }`}
            >
              Step {step.num}
            </button>
          ))}
        </div>

        {/* Active step card */}
        <FadeUp key={active}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm lg:flex">
            <div className="relative h-64 shrink-0 lg:h-auto lg:w-1/2">
              <Image
                src={steps[active].img}
                alt={steps[active].title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
              <span className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-gold">Step {steps[active].num}</span>
              <h3 className="font-serif text-2xl font-black text-warm-white lg:text-3xl">{steps[active].title}</h3>
              <p className="mt-4 leading-7 text-warm-white/70">{steps[active].desc}</p>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActive((i) => Math.max(0, i - 1))}
                  disabled={active === 0}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-warm-white/70 transition hover:border-gold/40 hover:text-warm-white disabled:opacity-30"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActive((i) => Math.min(steps.length - 1, i + 1))}
                  disabled={active === steps.length - 1}
                  className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-charcoal transition hover:bg-yellow-400 disabled:opacity-30"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
