"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  {
    q: "How long do interlock driveways last?",
    a: "With proper excavation, base preparation, drainage, compaction, and maintenance, a professionally installed interlock driveway can last for decades.",
  },
  {
    q: "Will weeds grow between pavers?",
    a: "Polymeric sand helps reduce weed growth between pavers. Regular cleaning and maintenance also help keep joints looking clean.",
  },
  {
    q: "Can interlock handle Ontario winters?",
    a: "Yes. Interlock is well suited for Ontario weather when installed with the correct base depth, compaction, and drainage system.",
  },
  {
    q: "Does interlock sink over time?",
    a: "Sinking usually happens when the base is not properly prepared or compacted. A proper installation helps reduce settling and movement.",
  },
  {
    q: "Is sealing necessary?",
    a: "Sealing is optional, but it can help enhance colour, reduce staining, and keep the driveway looking polished.",
  },
];

export default function InterlockFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">
              Frequently Asked Questions About Interlock Driveways
            </h2>
          </div>
        </FadeUp>

        <div className="divide-y divide-black/8">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.05}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-lg font-black text-charcoal">{q}</span>
                  <span className="shrink-0 text-evergreen-700">
                    {open === i ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-7 text-charcoal/65">{a}</p>
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
