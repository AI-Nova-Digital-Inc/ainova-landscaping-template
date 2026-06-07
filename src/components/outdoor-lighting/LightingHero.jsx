"use client";

import { site } from "@/config/site";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LightingHero() {
  return (
    <section className="relative isolate -mt-[88px] flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pb-20 pt-44 text-center text-white">
      <Image src="/images/outdoor-lighting/hero/hero-bg.jpg" alt="Outdoor lighting installation Kitchener-Waterloo" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/72" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center"
      >
        <span className="mb-5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
          Serving Kitchener-Waterloo &amp; Region
        </span>
        <h1 className="font-serif text-3xl font-black leading-tight tracking-tight text-warm-white drop-shadow-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Your Property,<br className="hidden sm:block" /> Transformed After Dark
        </h1>
        <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-warm-white/84 sm:text-xl">
          Architectural lighting that extends your outdoor living space into the evening and transforms your property after dark.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#estimate" className="rounded-full bg-evergreen-700 px-8 py-4 font-bold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600">
            Get A Free Lighting Quote
          </a>
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/18">
            Call Now {site.phoneDisplay}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
