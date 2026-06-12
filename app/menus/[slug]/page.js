import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMenu, getAllMenuSlugs, getMenuHub } from '@/lib/menus';

// Re-fetch the sheet at most once an hour in production. A menu edit goes live
// within this window with no redeploy. Lower for faster updates, raise to cut
// API calls.
export const revalidate = 3600;

// Per-menu hero image. Falls back to a general spread if a slug isn't mapped.
const MENU_IMAGES = {
  'lunch-menu': { src: '/images/menu-fish-and-chips.jpg', alt: "Duke's fish and chips with fries, slaw and dipping sauces" },
  'dinner-menu': { src: '/images/menu-table-spread.jpg', alt: "A table of Duke's Seafood seafood dinners" },
  'happy-hour-menu': { src: '/images/menu-chowder-breadbowl.jpg', alt: "Award-winning clam chowder in a sourdough bread bowl with a margarita" },
  'drinks-menu': { src: '/images/menu-bloody-mary.jpg', alt: "Duke's Bloody Mary with a grilled prawn and asparagus garnish" },
  'dessert-menu': { src: '/images/menu-dessert-pie.jpg', alt: "A slice of layered chocolate and espresso mud pie with whipped cream" },
  'kids-menu': { src: '/images/menu-kids-plate.jpg', alt: "Kids fish and chips plate with fries, slaw and dipping sauces" },
  'gluten-free-menu': { src: '/images/menu-steamer-clams.jpg', alt: "Steamer clams in a white wine and tomato broth with grilled bread" },
  'specials': { src: '/images/menu-spread.jpg', alt: "A spread of Duke's seasonal specials" },
};
const FALLBACK_IMAGE = { src: '/images/menu-table-spread.jpg', alt: "A table of Duke's Seafood dishes" };

export async function generateStaticParams() {
  const slugs = await getAllMenuSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const menu = await getMenu(slug);
  if (!menu) return {};
  return {
    title: `${menu.name} Menu \u2014 Duke's Seafood`,
    description: `${menu.name} at Duke's Seafood. ${menu.note}`.slice(0, 155),
    alternates: { canonical: `/menus/${slug}/` },
  };
}

// JSON-LD so menu updates also refresh the structured data Google and AI
// assistants read. Built from the same sheet data that renders the page.
function menuSchema(menu) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `${menu.name} Menu`,
    hasMenuSection: menu.groups.map((g) => ({
      '@type': 'MenuSection',
      name: g.title,
      hasMenuItem: g.items.map((it) => ({
        '@type': 'MenuItem',
        name: it.name,
        ...(it.desc ? { description: it.desc } : {}),
        ...(it.price && /\d/.test(it.price)
          ? { offers: { '@type': 'Offer', price: it.price.replace(/[^0-9.]/g, '') || undefined, priceCurrency: 'USD' } }
          : {}),
        ...(it.gf ? { suitableForDiet: 'https://schema.org/GlutenFreeDiet' } : {}),
      })),
    })),
  };
}

export default async function MenuPage({ params }) {
  const { slug } = await params;
  const menu = await getMenu(slug);
  if (!menu) notFound();

  const hub = await getMenuHub();
  const others = hub.filter((m) => m.slug !== slug);
  const img = MENU_IMAGES[slug] || FALLBACK_IMAGE;

  return (
    <div className="page-menu">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema(menu)) }}
      />
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">{menu.name} <em>menu</em></h1>
            <p className="lede">{menu.note}</p>
            <div className="hero-ctas">
              <a href="/locations/" className="btn btn-primary btn-lg">Reserve a table <span className="arrow">&rarr;</span></a>
              <a href="/menus/" className="btn btn-ghost btn-lg">All menus</a>
            </div>
            {others.length > 0 && (
              <nav className="menu-switch" aria-label="Other menus">
                <span className="menu-switch-label">More menus</span>
                {others.map((m) => (
                  <a key={m.slug} href={`/menus/${m.slug}/`}>{m.name}</a>
                ))}
              </nav>
            )}
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 880px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell menu-body">
          {menu.pending && (
            <p className="menu-pending">
              Preview layout. The full {menu.name.toLowerCase()} listing and current pricing will be populated from the live menu before launch.
            </p>
          )}
          {menu.groups.map((g, gi) => (
            <div key={gi} className="menu-group">
              <h2 className="h-display">{g.title}</h2>
              {g.items.map((it, ii) => (
                <div key={ii} className="menu-item">
                  <span className="menu-item-name">
                    {it.name}
                    {it.gf && (
                      <span className="menu-item-gf">
                        GF
                      </span>
                    )}
                  </span>
                  {it.price && <span className="menu-item-price">{it.price}</span>}
                  {it.desc && <p className="menu-item-desc">{it.desc}</p>}
                </div>
              ))}
            </div>
          ))}

          <nav className="menu-more" aria-label="Browse other menus">
            <span className="menu-more-label">Keep exploring</span>
            <div className="menu-more-links">
              {others.map((m) => (
                <a key={m.slug} href={`/menus/${m.slug}/`} className="menu-more-link">
                  <span>{m.name}</span><span className="arrow">&rarr;</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
