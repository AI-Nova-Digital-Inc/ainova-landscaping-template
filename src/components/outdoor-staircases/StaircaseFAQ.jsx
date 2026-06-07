"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  { q: "What materials do you use for outdoor steps?", a: "We install natural armor stone steps, interlock paver steps, and concrete cap steps depending on your budget, style preference, and site requirements." },
  { q: "How many steps do I need for my slope?", a: "Step count depends on the total rise of your slope. We measure the grade during the site visit and design the right step layout for safe, comfortable use." },
  { q: "Will my steps shift or settle over winter?", a: "Steps built on a proper footing with drainage are designed to handle Ontario freeze-thaw cycles. Poor footing is the main cause of settling — we don't cut corners on the base." },
  { q: "Can you match my existing patio or walkway material?", a: "Yes. We can match or complement your existing interlock or stone materials so the steps integrate naturally with the rest of your landscape." },
  { q: "Do outdoor stairs require a permit?", a: "In most cases, residential exterior steps do not require a permit, but we recommend confirming with your municipality before installation." },
];

export default function StaircaseFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">Frequently Asked Questions About Outdoor Staircases</h2>
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
