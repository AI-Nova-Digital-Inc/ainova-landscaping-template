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

## After Setup Review Checklist
When reviewing or improving this project, assess:
- Folder structure for `/components`, `/sections`, `/public`, and captured static assets.
- Whether the zip should be extracted to a GitHub Pages-compatible static root or served through the Next wrapper.
- Opportunities for reusable service cards, gallery sections, testimonials, CTA bands, service-area sections, and quote forms.
- Animation opportunities: fade-up reveals, hover lift, staggered cards, subtle parallax, and counters.
- Whether the build path supports the desired host: GitHub Pages for plain static HTML, Vercel for Next.js route/server wrapper.
