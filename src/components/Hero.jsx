"use client";

import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import HeroSlider from "./HeroSlider";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section id="home" className="relative isolate -mt-[88px] flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-44 text-center text-white sm:pt-48 lg:pb-24">
      <HeroSlider />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="mx-auto flex max-w-6xl flex-col items-center">
        <p className="mb-6 text-base font-black uppercase tracking-[0.32em] text-gold drop-shadow-lg sm:text-lg" style={{textShadow:"0 2px 12px rgba(0,0,0,0.8)"}}>Luxury Landscape Design &amp; Build</p>
        <h1 className="text-balance font-serif text-3xl font-black leading-[1.08] tracking-tight text-warm-white drop-shadow-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
          Premium Landscaping &amp; Outdoor Living in Kitchener-Waterloo
        </h1>
        <p className="mt-7 max-w-4xl text-balance text-lg font-medium leading-8 text-warm-white/86 sm:text-xl lg:text-2xl">
          Custom interlock patios, retaining walls, sod installation, garden upgrades, and elegant outdoor spaces built for lasting curb appeal.
        </p>
        <TrustBadges />
        <CTAButtons />
      </motion.div>
    </section>
  );
}
