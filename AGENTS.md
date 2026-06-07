<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Codex Frontend Instructions

You are working in a premium local-business website repo. Behave like a senior frontend engineer, UI/UX designer, and Framer Motion specialist. Prioritize polished, conversion-focused production work over generic template assembly.

## UI/UX Pro Standards
- Use premium spacing, strong visual hierarchy, clean typography, and modern layout structure.
- Design mobile-first, then scale up to tablet and desktop.
- Build conversion-focused sections with clear CTAs, trust signals, and scannable content.
- Avoid generic Tailwind block layouts. Every section should feel custom to the business and market.
- Use restrained color, consistent rhythm, and professional visual density.

## Framer Motion Standards
- Use smooth fade-up reveals for section content.
- Use hover lift effects for cards and gallery items.
- Add button micro-interactions for primary CTAs.
- Use staggered animations for card grids and repeated elements.
- Use subtle parallax only when it supports premium outdoor visuals.
- Use animated counters for stats when relevant.
- Avoid excessive motion, long delays, or animations that hurt mobile performance.
- Keep animations lightweight and accessible; respect reduced-motion preferences where practical.

## Local Business Website Standards
- Include a strong hero section with clear service promise and CTA above the fold.
- Include a sticky mobile CTA when appropriate.
- Use service cards, project gallery, testimonials, service areas, and contact/quote form patterns.
- Make trust visible: years in business, reviews, warranties, local expertise, certifications, or process clarity.
- Structure content for local SEO with descriptive headings, service pages/sections, location terms, and contact details.

## Landscaping Website Standards
- Use a fresh green, white, and charcoal palette unless the brand requires otherwise.
- Use premium outdoor visuals and avoid generic low-quality stock imagery.
- Include before/after transformation patterns when source assets exist.
- Include trust badges, project/gallery sections, and homeowner-focused copy.
- Keep mobile UX fast: optimized images, concise sections, visible CTAs, and minimal heavy scripts.

## Code Standards
- Prefer React + Tailwind CSS for new build work.
- Organize reusable UI under `/components` and larger page sections under `/sections` when the framework supports it.
- Keep components clean, named, and reusable.
- Use responsive design from the first implementation pass.
- Optimize images and avoid unnecessary dependencies.
- Do not add heavy Three.js/WebGL unless specifically requested.
- For Resources Saver captures, use the Next wrapper route pattern when deploying captured static HTML through Vercel.

## Active App Architecture
- This repo is now an active Next.js app, not only a Resources Saver archive.
- Stack: Next.js 16.2 App Router, React 19.2, Tailwind CSS v4.1, Framer Motion 12, Lucide React, TypeScript config support, and `next/image`.
- Before changing framework-specific code, read the relevant local Next.js 16 docs under `node_modules/next/dist/docs/`.
- The root layout is `src/app/layout.jsx`; it imports global styles and defines default metadata.
- The main homepage is assembled in `src/app/page.jsx`.
- Active routes currently include:
  - `/` from `src/app/page.jsx`
  - `/about` from `src/app/about/page.jsx`
  - `/sod-installation` from `src/app/sod-installation/page.jsx`
  - `/services/softscaping-services` from `src/app/services/softscaping-services/page.jsx`
- Active sections/components live in `src/components/`; most are `.jsx` default exports.
- Route-specific component groups live under `src/components/about/`, `src/components/sod/`, and `src/components/softscaping/`.
- `src/components/FadeUp.tsx` is the shared scroll reveal primitive and should be reused for fade-up section/card animation.
- Tailwind design tokens are defined in the `@theme` block in `src/app/globals.css`; prefer those tokens over older values in `tailwind.config.ts`.
- Current palette tokens include `charcoal`, `warm-white`, `gold`, and `evergreen-*`.
- Framer Motion support is configured with `transpilePackages: ["framer-motion"]` in `next.config.ts`.
- `next.config.ts` configures `turbopack.root` from `import.meta.url`; preserve this if moving files or changing repo structure.
- `next.config.ts` also sets `images.unoptimized: true`; keep image behavior deployment-aware before changing it.
- `eslint.config.mjs` and `tsconfig.json` are present even though app pages/components are mostly JSX; do not assume a pure TypeScript codebase.

