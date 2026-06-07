"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const categories = [
  "Sod Install", "Lawn Grading", "Full Lawn", "Sod Install",
  "Lawn Grading", "Kentucky Bluegrass", "Sod Install", "Full Lawn",
  "Soil Prep", "Sod Install", "Lawn Grading", "Full Lawn",
];

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/sod/gallery/sod-gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Sod installation project ${i + 1} Kitchener-Waterloo`,
  category: categories[i],
}));

export default function SodGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded] = useState({});

  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i + 1) % images.length);

  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Our Work</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">Recent Sod Installation Projects</h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/65">Explore professionally installed luxury lawns across Waterloo Region.</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map(({ src, alt, category }, i) => (
            <FadeUp key={src} delay={(i % 4) * 0.05}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl shadow-sm bg-evergreen-900/30"
              >
                {/* Skeleton shimmer */}
                {!loaded[i] && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-evergreen-900/40 via-evergreen-800/30 to-evergreen-900/40" />
                )}
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority={i < 4}
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className={`object-cover transition duration-500 group-hover:scale-110 ${loaded[i] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
                />
                <div className="absolute inset-0 bg-evergreen-950/0 transition duration-300 group-hover:bg-evergreen-950/40" />
                <span className="absolute bottom-2 left-2 rounded-full bg-charcoal/70 px-2.5 py-1 text-[10px] font-bold text-warm-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  {category}
                </span>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={() => setLightbox(null)}
          >
            <button type="button" onClick={() => setLightbox(null)} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><X size={22} /></button>
            <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft size={24} /></button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={images[lightbox].src} alt={images[lightbox].alt} fill className="object-contain" />
            </motion.div>
            <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight size={24} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
