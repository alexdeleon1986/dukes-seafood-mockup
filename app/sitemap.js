import { LOCATION_SLUGS } from '@/lib/locations';
import { getAllMenuSlugs } from '@/lib/menus';

const BASE = 'https://dukesseafood.com';

// Static routes that exist as their own page.js. Trailing slashes to match
// trailingSlash:true and the live WordPress URL shape.
const STATIC_ROUTES = [
  '/',
  '/our-story/',
  '/chowder/',
  '/frozen-chowders/',
  '/gift-cards/',
  '/locations/',
  '/menus/',
  '/group-dining/',
  '/dukes-vip/',
  '/dukes-vip-guest-check-in/',
  '/vip-club-sign-up/',
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }));

  const locationEntries = LOCATION_SLUGS.map((slug) => ({
    url: `${BASE}/locations/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  let menuSlugs = [];
  try {
    menuSlugs = await getAllMenuSlugs();
  } catch {
    menuSlugs = [];
  }
  const menuEntries = menuSlugs.map((slug) => ({
    url: `${BASE}/menus/${slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticEntries, ...locationEntries, ...menuEntries];
}
