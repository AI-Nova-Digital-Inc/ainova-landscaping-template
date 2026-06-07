"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const faqs = [
  {
    q: "What is the difference between hardscaping and softscaping?",
    a: "Hardscaping refers to the heavy, non-living elements of a landscape built from stone, concrete, or wood — such as interlock patios, walkways, and retaining walls. Softscaping refers to the living, horticultural elements including trees, shrubs, perennials, sod, soil, and mulch. A truly balanced landscape design requires a blend of both.",
  },
  {
    q: "When is the best time to plant trees and shrubs in Waterloo?",
    a: "The ideal planting seasons in the Waterloo Region are early-to-mid spring and early fall. During these windows the soil is warm and the air is cool, which allows root systems to establish quickly without the stress of blistering summer heat or freezing winter temperatures.",
  },
  {
    q: "How thick should mulch be applied in a garden bed?",
    a: "For optimal weed suppression and moisture retention, mulch should be applied at a depth of 2 to 3 inches. Less than that allows weeds to poke through; more can suffocate plant roots and prevent rainwater from reaching the soil. We also strictly avoid piling mulch against tree trunks, which causes harmful rot.",
  },
  {
    q: "Do you use native Ontario plants in your designs?",
    a: "Yes. We highly recommend incorporating native Ontario species into our garden designs. Native plants are naturally adapted to our local climate and heavy soils — meaning they are incredibly drought-tolerant, require less fertilizer, and attract beneficial pollinators like bees and butterflies to your yard.",
  },
];

export default function SoftscapingFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">FAQ</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">
              Frequently Asked Questions About Softscaping
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
