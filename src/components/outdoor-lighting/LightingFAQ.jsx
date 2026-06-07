"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  { q: "What type of lighting do you install?", a: "We install low-voltage LED landscape lighting including path lights, uplights, spotlights, step lights, and accent fixtures designed for outdoor use." },
  { q: "Is outdoor lighting energy efficient?", a: "Yes. Modern LED landscape lighting uses a fraction of the energy of older halogen systems and lasts significantly longer with minimal maintenance." },
  { q: "Can outdoor lighting withstand Canadian winters?", a: "Yes. We use fixtures rated for outdoor use in cold climates. Proper wire burial depth and waterproof connections ensure reliable year-round performance." },
  { q: "Do you offer smart or timer-controlled lighting?", a: "Yes. We can integrate timers, dusk-to-dawn sensors, and smart controls so your lighting activates automatically without manual switching." },
  { q: "Can lighting be added to an existing patio or driveway?", a: "Absolutely. We can retrofit lighting into most existing hardscape installations with minimal disruption to the surface." },
];

export default function LightingFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">Frequently Asked Questions About Outdoor Lighting</h2>
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
