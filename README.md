# Duke's Seafood — Site (Next.js, App Router)

Production-bound site for Duke's Seafood. One template generates six static,
individually-indexable location pages — built to preserve SEO parity with the
existing WordPress site during and after migration.

## Stack
Next.js 16 (App Router) · React · next/font (Newsreader, Geist, JetBrains Mono) ·
static generation. No database; content lives in `/lib`.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build      # prerenders all routes to static HTML
npm start          # serve the production build
```

## Deploy (Vercel)
Import the repo. Framework preset: **Next.js** (auto-detected). No config needed —
`next build` runs automatically, fonts are fetched at build time and self-hosted.
Every location and menu page is emitted as static HTML (SSG), so search engines
get full content in the initial response, not a JS shell.

## Why this architecture
The previous static-HTML mockup rendered fine but couldn't scale to per-page SEO
without copy-pasting files. Next's `generateStaticParams` produces one real
prerendered HTML page per location from a single template, each with its own
`<title>`, meta description, and Restaurant/LocalBusiness JSON-LD. Editing the
location design happens in one file; all six update.

## Structure
- `app/layout.js` — root layout, fonts, Nav + Footer
- `app/page.js` — Home (ported from the approved Claude Design export: Vimeo hero intact)
- `app/locations/[slug]/page.js` — location template → 6 static pages (modeled on the Bellevue export)
- `app/menus/page.js` + `app/menus/[slug]/page.js` — menus hub + 7 static menu pages
- `app/our-story/page.js`, `app/chowder/page.js`
- `components/Nav.jsx` (client), `components/Footer.jsx`, `components/NewsletterForm.jsx`
- `lib/locations.js` — per-location content (edit here; template renders it)
- `lib/menus.js` — menu hub + per-menu content
- `app/globals.css` — design tokens + all component styles (ported from the Bellevue export)
- `public/images/` — photography carried over from the previous mockup

## Pages (15)
Home · Locations: Bellevue, Tacoma, South Lake Union, Green Lake, Southcenter,
Kent Station · Menus hub · 7 menu pages · Our Story · Chowder

## Confirm before launch
These are flagged visibly in the UI so nothing placeholder ships unnoticed:
- **Addresses & phones** for the five non-Bellevue locations are best-effort from
  listings/memory and render a "confirm against live site" note. Bellevue is from the export.
- **Private-dining options** for the five non-Bellevue locations are generic placeholders
  with a visible "preview" marker. Only Bellevue's five-option room layout came from the export.
- **Menu items/prices**: lunch is populated from the live site; the other six menus show a real
  layout with a "to be populated" banner. Fill from the live menus.
- External links (per-location OpenTable, order.online, Dockside, frozen chowders) point at live URLs.
- Alki / West Seattle (closed April 2025) is intentionally absent everywhere.
