"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || open;

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: isLight ? "rgba(255,255,255,0.98)" : "rgba(0,0,0,0)",
          boxShadow: isLight ? "0 2px 24px rgba(0,0,0,0.10)" : "none",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-transparent"
        style={{ borderColor: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)" }}
      >
        <nav className={`mx-auto grid max-w-7xl items-center gap-4 px-4 transition-all duration-300 grid-cols-[auto_1fr_auto] ${scrolled ? "min-h-[72px]" : "min-h-[88px]"}`}>
          {/* Logo */}
          <a href="#home" aria-label="Everstone Outdoor Living home" className="relative flex items-center">
            <div className={`relative transition-all duration-300 ${scrolled ? "h-14 w-44" : "h-16 w-52"}`}>
              <Image
                src="/images/logo/everstone-logo.svg"
                alt="Everstone Outdoor Living logo"
                fill
                priority
                className="object-contain object-left transition-all duration-300"
                style={{ filter: scrolled ? "brightness(0) saturate(100%) invert(18%) sepia(40%) saturate(600%) hue-rotate(110deg)" : "brightness(0) invert(1)" }}
              />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center justify-center gap-6 lg:flex">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`group relative text-sm font-semibold transition-colors duration-300 ${
                  scrolled ? "text-charcoal hover:text-evergreen-700" : "text-white/90 hover:text-white"
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-evergreen-700 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3 justify-self-end">
            <a
              href="#contact"
              className="hidden rounded-xl bg-evergreen-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-evergreen-600 lg:block"
            >
              Request A Free Estimate
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
                scrolled
                  ? "border-charcoal/20 bg-charcoal/8 text-charcoal"
                  : "border-white/25 bg-white/12 text-white"
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-evergreen-950 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-4 py-5">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/8 hover:text-gold"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-evergreen-700 px-5 py-4 text-center font-black text-white"
              >
                Request A Free Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
