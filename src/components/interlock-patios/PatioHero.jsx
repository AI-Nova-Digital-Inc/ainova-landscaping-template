"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  "Premium Patio Craftsmanship",
  "Custom Design & Layout",
  "Fully Insured Local Team",
  "Built for Ontario Seasons",
];

export default function PatioHero() {
  return (
    <section className="relative isolate -mt-[88px] flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pb-20 pt-44 text-center text-white">
      <Image src="/images/interlock-patios/hero/hero-bg.jpg" alt="Luxury interlock patio Kitchener-Waterloo" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-gold">Premium Interlock Patios &amp; Outdoor Living</p>
        <div className="mx-auto mb-6 h-px w-10 bg-gold" />
        <h1 className="font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Interlock Patio Installation in Kitchener-Waterloo
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Custom backyard patios designed for comfort, outdoor entertaining, and long-term performance through Ontario weather.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {trustPoints.map((pt) => (
            <li key={pt} className="flex items-center gap-2 text-sm font-semibold text-white drop-shadow-sm">
              <CheckCircle2 size={15} className="shrink-0 text-gold" />{pt}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#estimate" className="rounded-xl bg-gold px-7 py-4 font-black text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400">Get A Free Patio Quote</a>
          <a href="tel:+15195550148" className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">Call Now +1-519-555-0148</a>
        </div>
        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black/30 px-5 py-3 backdrop-blur-sm">
          <div className="flex">{[...Array(5)].map((_, i) => <span key={i} className="text-sm text-gold">★</span>)}</div>
          <span className="text-sm font-semibold text-white">5-Star Rated Local Landscapers</span>
        </div>
      </motion.div>
    </section>
  );
}
