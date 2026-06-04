"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero/hero-interlock-patio.png", alt: "Luxury interlock patio with stone borders and warm evening light" },
  { src: "/images/hero/hero-retaining-wall.png", alt: "Premium retaining wall and planted residential landscape" },
  { src: "/images/hero/hero-luxury-backyard.png", alt: "Luxury backyard outdoor living space with landscape lighting" },
  { src: "/images/hero/hero-driveway-pavers.png", alt: "Elegant driveway pavers and landscaped front entry" }
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 -z-30 overflow-hidden bg-charcoal">
      <AnimatePresence initial={false} mode="sync">
        <motion.div key={slides[active].src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.25, ease: "easeInOut" }} className="absolute inset-0">
          <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.055] }} transition={{ duration: 7, ease: "easeOut" }} className="size-full">
            <Image src={slides[active].src} alt={slides[active].alt} fill priority={active === 0} sizes="100vw" className="object-cover object-center" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55),rgba(0,0,0,0.10),rgba(0,0,0,0.55))]" />
    </div>
  );
}
