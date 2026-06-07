"use client";

import { site } from "@/config/site";
import { FadeUp } from "@/components/FadeUp";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need a permit for a retaining wall in Kitchener or Waterloo?",
    a: "Permit requirements depend on wall height, location, and municipal rules. We help homeowners understand the project scope and recommend when engineering or permit review may be needed.",
  },
  {
    q: "When is the best time for sod installation in the Waterloo Region?",
    a: "Spring and early fall are often ideal because temperatures are cooler and moisture levels are easier to manage. Summer installations can also work with proper watering and preparation.",
  },
  {
    q: "What is the difference between interlock pavers and concrete driveways?",
    a: "Interlock pavers offer a premium look, flexible repair options, and strong curb appeal. Concrete can be simpler, but interlock usually provides more design options and easier maintenance over time.",
  },
  {
    q: "How long does a typical patio or walkway project take?",
    a: "Project timelines depend on size, access, excavation needs, materials, and weather. Smaller projects may take a few days, while larger outdoor living spaces may take longer.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. Everstone Outdoor Living provides clear, no-obligation estimates so homeowners understand the scope, options, and investment before work begins.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="bg-evergreen-950 px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <h2 className="mb-12 text-center font-serif text-3xl font-black text-warm-white sm:text-4xl">
            Frequently Asked Questions About{" "}
            <span className="text-gold">Landscaping Services</span>
          </h2>
        </FadeUp>

        <div className="grid gap-3">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-charcoal transition hover:text-evergreen-700"
                  aria-expanded={open === i}
                >
                  <span>{q}</span>
                  {open === i ? <Minus className="size-5 shrink-0 text-evergreen-700" /> : <Plus className="size-5 shrink-0 text-charcoal/50" />}
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-black/6 px-6 py-5 text-sm leading-7 text-charcoal/70">{a}</p>
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
