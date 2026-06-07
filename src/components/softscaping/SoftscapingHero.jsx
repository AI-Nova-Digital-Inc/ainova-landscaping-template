"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Phone } from "lucide-react";

const trustPoints = [
  "Right Plant, Right Place Expertise",
  "Immediate Privacy Screening",
  "Premium Soil, Mulch & River Rock",
  "Fully Insured Local Team",
];

export default function SoftscapingHero() {
  return (
    <section className="relative isolate -mt-[88px] flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pb-20 pt-44 text-center text-white">
      <Image
        src="/images/softscaping/softscaping-hero-bg.png"
        alt="Softscaping and garden bed installation Kitchener-Waterloo"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/52 to-black/68" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center"
      >
        <span className="mb-5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
          Premium Planting &amp; Garden Design
        </span>
        <h1 className="font-serif text-3xl font-black leading-tight tracking-tight text-warm-white drop-shadow-lg sm:text-4xl lg:text-5xl xl:text-6xl">
          Expert Softscaping &amp; Garden Bed Installation<br className="hidden sm:block" /> in Kitchener-Waterloo
        </h1>
        <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-warm-white/84 sm:text-xl">
          Bring your landscape to life with custom planting, privacy shrubs, garden beds, mulch, river rock, and low-maintenance plant designs built for Ontario homes.
        </p>

        <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-semibold text-white drop-shadow-sm">
              <span className="shrink-0 rounded-full bg-gold/20 p-0.5">
                <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l4 4 6-6" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#estimate"
            className="rounded-full bg-evergreen-700 px-8 py-4 font-bold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600"
          >
            Get A Free Softscaping Estimate
          </a>
          <a
            href="/docs/Hardscaping-standard-guide-done.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Everstone-Softscaping-Guide.pdf"
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/18"
          >
            <Download size={16} /> Download Our Softscaping Guide
          </a>
        </div>
      </motion.div>
    </section>
  );
}
