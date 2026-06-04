"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-2">
      <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.985 }} href="#contact" className="rounded-full bg-warm-white px-7 py-4 text-center text-base font-black text-charcoal shadow-luxury transition hover:bg-white">
        Request a Free Estimate
      </motion.a>
      <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.985 }} href="tel:15195550148" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/5 px-7 py-4 text-center text-base font-black text-white shadow-luxury backdrop-blur transition hover:bg-white/12">
        <Phone size={18} /> Call Now +1-519-555-0148
      </motion.a>
    </div>
  );
}
