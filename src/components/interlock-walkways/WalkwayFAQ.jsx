"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  { q: "What's the difference between a walkway and a pathway?", a: "Walkways typically connect main areas like the driveway to the front door. Pathways often wind through gardens or yards. Both are built using the same quality interlock installation process." },
  { q: "How wide should a front walkway be?", a: "We typically recommend 4–5 feet for a comfortable front walkway — wide enough for two people to walk side by side and visually proportional to the home." },
  { q: "Can walkways be curved?", a: "Yes. Curved walkways are one of the most popular designs. Pavers are cut to shape to create clean curves around gardens and landscape features." },
  { q: "Will my walkway heave or shift in winter?", a: "A properly built walkway with adequate base depth and drainage is designed to handle freeze-thaw movement without significant shifting or heaving." },
  { q: "How long does a walkway installation take?", a: "Most walkway projects take 1–3 days depending on length, complexity, and site access. We'll confirm the schedule at your estimate." },
];

export default function WalkwayFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">Frequently Asked Questions About Interlock Walkways</h2>
          </div>
        </FadeUp>
        <div className="divide-y divide-black/8">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.05}>
              <div>
                <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                  <span className="font-serif text-lg font-black text-charcoal">{q}</span>
                  <span className="shrink-0 text-evergreen-700">{open === i ? <Minus size={20} /> : <Plus size={20} />}</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
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
