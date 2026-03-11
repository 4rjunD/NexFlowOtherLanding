# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start dev server (Next.js 15.5.5)
npm run build        # Production build + auto-generates sitemap via next-sitemap
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
npm start            # Start production server
```

No test framework is configured. After making changes, verify with `npm run build` to catch type errors and build failures.

**Common issue:** Webpack `__webpack_modules__[moduleId] is not a function` errors are caused by stale `.next` cache. Fix with `rm -rf .next` and restart the dev server.

## Architecture

**Next.js 15 App Router** with React 19. Server components by default; `"use client"` for interactive components (animations, forms, state).

### Page Structure

- `/app/enterprise/page.tsx` — Main landing page. All sections are inline components (Hero, SolutionSection, HowItWorksSection, GrandSlamOffer, WhyUsSection) plus imported block components (DarkCtaSection). Root `/app/page.tsx` redirects here.
- `/app/blog/page.tsx` — Blog index listing all MDX posts
- `/app/blog/[slug]/page.tsx` — Individual blog posts rendered with `next-mdx-remote`
- `/app/learn/` — Secondary content hub (health/wearable articles)
- `/app/playbook/`, `/app/privacy/`, `/app/terms/` — Static pages

### Component Organization

- **`/components/blocks/`** — Full-width page sections (hero, CTA, features, pricing). Props-driven with sensible defaults so they work standalone or with custom content.
- **`/components/ui/`** — Small reusable pieces (buttons, cards, animated-group). shadcn/ui foundation with CVA variants.

### Blog System

MDX files in `/content/blog/` → parsed by `/lib/blog.ts` using `gray-matter` for frontmatter + `reading-time`. Key functions: `getAllPosts()` (sorted by date), `getPostBySlug(slug)`. Related articles are manually mapped via `RELATED_ARTICLES` object. Blog posts use `generateStaticParams()` for static generation.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss`. Design tokens in `/app/globals.css` using OKLCH color space.
- Color palette: slate base, emerald-500 (`#10b981`) accent, white/slate-50 backgrounds.
- Blog pages use inline `style` objects with `var(--font-dm-sans)` for MDX component overrides.
- `cn()` utility in `/lib/utils.ts` merges Tailwind classes (clsx + tailwind-merge).

### Fonts

Loaded in `/app/layout.tsx` via `next/font/google`:
- **DM Sans** (`--font-dm-sans`) — Primary body/UI font
- **Playfair Display** (`--font-playfair`) — Italic accent headings (`.font-playfair` class)
- **Instrument Serif** (`--font-instrument-serif`) — Serif accent (`.font-serif-accent` class)
- **Geist / Geist Mono** — Sans-serif and monospace defaults

### Animation Patterns

Framer Motion throughout. Shared variants in `/lib/animations.ts`: `fadeInUp`, `staggerContainer`, `fadeIn`. Standard pattern for sections:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

`AnimatedGroup` component (`/components/ui/animated-group.tsx`) provides presets: fade, slide, blur-slide, scale, etc. Used in the hero with spring transitions.

### SEO

- Dynamic metadata via `generateMetadata()` on blog posts
- JSON-LD structured data (SoftwareApplication on root, Article on blog posts)
- `next-sitemap` generates `/public/sitemap-0.xml` and `robots.txt` post-build
- Site URL: `https://nexflowinc.com`

## Key Conventions

- All CTA links point to `https://calendly.com/arjundixit3508/30min`
- Block components accept optional props with defaults — existing usage stays unaffected when adding new props
- Enterprise page uses `"use client"` at the top (Framer Motion + useState for mobile menu)
- No em dashes in marketing copy
- Google Analytics: `G-FS0378CSZ7`
