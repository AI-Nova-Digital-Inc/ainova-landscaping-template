"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  "Premium Interlock Craftsmanship",
  "Proper Base & Drainage Systems",
  "Fully Insured Local Team",
  "Custom Modern Paver Designs",
];

export default function InterlockHero() {
  return (
    <section className="relative isolate -mt-[88px] flex min-h-[88vh] items-center overflow-hidden px-4 pb-20 pt-44">
      <Image
        src="/images/interlock-driveways/hero/interlock-driveway-hero.jpg"
        alt="Luxury interlock driveway Kitchener-Waterloo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-gold">
            Engineered Interlock Driveways &amp; Outdoor Design
          </p>
          <div className="mb-6 h-px w-10 bg-gold" />
          <h1 className="font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Luxury Interlock Driveway Installation in{" "}
            <span className="text-gold">Kitchener-Waterloo</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Premium paver driveways designed for durability, drainage, curb appeal, and long-term performance through harsh Ontario winters.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((pt) => (
              <li key={pt} className="flex items-center gap-2 text-sm font-semibold text-white drop-shadow-sm">
                <CheckCircle2 size={15} className="shrink-0 text-gold" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#estimate"
              className="rounded-xl bg-gold px-7 py-4 font-black text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              Get A Free Driveway Quote
            </a>
            <a
              href="tel:+15195550148"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Call Now +1-519-555-0148
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black/30 px-5 py-3 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-sm">★</span>
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5-Star Rated Local Landscapers</span>
          </div>
        </motion.div>

        {/* Right floating image card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-luxury">
            <div className="relative h-[420px] w-full">
              <Image
                src="/images/interlock-driveways/hero/interlock-driveway-feature.jpg"
                alt="Premium interlock driveway detail"
                fill
                priority
                sizes="380px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-lg font-black text-white">Premium Paver Craftsmanship</p>
              <p className="mt-1 text-sm text-white/75">Built for decades of performance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
