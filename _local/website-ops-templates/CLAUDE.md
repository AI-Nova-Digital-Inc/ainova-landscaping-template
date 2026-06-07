# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Operations workspace for AI Nova Digital Inc — an AI web agency. Contains:
- **`app/`** — Next.js 16 frontend app (chat UI scaffold)
- **`replit-source-code/`** — Archive of client website source tarballs, organized by niche (Construction, IT consulting, Plumbing, HVAC, Landscaping, Electrical, Moving, Cleaning, Roofing, Carpentry, etc.)
- **`cold-calling-strategies/`** — Markdown notes from client acquisition research (client-acquisition-playbook, niche-selection-guide, free-mockup-to-paid-client-workflow, sign-first-client-7-days, pricing-guide, pricing-guide-gpt)
- **`Prompt-technical.md`** / **`Prompt-nontechnical.md`** — System prompts for converting YouTube transcripts to Markdown notes (technical vs non-technical variants)
- **`transcript.txt`** — Source transcript for note generation

## App — Commands

All commands run from `app/` directory:

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## App — Stack & Architecture

**Versions (non-standard — read AGENTS.md before writing Next.js code):**
- Next.js **16.2.4** (breaking changes from Next.js 14/15)
- React **19.2.4**
- Tailwind CSS **v4** (PostCSS plugin, not v3 config format)

**Key architectural notes:**
- App Router at `app/src/app/`
- UI components at `app/src/components/ui/` — uses shadcn pattern with `cn()` utility
- `@base-ui/react` used alongside shadcn components
- No API routes exist yet — the chat UI (`VercelV0Chat`) is a static scaffold (submit does nothing)
- Tailwind v4 uses `@tailwindcss/postcss` — no `tailwind.config.js`; config is in CSS via `@theme`

## Transcript → Notes Workflow

Two prompt files define how transcripts are converted:
- `Prompt-nontechnical.md` — for business/sales/marketing content → output to `cold-calling-strategies/`
- `Prompt-technical.md` — for DevOps/technical content → output as technical reference docs

Workflow: place transcript in `transcript.txt`, apply the appropriate prompt, save output as `.md` in the relevant folder.

## Agency Context

- Target market: Kitchener / Waterloo / Cambridge (Ontario, Canada) — local trades and service businesses
- Pricing model: setup fee + monthly retainer (not hourly)
- Current pricing anchor: $349 setup + $69/month (introductory, until first few clients), then $799 setup + $99/month (small businesses), $1,200–$2,000 setup + $99–$150/month (medium)
- Do NOT mention AI to clients — say "modern workflow, fast turnaround"
- Recommended delivery stack: Replit + Vercel + GitHub + Formspree + Hostinger email

## Client Website Templates

`replit-source-code/` holds source archives for ~20+ client site templates across niches. These are standalone Replit projects (not connected to the `app/`). When extracting, each archive contains a self-contained website codebase.
