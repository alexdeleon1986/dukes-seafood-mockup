# Duke's Seafood — Site (Vite + React)

Full multi-page Duke's Seafood site, proof-of-concept for the Vercel migration.
Single Vite/React app with shared layout, client-side routing, and one location
template driving all six restaurants.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build      # outputs to dist/
npm run preview
```

## Deploy (Vercel)
Import the repo in Vercel. Framework preset: **Vite**. Build command `npm run build`,
output dir `dist`. `vercel.json` already includes the SPA rewrite so deep links
(e.g. /locations/tacoma) resolve correctly.

## Structure
- `src/components/Layout.jsx` — canonical header, mobile menu, footer (edit nav here once, applies everywhere)
- `src/data/locations.js` — all six locations; edit content here, the template renders it
- `src/data/menus.js` — menu hub + per-menu content
- `src/pages/` — Home, LocationsIndex, LocationPage, MenusHub, MenuPage, OurStory, Chowder
- `src/styles.css` — design tokens + all component styles (ported from the original about.html)
- `public/images/` — photography (carried over from the previous mockup)

## Pages (15)
Home · Locations index · 6 location pages · Menus hub · 5 menu pages (lunch, dinner,
happy hour, drinks, gluten-free, kids, dessert) · Our Story · Chowder

## Notes / to reconcile before launch
- Menu items + prices: lunch is populated from the live site; dinner/happy-hour/drinks/
  gluten-free/kids/dessert show a real layout with a "to be populated" banner. Fill from live menus.
- Location addresses/phones: verify each against the live site / GBP.
- External links (OpenTable per-location, order.online, dockside, frozen chowders) are wired to live URLs.
- Alki/West Seattle is intentionally absent everywhere.
