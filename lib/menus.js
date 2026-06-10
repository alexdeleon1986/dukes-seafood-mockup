// Menu hub + per-menu content.
// Real items drawn from the live Duke's menus where available; prices and full
// listings should be reconciled against the live site before launch (marked).

export const MENU_HUB = [
  { slug: 'dinner-menu', name: 'Dinner', blurb: 'Wild seafood, grass-fed burgers, award-winning chowders. Served daily from 3pm.' },
  { slug: 'lunch-menu', name: 'Lunch', blurb: 'Salads, sandwiches, and seafood favorites. 11am to 3pm daily.' },
  { slug: 'happy-hour-menu', name: 'Happy Hour', blurb: 'Full-size portions, better prices. 3–6pm and 9pm–close, seven days a week.' },
  { slug: 'drinks-menu', name: 'Drinks', blurb: 'Full bar, an extensive wine list, and a great Pacific Northwest beer selection.' },
  { slug: 'gluten-free-menu', name: 'Gluten Free', blurb: 'A full range of gluten-free seafood, salads, and entrees.' },
  { slug: 'kids-menu', name: 'Kids', blurb: 'Smaller plates for younger guests, made with the same care.' },
  { slug: 'dessert-menu', name: 'Dessert', blurb: 'House desserts to finish, including seasonal favorites.' },
];

// Detailed content keyed by slug. Where a menu isn't fully transcribed yet,
// `pending: true` shows an honest "full menu coming" note over a real structure.
export const MENUS = {
  'lunch-menu': {
    name: 'Lunch',
    note: 'Served 11am – 3pm daily. Available at all six Duke\u2019s Seafood locations.',
    groups: [
      {
        title: 'Salads',
        items: [
          { name: '"Un"Chopped Seafood Salad', price: '$24.90', desc: 'Seared scallops and prawns with cashews, avocado, tomato, feta, garlic-basil-lemon-olive oil dressing. Gluten free. Try it chopped and tossed, Duke\u2019s way.' },
          { name: '"Grab Your Bibb" Dungeness Crab Salad', price: '$21.90', desc: 'Dungeness crab, hydroponic bibb lettuce, nitrate-free bacon, toasted almonds, bell peppers, teardrop tomatoes, honey-raspberry vinaigrette.' },
          { name: 'Wild & Bleu Blackened Salmon Salad', price: 'Market', desc: 'Organic greens, Rogue Creamery bleu cheese, Cosmic Crisp apples, candied pecans, tarragon vinaigrette.' },
        ],
      },
      {
        title: 'Sandwiches & Burgers',
        items: [
          { name: 'Duke\u2019s "Extra Sharp" Cheddar Cheeseburger', price: '$17.90', desc: 'Grass-fed beef, Tillamook extra-sharp white cheddar.' },
          { name: '"North of California" Havarti Cheeseburger', price: '$18.90', desc: 'Fresh avocado, chipotle aioli, nitrate-free bacon, melted havarti.' },
          { name: 'Dungeness Crab "Un"-Cake Sandwich', price: 'Market', desc: 'Crab "un"-cake on brioche, melted havarti, bacon, chipotle aioli, avocado, tomato, bibb lettuce, sweet potato fries.' },
        ],
      },
      {
        title: 'Fish & Chips and Tacos',
        items: [
          { name: 'Award-Winning Fish & Chips', price: 'Market', desc: 'Blue North Pacific cod, lightly panko-breaded with Mac & Jack\u2019s beer batter, house tartar.' },
          { name: 'Blackened Cod Fish Tacos', price: 'Market', desc: 'Lightly blackened Blue North Pacific cod, feta, tequila-lime aioli, avocado, napa cabbage, cucumber, pico de gallo.' },
        ],
      },
    ],
  },
  'dinner-menu': {
    name: 'Dinner',
    note: 'Served from 3pm daily. Full dinner menu to be finalized against the live site.',
    pending: true,
    groups: [
      {
        title: 'Chowders & Starters',
        items: [
          { name: 'Award-Winning Clam Chowder', price: 'Cup / Bowl', desc: 'The chowder that won Duke\u2019s its reputation. Also available as a four-chowder sampler.' },
          { name: 'Lobster Mobster Pernod Chowder', price: 'Cup / Bowl', desc: 'Rich lobster chowder finished with Pernod.' },
          { name: 'Dungeness Crab Dip', price: 'Market', desc: 'A guest favorite, served warm.' },
        ],
      },
      {
        title: 'Seafood Entrees',
        items: [
          { name: 'Parmesan-Crusted Halibut', price: 'Market', desc: 'Wild halibut with a parmesan crust.' },
          { name: 'Crab-Stuffed Salmon', price: 'Market', desc: 'Wild salmon stuffed with Dungeness crab.' },
        ],
      },
    ],
  },
  'happy-hour-menu': {
    name: 'Happy Hour',
    note: 'Our happy hour runs 3–6pm and 9pm–close, seven days a week, in the dining room, bar, and on the deck. We never reduce portion sizes or quality.',
    pending: true,
    groups: [
      { title: 'Bites & Plates', items: [
        { name: 'Happy Hour Appetizers', price: 'See in-house menu', desc: 'A rotating selection of Duke\u2019s most popular appetizers and burgers at happy hour pricing.' },
      ] },
    ],
  },
  'drinks-menu': {
    name: 'Drinks',
    note: 'Full bar, extensive wine list, and a great beer selection. Full drinks list to be added from the live site.',
    pending: true,
    groups: [
      { title: 'Bar', items: [
        { name: 'Cocktails, Wine & Beer', price: 'See in-house menu', desc: 'A full bar with Pacific Northwest beers and an extensive wine list.' },
      ] },
    ],
  },
  'gluten-free-menu': {
    name: 'Gluten Free',
    note: 'Duke\u2019s offers a full range of gluten-free seafood, salads, and entrees across all locations. Full gluten-free listing to be added from the live site.',
    pending: true,
    groups: [
      { title: 'Gluten-Free Favorites', items: [
        { name: '"Un"Chopped Seafood Salad', price: '$24.90', desc: 'Naturally gluten free. Seared scallops and prawns, cashews, avocado, tomato, feta.' },
      ] },
    ],
  },
  'kids-menu': {
    name: 'Kids',
    note: 'Smaller plates for younger guests, made with the same sustainable ingredients. Full kids listing to be added from the live site.',
    pending: true,
    groups: [
      { title: 'For Kids', items: [
        { name: 'Kids Favorites', price: 'See in-house menu', desc: 'Kid-sized portions of Duke\u2019s favorites.' },
      ] },
    ],
  },
  'dessert-menu': {
    name: 'Dessert',
    note: 'House desserts to finish. Full dessert listing to be added from the live site.',
    pending: true,
    groups: [
      { title: 'Sweets', items: [
        { name: 'House Desserts', price: 'See in-house menu', desc: 'Seasonal house-made desserts.' },
      ] },
    ],
  },
};


