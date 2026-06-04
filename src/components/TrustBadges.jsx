"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const badges = ["Free Estimates", "Locally Owned", "Fully Insured", "Premium Craftsmanship"];

export default function TrustBadges() {
  return (
    <div className="mt-9 grid max-w-3xl gap-x-10 gap-y-3 text-left sm:grid-cols-2">
      {badges.map((badge, index) => (
        <motion.div key={badge} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + index * 0.08, duration: 0.45 }} className="flex items-center gap-3 text-lg font-medium text-warm-white/90">
          <CheckCircle2 className="size-6 fill-gold text-gold" />
          <span>{badge}</span>
        </motion.div>
      ))}
    </div>
  );
}
