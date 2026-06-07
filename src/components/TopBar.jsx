"use client";

import { site } from "@/config/site";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden relative z-40 bg-evergreen-800 text-warm-white"
        >
          <div className="mx-auto flex min-h-11 max-w-7xl flex-col items-center justify-center gap-1 px-4 py-2 text-center text-xs font-medium sm:text-sm lg:flex-row lg:justify-between lg:gap-8">
            <p className="font-semibold">Serving Kitchener, Waterloo, Cambridge &amp; Surrounding Areas</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-warm-white/90">
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> Mon - Sat: 7AM - 7PM</span>
              <a className="inline-flex items-center gap-1.5 transition hover:text-gold" href={`tel:${site.phone}`}><Phone size={13} /> {site.phoneDisplay}</a>
              <a className="inline-flex items-center gap-1.5 transition hover:text-gold" href="mailto:{site.email}"><Mail size={13} /> {site.email}</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