## Current Brand And Content State
- Active template brand: **Everstone Outdoor Living**.
- Service market: Kitchener-Waterloo and surrounding Ontario communities.
- Current page order: `TopBar`, `Navbar`, `Hero`, `FeatureHighlights`, `ServicesIntro`, `ServicesGrid`, `AboutSection`, `ProjectGallery`, `Testimonials`, `EstimateCTA`, `TrustStrip`, `FAQAccordion`, `EstimateForm`, `Footer`, `BackToTop`.
- About page section order: `Navbar`, `AboutHero`, `FounderSection`, `WhyChooseSection`, `ExperienceSection`, `AboutTestimonials`, `AboutCTA`, `AboutForm`, `Footer`, `BackToTop`.
- SOD installation page section order: `Navbar`, `SodHero`, `SodTrustSection`, `SodTestimonials`, `SodProcessIntro`, `SodProcess`, `SodCalculator`, `SodGallery`, `SodPromoCTA`, `SodForm`, `SodFAQ`, `SodFinalCTA`, `Footer`, `BackToTop`.
- Softscaping services page section order: `Navbar`, `SoftscapingHero`, `SoftscapingWhyInvest`, `SoftscapingServices`, `SoftscapingGallery`, `SoftscapingGuideCallout`, `SoftscapingFAQ`, `SoftscapingCTA`, `SoftscapingForm`, `Footer`, `BackToTop`.
- Current local visual assets are under `public/images/hero/`, `public/images/services/`, `public/images/gallery/`, `public/images/about/`, `public/images/sod/`, `public/images/sod/gallery/`, `public/images/sod/process/`, `public/images/softscaping/`, `public/images/softscaping/gallery/`, and `public/images/logo/everstone-logo.svg`.
- Downloadable/static documents are under `public/docs/`; source/reference PDFs may also exist under root `docs/`.
- Prefer local `/images/...` assets in active components. Do not reintroduce Unsplash or remote stock images unless intentionally reskinning.
- `src/data/site.ts` is older scaffolding and may contain stale brand names, remote Unsplash URLs, or unused data. Treat active component imports and rendered behavior as the source of truth before editing shared data.
- The site is a reusable agency template and should remain easy to reskin for a real landscaping client by swapping logo, copy, images, colors, contact details, and service areas.

## Route And Component Patterns
- Shared chrome belongs in top-level `src/components/` (`Navbar`, `Footer`, `BackToTop`, CTA helpers, shared animation).
- New service pages should use `src/app/<service-slug>/page.jsx` or `src/app/services/<service-slug>/page.jsx`, depending on the intended URL, with matching section components in `src/components/<service-key>/`.
- Keep route metadata close to the route in `page.jsx`; include local SEO terms for Kitchener, Waterloo, Cambridge, and surrounding Ontario communities where appropriate.
- Use `FadeUp` for scroll reveals and Framer Motion hover/tap states for CTAs/cards, while keeping client components scoped only where interactivity is required.
- If adding image-heavy galleries, use local files in `public/images/...`, stable aspect ratios, meaningful `alt` text, and responsive layouts that avoid layout shift.

## Quality Rules
- Do not create empty placeholder sections.
- Do not use generic Tailwind blocks.
- Every section must feel polished and production-ready.
- Prioritize conversion, trust, premium visuals, and mobile performance.
- Run lint/build checks after changes when available.

## Current Target Context
- Target checked: `https://rightonlandscapinginc.ca/`.
- The repo contains `rightonlandscapinginc.ca.zip`, which appears to be a Resources Saver static capture with `rightonlandscapinginc.ca/index.html`, Nitro/Kadence/WordPress assets, fonts, images, CSS, and JavaScript.
- Resources Saver captures are static mirrors, not full source-code rebuilds. They may work on GitHub Pages if served as plain static files and all required paths/CDNs resolve. If a Next route wrapper is used, prefer Vercel over GitHub Pages.
- The active React/Tailwind build has diverged from the original capture and should be treated as the primary working site unless the user explicitly asks to work on the static mirror.
- Root-level captured host folders such as `cdn-ilelejd.nitrocdn.com/`, `_DataURI/`, `fonts.gstatic.com/`, and original static files are retained for capture/deployment reference.

## Development Commands
- Install dependencies with `npm install` or `npm ci` when needed.
- Start local development with `npm run dev` or `npx next dev --port 3000`.
- Run production validation with `npm run build`.
- Run linting with `npm run lint` (`eslint .`), not deprecated `next lint`.
- Do not assume globally installed `next`; use npm scripts or `npx`.
- If `package.json` parse errors appear, check for and remove a UTF-8 BOM before debugging unrelated tooling.

## After Setup Review Checklist
When reviewing or improving this project, assess:
- Folder structure for `/components`, `/sections`, `/public`, and captured static assets.
- Whether the user wants the active Next.js template, the static capture, or a deploy wrapper before changing deployment strategy.
- Opportunities for reusable service cards, gallery sections, testimonials, CTA bands, service-area sections, and quote forms.
- Animation opportunities: fade-up reveals, hover lift, staggered cards, subtle parallax, and counters.
- Whether the build path supports the desired host: Vercel for the active Next.js app or Next route wrapper, GitHub Pages only for plain static HTML.
- Whether component copy, contact details, logo, image set, and local SEO terms are internally consistent after any reskin.
