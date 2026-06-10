// Reads menu content from a Google Sheet so the office can update menus
// without touching code. Mirrors the service-account pattern used for the
// Tripleseat -> Sheets pipeline.
//
// One tab per menu. Tab name is the menu slug (e.g. "dinner-menu").
// Row 1 is a header row. Expected columns (header names, any order):
//   section | item | description | price | gf | active | sort
//
// - section: the group heading the item sits under (e.g. "Champion Chowder")
// - item: dish name
// - description: dish description (optional)
// - price: free text ("$24.90", "Market", "Cup / Bowl", "1490 | 1890 | 52")
// - gf: TRUE/FALSE/x/yes -> marks the item gluten free
// - active: FALSE hides the row without deleting it (blank = active)
// - sort: optional number to order items within a section
//
// A "_menus" tab drives the hub list and per-menu intro text:
//   slug | name | blurb | note | hidden
//
// Env vars (set in Vercel, same service account as the dashboard):
//   GOOGLE_SERVICE_ACCOUNT_EMAIL
//   GOOGLE_PRIVATE_KEY            (with literal \n escaped, unescaped below)
//   MENU_SHEET_ID                 (the spreadsheet ID)

const SHEET_ID = process.env.MENU_SHEET_ID;
const SA_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const SA_KEY = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

const SHEETS_BASE = 'https://sheets.googleapis.com/v4/spreadsheets';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

// --- service-account JWT -> access token (no googleapis dep, uses Web Crypto) ---

function b64url(input) {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : new Uint8Array(input);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function pemToArrayBuffer(pem) {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s+/g, '');
  const bin = atob(body);
  const buf = new ArrayBuffer(bin.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < bin.length; i++) view[i] = bin.charCodeAt(i);
  return buf;
}

let cachedToken = null; // { token, exp }

async function getAccessToken() {
  if (cachedToken && cachedToken.exp - 60 > Math.floor(Date.now() / 1000)) {
    return cachedToken.token;
  }
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: SA_EMAIL,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(claim))}`;
  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(SA_KEY),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(unsigned)
  );
  const jwt = `${unsigned}.${b64url(sig)}`;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${await res.text()}`);
  const json = await res.json();
  cachedToken = { token: json.access_token, exp: now + (json.expires_in || 3600) };
  return cachedToken.token;
}

// --- sheet reads ---

async function getValues(range, token) {
  const url = `${SHEETS_BASE}/${SHEET_ID}/values/${encodeURIComponent(range)}?majorDimension=ROWS`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (res.status === 400) return null; // tab missing
  if (!res.ok) throw new Error(`sheet ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.values || [];
}

async function listTabs(token) {
  const url = `${SHEETS_BASE}/${SHEET_ID}?fields=sheets.properties.title`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error(`meta ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return (json.sheets || []).map((s) => s.properties.title);
}

// --- parsing ---

const truthy = (v) => /^(true|x|yes|y|1|gf)$/i.test(String(v || '').trim());

function headerIndex(headerRow) {
  const idx = {};
  headerRow.forEach((h, i) => {
    idx[String(h || '').trim().toLowerCase()] = i;
  });
  return idx;
}

function rowsToGroups(rows) {
  if (!rows || rows.length < 2) return [];
  const idx = headerIndex(rows[0]);
  const col = (name) => idx[name];
  const get = (row, name) => {
    const i = col(name);
    return i == null ? '' : String(row[i] ?? '').trim();
  };

  const groupOrder = [];
  const groupMap = new Map();

  rows.slice(1).forEach((row) => {
    if (!row || row.every((c) => String(c || '').trim() === '')) return;
    const active = get(row, 'active');
    if (active !== '' && !truthy(active)) return; // explicitly inactive

    const section = get(row, 'section') || 'Menu';
    const name = get(row, 'item');
    if (!name) return;

    if (!groupMap.has(section)) {
      groupMap.set(section, []);
      groupOrder.push(section);
    }
    groupMap.get(section).push({
      name,
      price: get(row, 'price'),
      desc: get(row, 'description') || get(row, 'desc'),
      gf: truthy(get(row, 'gf')),
      sort: Number(get(row, 'sort')) || 0,
    });
  });

  return groupOrder.map((title) => ({
    title,
    items: groupMap
      .get(title)
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...rest }) => rest),
  }));
}

// --- public API ---

export function sheetConfigured() {
  return Boolean(SHEET_ID && SA_EMAIL && SA_KEY);
}

// Returns { hub: [...], menus: { slug: {...} } } from the sheet, or null on
// any failure so callers can fall back to the static file.
export async function fetchMenusFromSheet() {
  if (!sheetConfigured()) return null;
  try {
    const token = await getAccessToken();

    // Hub / metadata tab
    const metaRows = await getValues('_menus!A:E', token);
    const metaBySlug = {};
    let hub = [];
    if (metaRows && metaRows.length > 1) {
      const idx = headerIndex(metaRows[0]);
      const g = (row, n) => (idx[n] == null ? '' : String(row[idx[n]] ?? '').trim());
      metaRows.slice(1).forEach((row) => {
        const slug = g(row, 'slug');
        if (!slug) return;
        const hidden = truthy(g(row, 'hidden'));
        const entry = { slug, name: g(row, 'name') || slug, blurb: g(row, 'blurb'), note: g(row, 'note') };
        metaBySlug[slug] = entry;
        if (!hidden) hub.push({ slug, name: entry.name, blurb: entry.blurb });
      });
    }

    // Each menu tab = its slug
    const tabs = await listTabs(token);
    const menuSlugs = tabs.filter((t) => t && t !== '_menus' && !t.startsWith('#'));

    const menus = {};
    for (const slug of menuSlugs) {
      const rows = await getValues(`${slug}!A:Z`, token);
      const groups = rowsToGroups(rows);
      if (!groups.length) continue;
      const meta = metaBySlug[slug] || {};
      menus[slug] = {
        name: meta.name || slug,
        note: meta.note || '',
        groups,
      };
    }

    if (!Object.keys(menus).length) return null;
    if (!hub.length) {
      hub = Object.keys(menus).map((slug) => ({
        slug,
        name: menus[slug].name,
        blurb: metaBySlug[slug]?.blurb || '',
      }));
    }
    return { hub, menus };
  } catch (err) {
    console.error('[menuSheet] falling back to static menus:', err.message);
    return null;
  }
}
