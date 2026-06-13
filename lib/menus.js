// Menu hub + per-menu content.
// Real items drawn from the live Duke's menus where available; prices and full
// listings should be reconciled against the live site before launch (marked).

export const MENU_HUB = [
  { slug: 'lunch-dinner-menu', name: 'Lunch & Dinner', blurb: 'Wild seafood, grass-fed burgers, and award-winning chowders. Served daily, 11am to close.' },
  { slug: 'happy-hour-menu', name: 'Happy Hour', blurb: 'Full-size portions, better prices. 3–6pm and 9pm–close, seven days a week.' },
  { slug: 'drinks-menu', name: 'Drinks', blurb: 'Full bar, an extensive wine list, and a great Pacific Northwest beer selection.' },
  { slug: 'gluten-free-menu', name: 'Gluten Free', blurb: 'A full range of gluten-free seafood, salads, and entrees.' },
  { slug: 'kids-menu', name: 'Kids', blurb: 'Smaller plates for younger guests, made with the same care.' },
  { slug: 'dessert-menu', name: 'Dessert', blurb: 'House desserts to finish, including seasonal favorites.' },
  { slug: 'specials', name: 'Specials', blurb: 'Chef Bill\u2019s seasonal specials and limited-time combos.' },
];

// Detailed content keyed by slug. Where a menu isn't fully transcribed yet,
// `pending: true` shows an honest "full menu coming" note over a real structure.
export const MENUS = {
  'lunch-dinner-menu': {
    name: 'Lunch & Dinner',
    note: 'Served daily, 11am to close. Available at all six Duke\u2019s Seafood locations. Prices may vary by location.',
    groups: [
      { title: 'Appeteasers & Shared Plates', items: [
        { name: 'Clam Lover\u2019s Steamer Clams', price: '21.90', desc: 'Steamer clams with butter, garlic, white wine, fresh basil, and rosemary bread.' },
        { name: 'Coco Loco Prawns', price: '19.90', desc: 'Coconut encrusted Wild Mexican Prawns with homemade sweet chili sauce.' },
        { name: 'Dungeness Crab "Un"Cake', price: '27.90', desc: 'Lots of Dungeness Crab, cake not so much, with zesty lime aioli.' },
        { name: 'Finger Lickin\u2019 Chicken Strips', price: '19.90', desc: 'Organic, non-GMO, free-range chicken breast, buttermilk marinated with honey mustard.' },
        { name: 'Dungeness Crab Dip', price: '24.90', gf: true, desc: 'Havarti, Boursin cheese, roasted garlic, spinach, Walla Walla sweet onions & dipping chips.' },
        { name: 'Heirloom Masa Dusted Calamari', price: '19.90', desc: 'Flash fried and buttermilk marinated, served with tequila lime aioli and hot honey sauces.' },
        { name: 'Lobster Risotto Bites', price: '22.90', desc: 'Arborio rice and imported cheeses, flash fried, served with tomato basil cream and dressed arugula.' },
        { name: 'Wildly Delicious Alaska Salmon Sliders', price: '19.90', desc: 'Rosemary bread, pesto, sliced tomato.' },
        { name: 'Wondrous Wild Salmon Bites', price: '22.90', desc: 'Bite-sized and flash fried with wasabi and chipotle aioli for dipping.' },
      ] },
      { title: 'Tiny Bites', items: [
        { name: 'Dungeness Crabby Deviled Egg', price: '8.90', gf: true, desc: 'Cage-free local egg with fresh Dungeness Crab.' },
        { name: 'Maple Bacon Seafood Bites', price: '9.90', gf: true, desc: 'Bacon-wrapped Wild Mexican Prawn & Alaska Weathervane Scallop with herb maple butter sauce.' },
        { name: 'Smoked Salmon Deviled Egg', price: '8.90', gf: true, desc: 'Smoked Wild Alaska Salmon, fresh dill, capers.' },
      ] },
      { title: 'Champion Chowders', items: [
        { name: 'Award Winning Clam Chowder', price: '16.90 / 21.90 / 26.90', gf: true, desc: 'All natural, New England style with nitrite-free bacon, creamy and herby.' },
        { name: 'Dinghy Sized Chowder Samplers', price: '5.40 / 9.90 / 14.90', gf: true, desc: '' },
        { name: 'Lobster Mobster Pernod Chowder', price: '16.90 / 21.90 / 26.90', gf: true, desc: 'Nova Scotia Lobster meat, Argentinean Red Shrimp, sweet potatoes.' },
        { name: 'North By Northwest Seafood Chowder', price: '16.90 / 21.90 / 26.90', gf: true, desc: 'Wild Alaska Salmon, Halibut & Cod, Steamer Clams - cioppino style.' },
        { name: 'Vegan Veggie Stew', price: '24.90', gf: true, desc: 'Sauteed vegetables, caramelized peppers and onions, organic roasted potatoes, garlic, herbs in tomato broth. Vegan and gluten free.' },
      ] },
      { title: 'Sumptuous Salads & Seafood Salads', items: [
        { name: '"Un"Chopped Seafood Salad', price: '29.90 / 36.90', desc: 'Seared scallops and prawns with cashews, avocado, tomato, feta, garlic-basil-lemon-olive oil dressing.' },
        { name: 'All Hail Caesar Salad', price: '16.90 / 21.90', desc: 'Romaine, Parmesan/Asiago, Caesar dressing, garlic sourdough croutons.' },
        { name: 'Cosmic Wild Mixed Greens Salad', price: '16.90 / 21.90', desc: 'Organic greens, Rogue Creamery bleu cheese, Cosmic Crisp apples, candied pecans, tarragon vinaigrette.' },
        { name: 'Grab Your Bibb Dungeness Crab Salad', price: '29.90 / 39.90', desc: 'Dungeness Crab, bibb lettuce, bacon, almonds, bell peppers, tomatoes, honey-raspberry vinaigrette.' },
        { name: 'Sweet Caper Spinach Salad', price: '16.90 / 21.90', desc: 'Baby spinach, sweet caper vinaigrette, bacon, almonds, egg, tomatoes, Parmesan/Asiago.' },
        { name: 'Wild & Bleu Blackened Salmon Salad', price: '36.90', desc: 'Blackened Wild Salmon, blueberries, bleu cheese, candied pecans, greens, bleu cheese dressing.' },
      ] },
      { title: 'Salad Add On', items: [
        { name: 'Crab "Un"Cake', price: '21.90', desc: '' },
        { name: 'Fresh Dungeness Crab', price: '18.90', desc: '' },
        { name: 'Nova Scotia Lobster', price: '14.90', desc: '' },
        { name: 'Organic Chicken', price: '12.90', desc: '' },
        { name: 'Prawn & Scallop Skewer', price: '14.90', desc: '' },
        { name: 'Wild Alaska Salmon', price: '16.90', desc: '' },
      ] },
      { title: 'Fish & Chips', items: [
        { name: 'Oh My Cod! Fish & Chips', price: '36.90 / 29.90', desc: 'Panko breaded Alaska Pacific Cod with Mac & Jack\u2019s beer and homemade tartar.' },
      ] },
      { title: 'Famous Fish Tacos', items: [
        { name: 'Rockin\u2019 Rockfish Tacos', price: '36.90 / 29.90', desc: 'Wild Rockfish, Thai chili marinade, cheddar, mango chutney, tequila lime aioli, cucumber pico de gallo.' },
        { name: 'Unforgettable Sea Cod Tacos', price: '36.90 / 29.90', desc: 'Blackened Pacific Cod with feta, tequila lime aioli, avocado, Napa cabbage, cucumber pico de gallo.' },
      ] },
      { title: 'Combo Wombos', items: [
        { name: 'Chowder & Salad Combo', price: '29.90', desc: 'Choose a starter Cosmic Wild Mixed Greens, Sweet Caper Spinach Salad, or All Hail Caesar Salad, with a cup of Award-Winning Clam Chowder.' },
        { name: 'Crab Cake Sandwich Combo', price: '41.90', desc: 'Dungeness Crab "Un"Cake on locally made bun, sweet potato fries, Lobster Mobster Chowder.' },
        { name: 'Fish & Chips Combo', price: '44.90 / 37.90', desc: 'Alaska Pacific Cod, cup of Award-Winning Clam Chowder, homemade tartar.' },
        { name: 'Rockfish Taco Combo', price: '37.90', desc: 'One Alaska Wild Rockfish Taco, cup of Award-Winning Clam Chowder.' },
        { name: 'Sea Cod Taco Combo', price: '37.90', desc: 'One Unforgettable Sea Cod Taco, cup of Award-Winning Clam Chowder.' },
      ] },
      { title: 'Wild Succulent Salmon', items: [
        { name: 'Colonel Mustard Wild Salmon', price: '43.90', desc: 'Pan seared Wild Salmon with herbs and Dijon cream sauce.' },
        { name: 'Duke\u2019s Favorite Pasta with Wild Salmon', price: '43.90', desc: 'Blackened Wild Salmon on linguini with basil garlic cream, caramelized peppers and onions.' },
        { name: 'Off the Hook Stuffed Wild Salmon', price: '46.90', desc: 'Stuffed with Crab, Prawns, cheeses, pesto, lemon beurre blanc.' },
        { name: 'Tantalizing Silky Pan Seared Salmon', price: '44.90', desc: 'Ginger and basil encrusted, pan seared with herbs and Grand Marnier balsamic beurre blanc.' },
      ] },
      { title: 'Heavenly Halibut', items: [
        { name: 'Crab & Prawn Stuffed Halibut', price: '49.90', desc: 'Halibut stuffed with Crab, Prawns, cheeses, pesto, lemon beurre blanc.' },
        { name: 'It\u2019s So Dreamy Parmesan Halibut', price: '48.90', desc: 'Parmesan/Asiago encrusted fresh Kodiak Island Halibut with a lemon caper butter sauce.' },
      ] },
      { title: 'Luxurious Lobster', items: [
        { name: 'Crab Stuffed Cold Water Lobster Tail', price: '46.90', desc: 'Lobster tail stuffed with Crab, Prawns, cheeses.' },
        { name: 'Lavish Lobster Roll', price: '38.90', desc: 'Tossed with creamy lemon mayo and a hint of Old Bay seasoning on butter grilled soft brioche roll.' },
        { name: 'Lobster & Seafood Cavatappi Mac \u2019n Cheese', price: '39.90', desc: 'Lobster, Salmon, Halibut, Cod in creamy gruyere, parmesan and asiago sauce.' },
      ] },
      { title: 'Wild Shellfish', items: [
        { name: 'Crab "Un"Cakes', price: '51.90', desc: 'Dungeness Crab with lime aioli.' },
        { name: 'Mixed Grill', price: '44.90', desc: 'Crab "Un"Cake, scallops & prawns.' },
        { name: 'Seafood Cioppino', price: '39.90', desc: 'Crab, Salmon, Halibut, Cod, Prawns, Manila Clams.' },
        { name: 'Stuffed Jumbo Prawns', price: '39.90', desc: 'Stuffed with Crab, Prawns, cheeses, pesto, lemon beurre blanc.' },
      ] },
      { title: 'Grass Fed Burgers', items: [
        { name: 'North of California Burger', price: '28.90', desc: 'Fresh avocado, nitrate-free bacon, Havarti cheese, bibb lettuce, onion, tomato, chipotle aioli.' },
        { name: 'The Duke Cheeseburger', price: '24.90', desc: 'Tillamook extra sharp white cheddar, bibb lettuce, sliced tomato, onion, homemade mayo.' },
      ] },
      { title: 'Gourmet Sandwiches', items: [
        { name: 'Chipotle Wild Salmon Sandwich', price: '34.90', desc: 'Wild Salmon, bacon, avocado, tomato, chipotle aioli.' },
        { name: 'Crab Cake Sandwich', price: '34.90', desc: 'Crab "Un"Cake, Havarti, bacon, chipotle aioli, avocado, tomato, bibb lettuce.' },
        { name: 'Grilled Chicken Sandwich', price: '26.90', desc: 'Grilled chicken, bacon, avocado, tomato, mayo, cheddar and Havarti.' },
      ] },
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
  'specials': {
    name: 'Specials',
    note: 'Chef Bill\u2019s seasonal specials and limited-time combos. Full specials listing to be added from the live site.',
    pending: true,
    groups: [
      { title: 'Chef Specials', items: [
        { name: 'Seasonal Specials', price: 'See in-house menu', desc: 'Rotating chef specials and combos, updated through the season.' },
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

// Module-level memo with a TTL so a warm Vercel instance doesn't serve a stale
// sheet read forever (ISR gates page regeneration; this gates the data memo).
let _cache = null;
let _cacheAt = 0;
const TTL = 10 * 60 * 1000; // 10 minutes
async function load() {
  if (_cache && Date.now() - _cacheAt < TTL) return _cache;
  const sheet = await fetchMenusFromSheet();
  if (sheet) {
    _cache = sheet;
    _cacheAt = Date.now();
  } else if (!_cache) {
    // First load and the sheet is unreachable: use static fallback, but expire it
    // soon (60s) so a transient failure doesn't pin the fallback for a full TTL.
    _cache = { hub: MENU_HUB, menus: MENUS };
    _cacheAt = Date.now() - TTL + 60_000;
  }
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
