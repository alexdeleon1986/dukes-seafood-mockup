import { notFound } from 'next/navigation';
import { getMenu, getAllMenuSlugs } from '@/lib/menus';

// Re-fetch the sheet at most once an hour in production. A menu edit goes live
// within this window with no redeploy. Lower for faster updates, raise to cut
// API calls.
export const revalidate = 3600;

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema(menu)) }}
      />
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">{menu.name} <em>menu</em>.</h1>
            <p className="lede">{menu.note}</p>
            <div className="hero-ctas">
              <a href="/locations" className="btn btn-primary btn-lg">Reserve a table <span className="arrow">&rarr;</span></a>
              <a href="/menus" className="btn btn-ghost btn-lg">All menus</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/chowder.jpg" alt="Duke's Seafood" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell" style={{ display: 'block', maxWidth: 920 }}>
          {menu.pending && (
            <p style={{ background: 'var(--cream-2)', border: '1px solid var(--line)', padding: '18px 22px', marginBottom: 40, fontSize: 14, color: 'var(--ink-soft)' }}>
              Preview layout. The full {menu.name.toLowerCase()} listing and current pricing will be populated from the live menu before launch.
            </p>
          )}
          {menu.groups.map((g, gi) => (
            <div key={gi} style={{ marginBottom: 48 }}>
              <h2 className="h-display" style={{ marginBottom: 20 }}>{g.title}</h2>
              {g.items.map((it, ii) => (
                <div key={ii} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '6px 24px', padding: '16px 0', borderBottom: '1px solid var(--line)', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)' }}>
                    {it.name}
                    {it.gf && (
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--brass-dark)', border: '1px solid var(--line)', borderRadius: 3, padding: '2px 5px', marginLeft: 10, verticalAlign: 'middle' }}>
                        GF
                      </span>
                    )}
                  </span>
                  {it.price && <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--brass-dark)', whiteSpace: 'nowrap' }}>{it.price}</span>}
                  {it.desc && <p style={{ gridColumn: '1 / -1', fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '64ch', margin: 0 }}>{it.desc}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
