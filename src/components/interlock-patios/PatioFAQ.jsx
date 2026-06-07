"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  { q: "How long does an interlock patio installation take?", a: "Most residential patio projects take 3–7 days depending on size, complexity, and site conditions. We'll give you a clear timeline during your estimate." },
  { q: "Can I add a fire pit or seating wall to my patio?", a: "Yes. We design and build integrated seating walls, fire pit pads, and raised planters as part of your patio project." },
  { q: "Will my patio handle Ontario winters?", a: "Yes. Properly installed with a compacted granular base and good drainage, interlock patios are designed to handle Ontario freeze-thaw cycles without cracking." },
  { q: "How do I maintain my interlock patio?", a: "Regular sweeping, occasional re-sanding of joints, and sealing every few years keeps your patio looking sharp long-term." },
  { q: "Do I need a permit for a backyard patio?", a: "Most ground-level patios do not require a permit, but we recommend confirming with your municipality. We can help advise during the estimate." },
];

export default function PatioFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">Frequently Asked Questions About Interlock Patios</h2>
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
