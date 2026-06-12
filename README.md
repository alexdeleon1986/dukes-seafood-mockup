# Duke's Seafood — dukesseafood.com (Next.js, App Router)

Production-bound replacement for the WordPress site at dukesseafood.com.
One template generates six static, individually indexed location pages; menus
are driven by a Google Sheet so the restaurant office can update them without
a developer or a deploy.

**Stack:** Next.js 16 (App Router) · React 19 · Vercel · static generation (SSG)
with ISR on menu pages. No database. Content lives in `/lib` and a Google Sheet.

## Run locally

```
npm install
npm run dev
```

```
npm run build      # prerenders all routes (29) to static HTML
npm start          # serve the production build
```

Without the env vars below, the site still builds and runs: menus fall back to
the static copy in `lib/menus.js`, and the VIP form endpoints return 503.

## Hard rules

- **Alki / West Seattle (closed April 2025) must never appear anywhere.** Not in
  copy, schema, images, or alt text.
- **All new page CSS must be scoped** under a page-specific wrapper class
  (`.page-simple`, `.gd-*`, etc.). Never add bare generic rules (`.sec`, `.body`,
  `.card`) to `app/globals.css`; they leak onto existing pages. This caused a real
  regression once. Don't repeat it.
- No invented location lore or fabricated specifics in copy. Fields that need
  verification are marked `NEEDS-CONFIRM` in `lib/locations.js` and render a
  visible note so placeholders can't ship silently.

## Routes

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `app/page.js` | Home. Vimeo background hero with poster facade (`HeroVideoBackground`); video doesn't load on mobile. |
| `/locations/` | `app/locations/page.js` | Index of all six locations. |
| `/locations/[slug]/` | `app/locations/[slug]/page.js` | One template → 6 static pages. Hero, about, menus, reserve widget, private dining, hours/address/map. |
| `/menus/` | `app/menus/page.js` | Menu hub. Sheet-driven, ISR (`revalidate = 3600`). |
| `/menus/[slug]/` | `app/menus/[slug]/page.js` | 7 menu pages. Sheet-driven, ISR, Menu JSON-LD. |
| `/group-dining/` | `app/group-dining/page.js` | Private-dining hub rendering all six locations' rooms from `lib/locations.js`; hands full-venue events to Dockside. |
| `/chowder/` · `/frozen-chowders/` · `/gift-cards/` · `/our-story/` | one file each | Static content pages. |
| `/dukes-vip/` · `/vip-club-sign-up/` · `/dukes-vip-guest-check-in/` | one file each | VIP program landing + two forms. |
| `/api/vip-signup` · `/api/vip-checkin` | `app/api/*/route.js` | POST bridges to the live WordPress Gravity Forms REST API. **Inert until GF env vars are set** (return 503). |
| `/sitemap.xml` · `/robots.txt` | `app/sitemap.js` · `app/robots.js` | robots is `Disallow: /` everywhere except `VERCEL_ENV=production`, so previews never get indexed. |

Plus `app/not-found.js` (404) and `app/layout.js` (fonts: Newsreader, Geist,
JetBrains Mono; Nav + Footer; sitewide Restaurant-organization + WebSite JSON-LD).

## Editing content

### Menus (no developer needed)

Menus live in a Google Sheet read by `lib/menuSheet.js` (service-account JWT via
Web Crypto, no npm dependency).

- One tab per menu, named exactly the menu slug (e.g. `lunch-dinner-menu`).
  Row 1 is headers. Columns: `section | item | description | price | gf | active | sort`.
- A `_menus` tab (`slug | name | blurb | note | hidden`) defines the hub.
- Freshness: menu pages use ISR (`revalidate = 3600`) and `lib/menus.js` keeps a
  10-minute data memo, so a sheet edit reaches the live site within roughly an hour.
  No deploy.
- Failure mode: any sheet error logs and falls back to the static menus in
  `lib/menus.js`. Menus not yet transcribed there carry `pending: true` and render
  an honest "full menu coming" note. A bad sheet edit can't take a page down, but
  it CAN publish a wrong price; the `active` column is the draft switch.

### Everything else (in code)

