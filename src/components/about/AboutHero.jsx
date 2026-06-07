"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "clamp(340px, 55vh, 520px)" }}>
      <Image
        src="/images/about/about-hero-landscape.png"
        alt="Premium landscaping outdoor living space"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/70" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white"
      >
        <p className="mb-4 text-sm font-black uppercase tracking-[0.32em] text-gold drop-shadow-lg">About Everstone Outdoor Living</p>
        <div className="mx-auto mb-5 h-px w-10 bg-gold/70" />
        <h1 className="font-serif text-3xl font-black leading-tight tracking-tight text-warm-white drop-shadow-2xl sm:text-4xl lg:text-5xl">
          Premium Landscaping Crafted Around Your Home
        </h1>
        <p className="mt-5 text-balance text-lg leading-8 text-warm-white/84 sm:text-xl">
          Creating refined outdoor spaces across Kitchener, Waterloo, Cambridge, and surrounding communities.
        </p>
      </motion.div>
    </section>
  );
}
