"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    dropdown: [
      { label: "Sod Installation", href: "/sod-installation" },
      { label: "Softscaping & Gardens", href: "/services/softscaping-services" },
      { label: "Retaining Walls", href: "/services/retaining-walls" },
      { label: "Interlock Driveways", href: "/#services" },
      { label: "Interlock Patios", href: "/#services" },
      { label: "Interlock Walkways", href: "/#services" },
      { label: "Lawn Maintenance", href: "/#services" },
      { label: "Outdoor Lighting", href: "/#services" },
      { label: "Outdoor Staircases", href: "/#services" },
    ],
  },
  { label: "Gallery", href: "/#gallery" },
  {
    label: "Service Areas",
    href: "/#service-areas",
    dropdown: ["Kitchener", "Waterloo", "Cambridge", "Guelph", "Woolwich", "North Dumfries"].map((label) => ({ label, href: "/#service-areas" })),
  },
  { label: "Contact", href: "/#contact" },
];

const sectionIdFromHref = (href) => href.split("#")[1] || "home";
const scrollMargin = 8;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const scrollLockRef = useRef(false);
  const scrollLockTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => sectionIdFromHref(link.href));

    const updateActiveSection = () => {
      if (scrollLockRef.current) return;
      const probeY = scrolled ? 92 : 118;
      let current = "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          current = id;
          break;
        }

        const distance = Math.abs(rect.top - probeY);
        if (rect.top <= probeY && distance < closestDistance) {
          closestDistance = distance;
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [scrolled]);

  useEffect(() => {
    const onClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setActiveDropdown(null);
    };
    const onScroll = () => setActiveDropdown(null);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isLight = scrolled || open;
  const scrollToSection = (href) => {
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : href;
    const id = sectionIdFromHref(hash);
    const el = document.getElementById(id);

    if (!el && href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (!el) return;
    setActiveSection(id);
    scrollLockRef.current = true;
    if (scrollLockTimerRef.current) clearTimeout(scrollLockTimerRef.current);
    scrollLockTimerRef.current = setTimeout(() => { scrollLockRef.current = false; }, 1200);
    const getTargetTop = () => {
      if (id === "home") return 0;
      const navHeight = navRef.current?.getBoundingClientRect().height || 72;
      return Math.max(0, el.getBoundingClientRect().top + window.scrollY - navHeight - scrollMargin);
    };

    window.scrollTo({ top: getTargetTop(), behavior: "auto" });

    requestAnimationFrame(() => {
      window.scrollTo({ top: getTargetTop(), behavior: "auto" });
    });

    window.setTimeout(() => {
      window.scrollTo({ top: getTargetTop(), behavior: "auto" });
    }, 360);
  };

  const navigateTo = (href) => {
    if (href === "/") {
      if (pathname === "/") scrollToSection("#home");
      else router.push("/");
      return;
    }

    if (!href.includes("#")) {
      router.push(href);
      return;
    }

    if (pathname === "/about" && href.startsWith("/about#")) {
      scrollToSection(href);
      return;
    }

    if (pathname !== "/") {
      router.push(href);
      return;
    }

    scrollToSection(href);
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/" && activeSection === "home";
    if (href === "/about") return pathname === "/about";
    return pathname === "/" && activeSection === sectionIdFromHref(href);
  };

  const desktopItemClass = (href) => {
    const active = isActive(href);
    const color = isLight
      ? active
        ? "text-charcoal"
        : "text-charcoal/76 hover:text-evergreen-700"
      : active
        ? "text-white"
        : "text-white/84 hover:text-white";

    return `group relative inline-flex items-center gap-1 whitespace-nowrap p-0 no-underline !text-[17px] !font-bold !leading-none tracking-[-0.01em] transition-colors duration-300 ${active ? "!font-black" : ""} ${color}`;
  };

  const underlineClass = (href) => {
    const active = isActive(href);
    return `absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-300 ${active ? "w-full bg-gold" : "w-0 bg-evergreen-700 group-hover:w-full"}`;
  };

  return (
    <motion.header
      ref={navRef}
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
        <nav className={`mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 transition-all duration-300 ${scrolled ? "min-h-[72px]" : "min-h-[88px]"}`}>
          <button type="button" onClick={() => navigateTo("/")} aria-label="Everstone Outdoor Living home" className="relative flex items-center">
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
          </button>

          <div className="hidden items-center justify-center gap-7 lg:flex">
            {links.map(({ label, href, dropdown }) =>
              dropdown ? (
                <div key={label} className="relative" onMouseEnter={() => setActiveDropdown(label)} onMouseLeave={() => setActiveDropdown(null)}>
                  <button type="button" onClick={() => navigateTo(href)} className={desktopItemClass(href)}>
                    {label}
                    <ChevronDown size={15} strokeWidth={2.4} className={`shrink-0 transition-transform duration-200 ${activeDropdown === label ? "rotate-180" : ""}`} />
                    <span className={underlineClass(href)} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-3 w-max min-w-[160px] overflow-hidden rounded-2xl border border-black/8 bg-white shadow-luxury"
                      >
                        {dropdown.map(({ label: childLabel, href: childHref }) => (
                          <button
                            type="button"
                            key={childLabel}
                            onClick={() => {
                              navigateTo(childHref);
                              setActiveDropdown(null);
                            }}
                            className="block w-full px-5 py-2.5 text-left text-sm font-medium text-charcoal/80 transition hover:bg-evergreen-50 hover:text-evergreen-700"
                          >
                            {childLabel}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button key={label} type="button" onClick={() => navigateTo(href)} className={desktopItemClass(href)}>
                  {label}
                  <span className={underlineClass(href)} />
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <button type="button" onClick={() => navigateTo(pathname === "/about" ? "/about#estimate" : "/#contact")} className="hidden rounded-xl bg-evergreen-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-evergreen-600 lg:block">
              Request A Free Estimate
            </button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={`grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${isLight ? "border-charcoal/20 bg-charcoal/8 text-charcoal" : "border-white/25 bg-white/12 text-white"}`}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.div>

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
              {links.map(({ label, href, dropdown }) =>
                dropdown ? (
                  <div key={label}>
                    <button
                      type="button"
                      onClick={() => {
                        navigateTo(href);
                        setMobileExpanded((value) => (value === label ? null : label));
                      }}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/8 hover:text-gold"
                    >
                      {label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden pl-4">
                          {dropdown.map(({ label: childLabel, href: childHref }) => (
                            <button
                              type="button"
                              key={childLabel}
                              onClick={() => {
                                navigateTo(childHref);
                                setOpen(false);
                              }}
                              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-white/70 transition hover:text-gold"
                            >
                              {childLabel}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    type="button"
                    key={label}
                    onClick={() => {
                      navigateTo(href);
                      setOpen(false);
                    }}
                    className="rounded-xl px-4 py-3 text-left font-semibold text-white/90 transition hover:bg-white/8 hover:text-gold"
                  >
                    {label}
                  </button>
                )
              )}
              <button
                type="button"
                onClick={() => {
                  navigateTo(pathname === "/about" ? "/about#estimate" : "/#contact");
                  setOpen(false);
                }}
                className="mt-3 rounded-xl bg-evergreen-700 px-5 py-4 text-center font-black text-white"
              >
                Request A Free Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
