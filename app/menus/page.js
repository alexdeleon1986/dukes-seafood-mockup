import Image from 'next/image';
import { getMenuHub } from '@/lib/menus';

export const revalidate = 3600;

export const metadata = {
  title: "Menus \u2014 Duke's Seafood",
  description: "Lunch, dinner, happy hour, drinks, gluten-free, kids, and dessert menus at Duke's Seafood. Sustainable seafood, grass-fed beef, and award-winning chowder.",
  alternates: { canonical: '/menus/' },
};

export default async function MenusHub() {
  const hub = await getMenuHub();
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">Menus &amp; <em>specials</em></h1>
            <p className="lede">Sustainable seafood, grass-fed beef, organic chicken, and the freshest seasonal produce. Gluten-free and vegetarian options at every location.</p>
            <div className="hero-ctas">
              <a href="/locations" className="btn btn-primary btn-lg">Reserve a table <span className="arrow">&rarr;</span></a>
              <a href="https://order.online/business/dukes-seafood-22397" className="btn btn-ghost btn-lg">Order online</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <Image src="/images/patio-spread.jpg" alt="Sandwich, fish and chips, fries and a cocktail on a sunny Duke's patio table" fill sizes="(max-width: 880px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell">
          <div className="menus-list">
            {hub.map((m) => (
              <a key={m.slug} href={`/menus/${m.slug}`}>
                <span className="name">{m.name}</span><span className="arr">&rarr;</span>
              </a>
            ))}
          </div>
          <p style={{ marginTop: 24, color: 'var(--ink-soft)', maxWidth: '52ch' }}>
            Menus are kept current across all six locations. Tap any menu to view it.
          </p>
        </div>
      </section>
    </>
  );
}
