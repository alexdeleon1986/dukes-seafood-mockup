// Per-location content for the six active Duke's restaurants.
// Structure mirrors the real Bellevue Claude Design export:
// hero, about, menus, reserve, private-dining options, visit (hours/address/map).
// Bellevue is populated from the actual export. Others use real content where
// available (live site / listings); fields needing confirmation are marked NEEDS-CONFIRM.
// Alki / West Seattle (closed April 2025) is intentionally absent.

export const ORDER_URL = 'https://order.online/business/dukes-seafood-22397';

export const LOCATIONS = {
  bellevue: {
    slug: 'bellevue',
    rid: '731956',
    name: 'Bellevue',
    title: "Duke's Seafood Bellevue — Downtown Bellevue Waterfront-Style Dining",
    metaDescription: "Duke's Seafood in downtown Bellevue at Lincoln Square South. Wild Pacific seafood, happy hour daily, private dining, and a full bar. Reserve a table.",
    heroHeadline: ['Pacific seafood, downtown ', 'Bellevue'],
    heroLede: 'Wild-caught, sustainably sourced, and served just off Lincoln Square — every day for lunch, dinner and happy hour.',
    heroPhoto: '/images/loc-bellevue.jpg',
    about: {
      heading: ['Family-owned, since ', '1977'],
      paras: [
        'Our Bellevue room sits on the second floor of Lincoln Square South — sweeping views, a long bar, and the same Pacific Northwest seafood Duke has been serving for forty-plus years.',
        'Walk-ins are always welcome at the bar. Reservations recommended in the dining room, especially Friday and Saturday.',
      ],
    },
    menuPhoto: '/images/lobster.jpg',
    events: {
      intro: [
        'Bellevue Duke\u2019s hosts corporate events, birthdays, anniversaries, reunions and large family dinners with views of downtown Bellevue, free parking, and the same seafood served downstairs.',
        'Semi-private dining is also available in the main dining room for larger parties.',
      ],
      aside: 'One private room, five ways to set it up — from sit-down dinners for sixteen to stand-up receptions for thirty-two.',
      options: [
        { opt: 'Option 01 — Reception', title: 'Stand-up reception', desc: 'Three cocktail tables, plus a table for appetizers and one for drinks or gifts.', cap: 'Up to 32 standing', photo: '/images/loc-bellevue.jpg' },
        { opt: 'Option 02 — Mixed', title: 'Seated & standing', desc: 'Seating for ten on the left, two cocktail tables in the middle, appetizer service on the right.', cap: 'Seats 10 · up to 30', photo: '/images/friends-cheers.jpg' },
        { opt: 'Option 03 — Seated dinner', title: 'Sit-down dining', desc: 'The full room set as a single seated dinner or lunch — perfect for plated service.', cap: 'Seats up to 28', photo: '/images/patio-spread.jpg' },
        { opt: 'Option 04 — Seated, with gift table', title: 'Celebration setup', desc: 'Seated dining with a gift table next to the window. Common for showers and milestone birthdays.', cap: 'Seats up to 20', photo: '/images/cocktails-tray.jpg' },
        { opt: 'Option 05 — Cocktails & dinner', title: 'Cocktail hour, then seated', desc: 'Open the room for a cocktail hour, then transition to a seated dinner. Optional gift table by the window.', cap: 'Seats up to 16', wide: true, photo: '/images/bar-beers.jpg' },
      ],
    },
    hours: [
      { day: 'Lunch · daily', time: '11:00am – 3:00pm' },
      { day: 'Happy hour · daily', time: '3:00 – 6:00pm · 9:00 – close' },
      { day: 'Dinner · Sun – Thu', time: '3:00 – 10:00pm' },
      { day: 'Dinner · Fri – Sat', time: '3:00 – 11:00pm' },
    ],
    addressLines: ['500 Bellevue Way NE, Suite 212', 'Lincoln Square South', 'Bellevue, WA 98004'],
    phone: '(425) 505-2247',
    phoneHref: '4255052247',
    metaLines: ['Free, validated parking · 3 hours, Lincoln Square garage', '3 minutes from Bellevue Downtown Light Rail'],
    mapsQuery: '500+Bellevue+Way+NE+Bellevue+WA+98004',
    // GBP-verified (Supermetrics GMB, 2026-06-10). street matches GBP verbatim for schema NAP consistency.
    nap: { street: '500 Bellevue Way Northeast Ste 212', city: 'Bellevue', state: 'WA', zip: '98004', geo: { lat: 47.6149075, lng: -122.2013098 } },
  },

  tacoma: {
    slug: 'tacoma',
    rid: '158536',
    name: 'Tacoma',
    title: "Duke's Seafood Tacoma — Waterfront Dining on Ruston Way",
    metaDescription: "Duke's Seafood Tacoma on Ruston Way, with waterfront views of Commencement Bay, Puget Sound, and Mt. Rainier. Wild seafood, award-winning chowder, free parking.",
    heroHeadline: ['Waterfront dining on ', 'Ruston Way'],
    heroLede: 'Views of Commencement Bay, Puget Sound, and Mount Rainier from the deck. A Tacoma tradition for more than twenty years.',
    heroPhoto: '/images/tacoma-hero.jpg',
    about: {
      heading: ['The best view on the ', 'Tacoma waterfront'],
      paras: [
        'Duke\u2019s Tacoma sits right on Ruston Way with the best waterfront view dining in Tacoma — an upscale-casual Pacific Northwest seafood restaurant serving 100% sustainable, all-natural seafood, grass-fed burgers, and award-winning chowders.',
        'Our outdoor dining deck and indoor dining room are made for group dining: birthday parties, business lunches, and romantic dinners. Walk-ins welcome at the bar.',
      ],
    },
    menuPhoto: '/images/salmon-salad.jpg',
    events: {
      intro: [
        'Duke\u2019s Tacoma hosts birthdays, business lunches, celebrations, and group dinners with waterfront views of Commencement Bay and free parking in our dedicated lot.',
        'Both our deck and dining room work for groups. Talk to us about the right setup for your party.',
      ],
      aside: 'Waterfront group dining on Ruston Way, indoors or out on the deck.',
      options: [
        { opt: 'Group dining', title: 'Waterfront deck', desc: 'Outdoor deck seating with views across Commencement Bay to Mount Rainier.', cap: 'Seasonal · weather permitting', photo: '/images/tacoma-wide.jpg' },
        { opt: 'Group dining', title: 'Dining room', desc: 'Indoor group seating for celebrations and business gatherings year-round.', cap: 'Groups welcome', photo: '/images/friends-cheers.jpg' },
      ],
      needsConfirm: true,
    },
    hours: [
      { day: 'Lunch · daily', time: '11:00am – 3:00pm' },
      { day: 'Happy hour · daily', time: '3:00 – 6:00pm · 9:00 – close' },
      { day: 'Dinner · Sun – Thu', time: '3:00 – 10:00pm' },
      { day: 'Dinner · Fri – Sat', time: '3:00 – 11:00pm' },
    ],
    addressLines: ['3327 Ruston Way', 'Tacoma, WA 98402'],
    phone: '(253) 752-5444',
    phoneHref: '2537525444',
    metaLines: ['Free parking in our dedicated lot · entrance on Ruston Way', 'Outdoor deck with views of Commencement Bay & Mt. Rainier'],
    mapsQuery: '3327+Ruston+Way+Tacoma+WA+98402',
    nap: { street: '3327 Ruston Way', city: 'Tacoma', state: 'WA', zip: '98402', geo: { lat: 47.2825834, lng: -122.4798449 } },
  },

  'lake-union': {
    slug: 'lake-union',
    rid: '158545',
    name: 'South Lake Union',
    title: "Duke's Seafood South Lake Union — Waterfront Dining on Lake Union, Seattle",
    metaDescription: "Duke's Seafood South Lake Union: waterfront dining on Lake Union in Seattle, with a \u201cBest in the Sound\u201d deck, award-winning chowder, and happy hour daily.",
    heroHeadline: ['Waterfront dining on ', 'Lake Union'],
    heroLede: 'Some of the best waterfront dining in Seattle, with a deck that won \u201cBest in the Sound\u201d for its views and sunshine.',
    heroPhoto: '/images/slu-interior.jpg',
    about: {
      heading: ['On the water in ', 'South Lake Union'],
      paras: [
        'Duke\u2019s South Lake Union offers waterfront dining and views over Lake Union and the marina. Our deck won \u201cBest in the Sound\u201d for a reason: killer views, ample sunshine, and a casual, no-fuss atmosphere.',
        'Join us indoors or out when the sun is shining. Happy hour runs 3\u20136pm and 9pm\u2013close, seven days a week.',
      ],
    },
    menuPhoto: '/images/patio-spread.jpg',
    events: {
      intro: [
        'Duke\u2019s South Lake Union has party facilities for private dining, added when the restaurant moved up the lake to its larger waterfront home in 2018.',
        'From business gatherings to celebrations, our team will help you set up the room.',
      ],
      aside: 'Private dining with Lake Union views, plus a larger bar since the 2018 move.',
      options: [
        { opt: 'Private dining', title: 'Party facilities', desc: 'A dedicated space for private events with views over Lake Union and the marina.', cap: 'Groups & celebrations', photo: '/images/fish-counter.jpg' },
        { opt: 'Group dining', title: 'Waterfront deck', desc: 'Award-winning deck seating for warm-weather group gatherings.', cap: 'Seasonal', photo: '/images/cocktails-tray.jpg' },
      ],
      needsConfirm: true,
    },
    hours: [
      { day: 'Lunch · daily', time: '11:00am – 3:00pm' },
      { day: 'Happy hour · daily', time: '3:00 – 6:00pm · 9:00 – close' },
      { day: 'Dinner · Sun – Thu', time: '3:00 – 10:00pm' },
      { day: 'Dinner · Fri – Sat', time: '3:00 – 11:00pm' },
    ],
    addressLines: ['1111 Fairview Ave N', 'Seattle, WA 98109'],
    phone: '(206) 382-9963',
    phoneHref: '2063829963',
    metaLines: ['Waterfront deck on Lake Union · \u201cBest in the Sound\u201d', '60 dedicated paid stalls in front · city parking on Fairview (free after 6pm & Sundays)'],
    mapsQuery: '1111+Fairview+Ave+N+Seattle+WA+98109',
    // GBP-verified address; GBP returned no coordinates for this location — geo pending (pull from Maps).
    nap: { street: '1111 Fairview Avenue North', city: 'Seattle', state: 'WA', zip: '98109', geo: null },
  },

  'green-lake': {
    slug: 'green-lake',
    rid: '158533',
    name: 'Green Lake',
    title: "Duke's Seafood Green Lake — A Seattle Neighborhood Favorite",
    metaDescription: "Duke's Seafood Green Lake: a warm Seattle neighborhood restaurant with a patio, a great bar, and the same wild seafood and award-winning chowder. Takeout & delivery.",
    heroHeadline: ['A Seattle neighborhood ', 'favorite'],
    heroLede: 'Warm and cozy through the cooler months, with views, a patio, and a great bar when the sun comes out.',
    heroPhoto: '/images/greenlake-hero.jpg',
    about: {
      heading: ['Your ', 'Green Lake'],
      paras: [
        'Duke\u2019s Green Lake is a true neighborhood restaurant — warm and cozy through fall and winter, with a patio and a great bar when the weather turns.',
        'Takeout and delivery serve Green Lake, Greenwood, Ravenna, Wallingford, Phinney Ridge, and the surrounding areas, including DoorDash.',
      ],
    },
    menuPhoto: '/images/chowder-hero.jpg',
    events: {
      intro: [
        'Duke\u2019s Green Lake welcomes groups and celebrations in a relaxed neighborhood setting.',
        'Reach out about group bookings and the best seating for your party.',
      ],
      aside: 'Neighborhood group dining with a patio for warm days.',
      options: [
        { opt: 'Group dining', title: 'Dining room & bar', desc: 'Relaxed group seating in a neighborhood room with one of the area\u2019s best bars.', cap: 'Groups welcome', photo: '/images/interior-lanterns.jpg' },
        { opt: 'Group dining', title: 'Patio', desc: 'Outdoor patio seating for warm-weather gatherings.', cap: 'Seasonal', photo: '/images/cocktails-tray.jpg' },
      ],
      needsConfirm: true,
    },
    hours: [
      { day: 'Lunch · daily', time: '11:00am – 3:00pm' },
      { day: 'Happy hour · daily', time: '3:00 – 6:00pm · 9:00 – close' },
      { day: 'Dinner · Sun – Thu', time: '3:00 – 10:00pm' },
      { day: 'Dinner · Fri – Sat', time: '3:00 – 11:00pm' },
    ],
    addressLines: ['7850 Green Lake Dr N', 'Seattle, WA 98103'],
    phone: '(206) 522-4908',
    phoneHref: '2065224908',
    metaLines: ['Patio seating · neighborhood bar', 'Takeout & DoorDash delivery across NE Seattle'],
    mapsQuery: '7850+Green+Lake+Dr+N+Seattle+WA+98103',
    nap: { street: '7850 Green Lake Drive North', city: 'Seattle', state: 'WA', zip: '98103-4862', geo: { lat: 47.6860909, lng: -122.3381994 } },
  },

  southcenter: {
    slug: 'southcenter',
    rid: '158530',
    name: 'Southcenter',
    title: "Duke's Seafood Southcenter — Westfield Southcenter, Tukwila",
    metaDescription: "Duke's Seafood Southcenter at Westfield Southcenter in Tukwila. Wild seafood, a big outdoor patio, full bar, and room for groups and celebrations.",
    heroHeadline: ['Seafood at ', 'Westfield Southcenter'],
    heroLede: 'In the south lot at Westfield Southcenter — lunch, dinner, and group dining with a big outdoor patio.',
    heroPhoto: '/images/southcenter-hero.jpg',
    about: {
      heading: ['Easy to reach, room to ', 'gather'],
      paras: [
        'Duke\u2019s Southcenter sits in the south parking lot at Westfield Southcenter. A great spot for lunch, dinner, and group dining, with a big outdoor patio, a full bar, and the same sustainable seafood you\u2019ll find at every Duke\u2019s.',
        'Plenty of parking and room for groups, shoppers, and celebrations.',
      ],
    },
    menuPhoto: '/images/salmon-salad.jpg',
    events: {
      intro: [
        'Duke\u2019s Southcenter has space for celebrations, business lunches, and group dinners, with a big patio for warm days.',
        'Talk to our team about booking the right setup for your group.',
      ],
      aside: 'Group dining with a big outdoor patio and ample mall parking.',
      options: [
        { opt: 'Group dining', title: 'Big outdoor patio', desc: 'A large patio for warm-weather group gatherings and celebrations.', cap: 'Seasonal', photo: '/images/southcenter-entrance.jpg' },
        { opt: 'Group dining', title: 'Dining room & bar', desc: 'Indoor seating and a full bar for year-round group dining.', cap: 'Groups welcome', photo: '/images/friends-cheers.jpg' },
      ],
      needsConfirm: true,
    },
    hours: [
      { day: 'Lunch · daily', time: '11:00am – 3:00pm' },
      { day: 'Happy hour · daily', time: '3:00 – 6:00pm · 9:00 – close' },
      { day: 'Dinner · Sun – Thu', time: '3:00 – 10:00pm' },
      { day: 'Dinner · Fri – Sat', time: '3:00 – 11:00pm' },
    ],
    addressLines: ['757 Southcenter Mall', 'Tukwila, WA 98188'],
    phone: '(206) 243-5200',
    phoneHref: '2062435200',
    metaLines: ['South lot at Westfield Southcenter · ample parking', 'Big outdoor patio · full bar'],
    mapsQuery: '757+Southcenter+Mall+Tukwila+WA+98188',
    nap: { street: '757 Southcenter Mall', city: 'Tukwila', state: 'WA', zip: '98188', geo: { lat: 47.4577792, lng: -122.2587734 } },
  },

  'kent-station': {
    slug: 'kent-station',
    rid: '158548',
    name: 'Kent Station',
    title: "Duke's Seafood Kent Station — A Kent Locals Favorite",
    metaDescription: "Duke's Seafood Kent Station: a locals favorite with one of Kent's best happy hours, a family-friendly dining room, and a patio. Takeout & delivery across the Kent Valley.",
    heroHeadline: ['A Kent Station ', 'locals favorite'],
    heroLede: 'One of Kent\u2019s best happy hours, a family-friendly dining room, and a great patio for warm days.',
    heroPhoto: '/images/kent-hero.jpg',
    about: {
      heading: ['Family-friendly, in ', 'Kent Station'],
      paras: [
        'Duke\u2019s Kent Station is a locals favorite, with one of Kent\u2019s best happy hours and a family-friendly dining room. Perfect for lunch or dinner, with a great outdoor patio for warm days.',
        'Takeout and delivery serve Kent and the Kent Valley, including DoorDash and online ordering.',
      ],
    },
    menuPhoto: '/images/lobster.jpg',
    events: {
      intro: [
        'Duke\u2019s Kent Station welcomes groups, families, and celebrations in a relaxed, family-friendly room.',
        'Ask us about group bookings and patio seating for your party.',
      ],
      aside: 'Family-friendly group dining with a patio and a top happy hour.',
      options: [
        { opt: 'Group dining', title: 'Dining room', desc: 'Family-friendly group seating with one of Kent\u2019s best happy hours at the bar.', cap: 'Groups & families', photo: '/images/kent-entrance.jpg' },
        { opt: 'Group dining', title: 'Patio', desc: 'Outdoor patio seating for warm-weather gatherings.', cap: 'Seasonal', photo: '/images/cocktails-tray.jpg' },
      ],
      needsConfirm: true,
    },
    hours: [
      { day: 'Lunch · daily', time: '11:00am – 3:00pm' },
      { day: 'Happy hour · daily', time: '3:00 – 6:00pm · 9:00 – close' },
      { day: 'Dinner · Sun – Thu', time: '3:00 – 10:00pm' },
      { day: 'Dinner · Fri – Sat', time: '3:00 – 11:00pm' },
    ],
    addressLines: ['240 W Kent Station St', 'Kent, WA 98032'],
    phone: '(253) 850-6333',
    phoneHref: '2538506333',
    metaLines: ['Kent Station · family-friendly', 'Takeout & DoorDash across the Kent Valley'],
    mapsQuery: '240+W+Kent+Station+St+Kent+WA+98032',
    nap: { street: '240 West Kent Station Street', city: 'Kent', state: 'WA', zip: '98032', geo: { lat: 47.3854223, lng: -122.2353512 } },
  },
};

export const LOCATION_SLUGS = Object.keys(LOCATIONS);
export const LOCATION_LIST = LOCATION_SLUGS.map((s) => LOCATIONS[s]);
export const getLocation = (slug) => LOCATIONS[slug];
