# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx next dev --port 3000   # Start dev server (use npx — next not in global PATH)
npx next build             # Production build
npx next lint              # Lint
```

`package.json` must not have a BOM character (UTF-8 BOM breaks Turbopack). If you see `Error parsing package.json`, strip the BOM:
```bash
node -e "const fs=require('fs');let c=fs.readFileSync('package.json','utf8');if(c.charCodeAt(0)===0xFEFF)c=c.slice(1);fs.writeFileSync('package.json',c,'utf8')"
```

## Stack

- **Next.js 16** (App Router, Turbopack, JSX — not TSX for page/components)
- **Tailwind CSS v4** — config via `@theme` block in `src/app/globals.css`, not `tailwind.config.ts`
- **Framer Motion v12** — enabled via `transpilePackages: ["framer-motion"]` in `next.config.ts`
- **Lucide React** for icons

## Design Tokens (globals.css `@theme`)

```
--color-charcoal: #111614
--color-warm-white: #f8f4ea
--color-gold: #d6b46a
--color-evergreen-600/700/800/900/950
--shadow-luxury
```

Typography: body = `Manrope/Inter`, headings = `font-serif` = `Cormorant Garamond / Playfair Display`

`a { text-decoration: none !important }` is set in globals.css — Tailwind base styles can override this without the `!important`.

Note: `tailwind.config.ts` exists but defines `forest/moss/cream/soil` tokens from a previous template — these are NOT used in current components. Use `evergreen-*`, `charcoal`, `warm-white`, `gold` tokens instead.

## Component Architecture

All components are `.jsx` with default exports in `src/components/`. `.tsx` named-export files from a prior template were deleted — if any reappear they will conflict with the `.jsx` default exports.

**Shared animation primitive:** `FadeUp.tsx` (the only `.tsx` kept) — wraps `motion.div` with `whileInView`, use it for all scroll-triggered fade-ups.

**Pages / routes:**
- `src/app/page.jsx` — homepage
- `src/app/about/page.jsx` — about page
- `src/app/sod-installation/page.jsx` — SOD service landing page
- `src/app/services/softscaping-services/page.jsx` — Softscaping service page
- `src/app/services/retaining-walls/page.jsx` — Retaining Walls service page

Each page assembles its own section stack with shared `Navbar`, `Footer`, `BackToTop`.

**Homepage section order:**
`TopBar → Navbar → Hero → FeatureHighlights → ServicesIntro → ServicesGrid → AboutSection → ProjectGallery → Testimonials → EstimateCTA → TrustStrip → FAQAccordion → EstimateForm → Footer + BackToTop`

**Sub-component folders:**
- `src/components/about/` — AboutHero, FounderSection, WhyChooseSection, ExperienceSection, AboutTestimonials, AboutCTA, AboutForm
- `src/components/sod/` — SodHero, SodTrustSection, SodTestimonials, SodProcessIntro, SodProcess, SodCalculator, SodGallery, SodPromoCTA, SodForm, SodFAQ, SodFinalCTA
- `src/components/softscaping/` — SoftscapingHero, SoftscapingWhyInvest, SoftscapingServices, SoftscapingGallery, SoftscapingGuideCallout, SoftscapingFAQ, SoftscapingCTA, SoftscapingForm
- `src/components/retaining-walls/` — RetainingHero, RetainingWhySection, RetainingProcess, RetainingMaterials, RetainingGallery, RetainingFAQ, RetainingCTA, RetainingForm

**Pattern for new service pages:** create `src/app/services/<name>/page.jsx` + `src/components/<name>/` folder. Standard section order: Hero → Why/Reasons → Process → Materials/Services → Gallery → FAQ → CTA → Form.

**Wiring a new service page into navigation (both required):**
1. `ServicesGrid.jsx` — add `href: "/services/<name>"` to the service object so "View Service Details" button navigates correctly.
2. `Navbar.jsx` `links` array — update the dropdown entry `href` from `"/#services"` to `"/services/<name>"`.

## Key Behaviors

- **Navbar** (`Navbar.jsx`): transparent over hero → white bg + dark text after `scrollY > 80px`. Logo uses CSS `filter` to switch white↔green. Dropdowns open on hover (`onMouseEnter`/`onMouseLeave`), close on scroll. Nav clicks use `navigateTo()` which calls `window.scrollTo` (not `scrollIntoView` or href anchor) to cancel any in-progress smooth scroll and apply navbar-height offset. A `scrollLockRef` blocks the scroll-based `activeSection` detector for 800ms after a nav click so the gold underline moves immediately.
- **TopBar** (`TopBar.jsx`): hidden via `AnimatePresence` when `scrollY > 80px`.
- **Hero** (`Hero.jsx`): uses `-mt-[88px]` to slide under the sticky navbar. `HeroSlider.jsx` handles image crossfade every 5s with Ken Burns effect.
- **ProjectGallery** (`ProjectGallery.jsx`): client component with built-in lightbox (keyboard nav: arrows + ESC, dot indicators).
- **FAQAccordion** (`FAQAccordion.jsx`): client component, animated with `AnimatePresence`.
- **EstimateForm** (`EstimateForm.jsx`): client component, `preventDefault` on submit, shows inline success message.

## Images

All local — no Unsplash in active components:
- `public/images/hero/` — 6 hero slider images (`.png`)
- `public/images/services/` — 9 service card images (`.png`)
- `public/images/gallery/` — 12 gallery images (`.png`)
- `public/images/about/` — about page images
- `public/images/sod/` — SOD page images + `gallery/sod-gallery-01..12.jpg`
- `public/images/softscaping/` — softscaping page images + `gallery/softscaping-gallery-01..12.jpg`
- `public/images/retaining-walls/` — retaining walls page images + `gallery/retaining-gallery-01..12.jpg` + `process/process-step-01..08.png`
- `public/images/logo/everstone-logo.svg`
- `public/docs/` — downloadable PDFs (`Everstone-SOD-Installation-Guide.pdf`, `Hardscaping-standard-guide-done.pdf`)

**Gallery component pattern** (used in SodGallery, SoftscapingGallery, RetainingGallery): 12-image grid, `priority={i < 4}` on first 4, skeleton shimmer via `onLoad` opacity, hover category label, lightbox with keyboard nav (arrows + ESC) and dot indicators.

## Brand

Company: **Everstone Outdoor Living** | Kitchener-Waterloo, ON
Phone: `+1-519-555-0148` | Email: `hello@everstoneoutdoor.ca`
This is a **template** for a web agency selling to local landscaping businesses — designed to be reskinned per client (swap logo, copy, images, colors).