- `lib/locations.js` — all per-location content: hero, about, menus, OpenTable
  `rid` + `otSlug`, private-dining rooms, GBP-verified `nap` block (address, geo),
  hours, `mapsQuery`. Edit here; the template renders it. SLU intentionally has no
  `geo` (its GBP coordinate is blank; the schema code guards on null rather than guessing).
- `lib/menus.js` — static menu fallback + the async sheet-first getters
  (`getMenuHub`, `getMenu`, `getAllMenuSlugs`).
- `lib/awards.js` — current awards as shown on the homepage (verified 2026-06-10).
  One place to update when next year's results come in.

## Components

`Nav` (client; mobile menu + Reserve modal trigger) · `Footer` ·
`ReservationWidget` (client; multi-location or single-`rid` OpenTable handoff;
`todayISO()` is deliberately local-time, not UTC — UTC rolled the date to
tomorrow after 5pm Pacific and blocked same-day dinner bookings) ·
`ReserveModal` (overlay with scroll lock, Escape, backdrop close) ·
`HeroVideoBackground` + `HeroVideoControls` (Vimeo postMessage pause/play; hidden
on mobile) · `NewsletterForm` · `VipSignupForm` · `VipCheckinForm`.

## Environment variables (Vercel)

| Var | Used by | Notes |
| --- | --- | --- |
| `MENU_SHEET_ID` | `lib/menuSheet.js` | The menu Google Sheet. |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `lib/menuSheet.js` | Shared with the dashboard's Sheets pipeline (`custom-sun-283218`). |
| `GOOGLE_PRIVATE_KEY` | `lib/menuSheet.js` | Paste only the JSON `private_key` string (BEGIN…END), keep the literal `\n` sequences, drop the JSON wrapper. |
| `GF_API_BASE` | VIP API routes | e.g. `https://dukesseafood.com/wp-json/gf/v2` |
| `GF_VIP_FORM_ID` / `GF_CHECKIN_FORM_ID` | VIP API routes | Numeric form IDs from the live GF admin. |
| `GF_CONSUMER_KEY` / `GF_CONSUMER_SECRET` | VIP API routes | GF Settings → REST API. Field-ID mapping (`input_N`) in the routes must match the live forms. |

## SEO & migration state

- `trailingSlash: true` in `next.config.mjs` matches every indexed WordPress URL
  so cutover URLs don't each eat a 308 hop.
- Per-location `Restaurant` JSON-LD uses the GBP-verified NAP, geo, hours,
  `acceptsReservations` (OpenTable), `hasMenu`, `sameAs`. Root layout emits the
  organization + `WebSite` schema.
- **Blog/recipes rewrites** to `wp.dukesseafood.com` are scaffolded in
  `next.config.mjs`, commented out. Do not enable before the subdomain exists and
  SSL is confirmed, or `/blog` and `/recipes` 502. Pending a JM/JT decision
  (keep WP on a subdomain vs migrate posts in).
- **301 redirects** scaffolded in `next.config.mjs`, commented out, pending the
  finalized map (`migration/redirect-map.csv`) from the Redirection-plugin export
  plus a Screaming Frog crawl. No legacy URL may fall through to 404 at cutover.

## Outstanding before cutover

1. Set the GF env vars and verify the VIP signup/check-in bridges end to end
   (signups must keep flowing into the existing ActiveCampaign automation).
2. Blog/recipes decision (rewrite vs migrate) and, if rewrite, stand up the
   `wp.dukesseafood.com` subdomain.
3. Finalize and enable the redirect map.
4. Populate the menu sheet from the live menus (also an SEO task; menu schema is
   only as good as the data).
5. Confirm `NEEDS-CONFIRM` fields in `lib/locations.js` (non-Bellevue addresses,
   phones, hours, private-dining rooms) and the Southcenter / Green Lake building
   photo assignments.
6. Replicate the Gravity Forms → ActiveCampaign, SinglePlatform, and accessibility
   review workflows identified in the WordPress plugin audit.

## Workflow

Commits go through the GitHub web UI. Folder routes must be committed as
`app/<route>/page.js`, a folder containing `page.js`, never a flat
`app/<route>-page.js` (Next only treats `page.js` as a route; this has bitten us).
After deploying, pull `/robots.txt` on the production domain and confirm it reads
`Allow: /` with the sitemap line.
