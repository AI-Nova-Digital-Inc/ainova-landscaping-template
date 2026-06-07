"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  { q: "How often will you mow my lawn?", a: "Most residential properties are serviced weekly during the growing season. We can adjust frequency based on your grass type, growth rate, and preferences." },
  { q: "Do you edge and trim as part of the service?", a: "Yes. Every visit includes mowing, string trimming around beds and obstacles, and edging along hard surfaces for a clean, finished look." },
  { q: "Do I need to be home during lawn maintenance?", a: "No. As long as we have access to the property, we can complete the service while you're away. We'll confirm the setup at your initial appointment." },
  { q: "What happens if it rains on my scheduled day?", a: "We monitor weather and reschedule when conditions aren't suitable. We'll communicate any changes promptly so you're never left wondering." },
  { q: "Can you handle spring and fall cleanup too?", a: "Yes. We offer seasonal cleanup services including leaf removal, bed cleanup, and end-of-season prep as add-ons to your maintenance program." },
];

export default function LawnFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">Frequently Asked Questions About Lawn Maintenance</h2>
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
