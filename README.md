# AINova Landscaping Template

Reusable repo for landscaping website captures and premium local-business frontend builds.

## What Is In This Repo

- `AGENTS.md` - Codex-ready frontend, UI/UX, Framer Motion, landscaping, and quality instructions.
- `rightonlandscapinginc.ca.zip` - Resources Saver capture for Right On Landscaping.
- `templates/resources-saver-next-wrapper/` - Minimal Next.js wrapper copied from `ai-website-cloner-template` for Vercel deployment of captured HTML.
- `docs/RESOURCES_SAVER_DEPLOY.md` - Detailed Resources Saver deployment workflow.
- `website-ops-templates/` - Existing website operations/source-code templates.

## Right On Landscaping Check

Target checked: `https://rightonlandscapinginc.ca/`.

The zip contains a static Resources Saver-style capture with:

- `rightonlandscapinginc.ca/index.html`
- Nitro/Kadence/WordPress CSS and JavaScript
- Google fonts
- optimized images
- tracking scripts and form/runtime scripts

This is a static mirror, not a clean React source-code rebuild.

## GitHub Pages Feasibility

GitHub Pages is possible only if this is deployed as plain static files.

For GitHub Pages:

1. Keep `index.html` at the repo root.
2. Keep the copied asset folders at the repo root, including `cdn-ilelejd.nitrocdn.com/`, `_DataURI/`, `fonts.gstatic.com/`, and the other captured host folders.
3. Keep `.nojekyll` at the repo root so GitHub Pages serves underscore-prefixed folders such as `_DataURI/`.
4. Replace `https://formspree.io/f/YOUR_FORM_ID` in `index.html` with your real Formspree endpoint.
5. In GitHub repo settings, enable Pages from the `main` branch root.

Do not use the Next wrapper for GitHub Pages. GitHub Pages does not run Next.js route handlers.

For Vercel:

1. Copy `templates/resources-saver-next-wrapper/` into a new repo or app root.
2. Replace `public/site/index.html` with the captured `index.html`.
3. Run `npm install`, `npm run check`, and deploy to Vercel.


## Cleaned Static Base

The root `index.html` has been adjusted as a reusable static base:

- Same-site navigation now stays on the page using local anchors.
- Service, gallery, about, contact, and mobile-menu links no longer redirect to the original site.
- WordPress/Kadence form submission has been replaced with a Formspree-compatible static form.
- WordPress admin AJAX and original-domain upload/lightbox references have been neutralized.
- Nitro CDN asset paths are intentionally preserved because they carry the captured visual assets needed for the replica to render.
## Recommended Project Improvements

If rebuilding as a premium React/Tailwind/Framer Motion site instead of deploying the static capture, use this structure:

```text
src/
  app/
  components/
    ui/
    layout/
    cards/
    forms/
  sections/
    HeroSection.tsx
    ServicesSection.tsx
    GallerySection.tsx
    BeforeAfterSection.tsx
    TestimonialsSection.tsx
    ServiceAreasSection.tsx
    ContactSection.tsx
  data/
    services.ts
    testimonials.ts
    service-areas.ts
  lib/
    utils.ts
public/
  images/
  seo/
```

Suggested reusable sections:

- Hero with clear CTA and service-area signal.
- Sticky mobile CTA.
- Service cards for interlock, retaining walls, sod, softscaping, patios, driveways, and steps.
- Before/after transformation section.
- Project gallery with optimized images.
- Testimonials and review highlights.
- Trust/process section.
- Service areas for Kitchener, Waterloo, Cambridge, and surrounding areas.
- Contact/quote form.

Animation recommendations:

- Fade-up section reveals.
- Staggered service cards.
- Hover lift gallery cards.
- Button micro-interactions.
- Lightweight animated counters for stats.
- Subtle parallax for hero/gallery imagery only.

Quality bar:

- No empty placeholder sections.
- No generic Tailwind blocks.
- Mobile-first implementation.
- Fast-loading images.
- Run lint/build checks after changes when available.





