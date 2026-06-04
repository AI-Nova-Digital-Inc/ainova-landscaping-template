"use client";

import { FadeUp } from "@/components/FadeUp";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const images = [
  { src: "/images/gallery/gallery-interlock-patio-01.png", category: "Interlock Patio" },
  { src: "/images/gallery/gallery-retaining-wall-01.png", category: "Retaining Wall" },
  { src: "/images/gallery/gallery-driveway-pavers-01.png", category: "Interlock Driveway" },
  { src: "/images/gallery/gallery-garden-upgrade-01.png", category: "Garden Upgrade" },
  { src: "/images/gallery/gallery-sod-installation-01.png", category: "Sod Installation" },
  { src: "/images/gallery/gallery-outdoor-lighting-01.png", category: "Outdoor Lighting" },
  { src: "/images/gallery/gallery-walkway-01.png", category: "Walkway" },
  { src: "/images/gallery/gallery-backyard-transformation-01.png", category: "Backyard Transformation" },
  { src: "/images/gallery/gallery-stone-steps-01.png", category: "Stone Steps" },
  { src: "/images/gallery/gallery-front-yard-01.png", category: "Front Yard Landscaping" },
  { src: "/images/gallery/gallery-lawn-maintenance-01.png", category: "Lawn Maintenance" },
  { src: "/images/gallery/gallery-patio-evening-01.png", category: "Evening Patio" },
];

export default function ProjectGallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setActive((i) => (i + 1) % images.length), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="bg-warm-white px-4 pb-16 pt-10 lg:pb-20 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Project Gallery</p>
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">See the Possibilities: Recent Outdoor Transformations</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/65">Browse refined landscaping projects featuring custom interlock patios, retaining walls, garden upgrades, sod installation, and outdoor living spaces across Kitchener-Waterloo.</p>
          </div>
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map(({ src, category }, i) => (
            <FadeUp key={src} delay={(i % 4) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:shadow-lg"
                aria-label={`View ${category} project`}
              >
                <div className="relative h-56">
                  <Image src={src} alt={`${category} project by Everstone Outdoor Living`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-108" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-black text-charcoal">{category}</span>
                  </div>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={images[active].src}
                  alt={images[active].category}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="rounded-full bg-gold px-4 py-1.5 text-sm font-black text-charcoal">{images[active].category}</span>
                </div>
              </div>

              {/* Controls */}
              <button onClick={close} className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/75" aria-label="Close">
                <X size={18} />
              </button>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/75" aria-label="Previous">
                <ChevronLeft size={22} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/75" aria-label="Next">
                <ChevronRight size={22} />
              </button>

              <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`size-2 rounded-full transition ${i === active ? "bg-gold scale-125" : "bg-white/50 hover:bg-white/80"}`} aria-label={`Go to image ${i + 1}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
