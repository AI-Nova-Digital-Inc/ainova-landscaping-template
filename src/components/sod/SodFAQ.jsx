"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeUp } from "@/components/FadeUp";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Can you just lay new sod over my existing dead grass?", a: "No — and any contractor who suggests this is setting you up for failure. Laying sod over old turf prevents the new roots from reaching soil, creates a spongy uneven lawn, and promotes rot and disease. At Everstone, we always physically remove your old turf and properly prepare the bare soil before any sod goes down." },
  { q: "How soon should new sod be watered after installation?", a: "Within 30 minutes of installation. The first watering must soak through the sod and penetrate at least 3–4 inches into the soil below. We provide a detailed watering schedule on every install day so you know exactly what to do." },
  { q: "How often do I need to water my newly installed sod?", a: "Water is the single most critical factor for new sod. For the first two weeks, water heavily once or twice daily so the soil underneath stays consistently moist — like a wet sponge. This encourages the delicate roots to push down into the topsoil. After two weeks, gradually reduce as roots establish." },
  { q: "How long until I can walk or let my dog on the new grass?", a: "Keep all foot traffic, children, and pets off new sod for at least 14–21 days. The sod rolls need time to knit together and send roots deep into the soil. Walking on it too early can shift the rolls, tear delicate roots, and leave permanent sunken footprints in the soft ground beneath." },
  { q: "When is the best time of year to lay sod in Ontario?", a: "Early-to-mid spring and early fall are the optimal windows for the Waterloo Region. Cooler temperatures and regular rainfall create ideal conditions for root establishment. Sod can also be installed mid-summer, but only with a strict, heavy daily watering commitment." },
  { q: "How long does new sod take to fully root?", a: "Sod typically begins rooting within 10–14 days under proper watering. Full deep rooting that can handle regular traffic and mowing generally takes 4–6 weeks after installation." },
  { q: "What type of grass sod do you install?", a: "We primarily install Kentucky Bluegrass and premium fescue blends sourced from certified Ontario sod farms. Both varieties are selected for performance in Ontario's climate — hot summers through freeze-thaw winters." },
  { q: "Is grading included in the installation?", a: "Yes. Precision grading is a core part of every Everstone installation. We ensure proper drainage away from your foundation and eliminate low spots that cause pooling. It's not an add-on — it's standard." },
];

export default function SodFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">Frequently Asked Questions About Sod Installation</h2>
          </div>
        </FadeUp>
        <div className="grid gap-3">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
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