// ---------------------------------------------------------------------------
// Sheet-backed getters. These try the Google Sheet first (live, office-editable)
// and fall back to the static MENU_HUB / MENUS above if the sheet is not
// configured or unreachable. The static data is also the "shape of truth" so
// the site renders identically whether the sheet is wired up or not.
// ---------------------------------------------------------------------------
import { fetchMenusFromSheet } from '@/lib/menuSheet';

// Module-level memo so a single render pass doesn't hit the API repeatedly.
// ISR (revalidate on the pages) controls how often this is refreshed in prod.
let _cache = null;
async function load() {
  if (_cache) return _cache;
  const sheet = await fetchMenusFromSheet();
  _cache = sheet || { hub: MENU_HUB, menus: MENUS };
  return _cache;
}

export async function getMenuHub() {
  const { hub } = await load();
  return hub;
}

export async function getAllMenuSlugs() {
  // generateStaticParams can't await the sheet reliably at build for unknown
  // slugs, so seed from the static keys; sheet-only slugs still resolve at
  // request time via ISR fallback.
  const staticKeys = Object.keys(MENUS);
  try {
    const { menus } = await load();
    return Array.from(new Set([...staticKeys, ...Object.keys(menus)]));
  } catch {
    return staticKeys;
  }
}

export async function getMenu(slug) {
  const { menus } = await load();
  return menus[slug] || MENUS[slug] || null;
}
