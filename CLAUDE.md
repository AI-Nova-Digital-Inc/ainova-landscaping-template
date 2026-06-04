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

Note: `tailwind.config.ts` exists but defines `forest/moss/cream/soil` tokens from a previous template — these are NOT used in current components. Use `evergreen-*`, `charcoal`, `warm-white`, `gold` tokens instead.

## Component Architecture

All components are `.jsx` with default exports in `src/components/`. `.tsx` named-export files from a prior template were deleted — if any reappear they will conflict with the `.jsx` default exports.

**Shared animation primitive:** `FadeUp.tsx` (the only `.tsx` kept) — wraps `motion.div` with `whileInView`, use it for all scroll-triggered fade-ups.

**Page assembly:** `src/app/page.jsx` imports and sequences all sections top-to-bottom.

**Section order:**
`TopBar → Navbar → Hero → FeatureHighlights → ServicesIntro → ServicesGrid → AboutSection → ProjectGallery → Testimonials → EstimateCTA → TrustStrip → FAQAccordion → EstimateForm → Footer + BackToTop`

## Key Behaviors

- **Navbar** (`Navbar.jsx`): transparent over hero → white bg + dark text after `scrollY > 80px`. Logo uses CSS `filter` to switch white↔green.
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
- `public/images/logo/everstone-logo.svg`

## Brand

Company: **Everstone Outdoor Living** | Kitchener-Waterloo, ON
Phone: `+1-519-555-0148` | Email: `hello@everstoneoutdoor.ca`
This is a **template** for a web agency selling to local landscaping businesses — designed to be reskinned per client (swap logo, copy, images, colors).
