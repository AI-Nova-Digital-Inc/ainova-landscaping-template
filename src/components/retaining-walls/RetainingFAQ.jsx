"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  {
    q: "Do I need a building permit for a retaining wall in Ontario?",
    a: "Permit requirements depend on wall height, location, and municipality. In many Ontario cities, retaining walls over a certain height or close to property lines may require a review or permit. We help every homeowner understand exactly what applies to their specific project before any work begins.",
  },
  {
    q: "How long does a stone retaining wall last?",
    a: "A properly built retaining wall with the right base preparation, drainage layer, backfill materials, and quality stone can last for decades — often 40 to 50 years or more. The quality of the base and drainage is far more important than the wall material itself.",
  },
  {
    q: "Why do retaining walls fail or lean over time?",
    a: "Most failures are caused by poor drainage, a shallow or unstable base, weak backfill, or improper installation technique. Water pressure building up behind the wall — called hydrostatic pressure — is one of the leading causes of wall movement and collapse. Our drainage pipe and filter fabric installation prevents this entirely.",
  },
  {
    q: "Can you build steps into a retaining wall?",
    a: "Yes. Retaining walls can be designed with integrated stone steps, landing zones, garden tiers, and connecting walkways. We plan these into the design from the start so the steps are structurally sound and visually seamless with the wall.",
  },
];

export default function RetainingFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">
              Frequently Asked Questions About Retaining Walls
            </h2>
          </div>
        </FadeUp>

        <div className="grid gap-3">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-warm-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif font-black text-charcoal">{q}</span>
                  <span className={`shrink-0 rounded-full p-1 transition-colors ${open === i ? "bg-gold text-charcoal" : "bg-evergreen-700/10 text-evergreen-700"}`}>
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-charcoal/8 px-6 pb-5 pt-4 text-sm leading-7 text-charcoal/70">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
