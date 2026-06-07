"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const categories = [
  "Armor Stone", "Interlock Block", "Natural Stone", "Armor Stone",
  "Garden Wall", "Interlock Block", "Armor Stone", "Natural Stone",
  "Tiered Wall", "Interlock Block", "Armor Stone", "Garden Wall",
];

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/retaining-walls/gallery/retaining-gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Retaining wall project ${i + 1} Kitchener-Waterloo`,
  category: categories[i],
}));

export default function RetainingGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded] = useState({});

  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Featured Projects</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">
              View Our Recent Retaining Wall Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-charcoal/65">
              Browse our gallery of engineered armor stone and modular block retaining walls. Each project highlights our ability to turn steep, unusable slopes into beautifully structured outdoor spaces across Kitchener, Waterloo, and Cambridge.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map(({ src, alt, category }, i) => (
            <FadeUp key={src} delay={(i % 4) * 0.05}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-evergreen-900/20 shadow-sm"
              >
                {!loaded[i] && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-evergreen-900/30 via-evergreen-800/20 to-evergreen-900/30" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 px-4"
            onClick={() => setLightbox(null)}
          >
            <button type="button" onClick={() => setLightbox(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <X size={22} />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <ChevronLeft size={24} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[75vh] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={images[lightbox].src} alt={images[lightbox].alt} fill className="object-contain" />
            </motion.div>
            <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === lightbox ? "w-6 bg-gold" : "w-1.5 bg-white/40"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
