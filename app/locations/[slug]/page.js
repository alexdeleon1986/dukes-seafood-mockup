import { notFound } from 'next/navigation';
import Image from 'next/image';
import { LOCATIONS, LOCATION_SLUGS, LOCATION_LIST, getLocation, ORDER_URL } from '@/lib/locations';
import ReservationWidget from '@/components/ReservationWidget';

export function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return { title: loc.title, description: loc.metaDescription };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const siblings = LOCATION_LIST.filter((l) => l.slug !== loc.slug);

  // LocalBusiness / Restaurant JSON-LD for SEO parity
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: `Duke's Seafood ${loc.name}`,
    servesCuisine: 'Seafood',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.addressLines[0],
      addressLocality: loc.addressLines[loc.addressLines.length - 1].split(',')[0],
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    telephone: loc.phone,
    url: `https://dukesseafood.com/locations/${loc.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">{loc.heroHeadline[0]}<em>{loc.heroHeadline[1]}</em>.</h1>
            <p className="lede">{loc.heroLede}</p>
            <div className="hero-ctas">
              <a href="#reserve" className="btn btn-primary btn-lg">Reserve a table <span className="arrow">→</span></a>
              <a href="/menus" className="btn btn-ghost btn-lg">View menus</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <Image src={loc.heroPhoto} alt={`Duke's Seafood ${loc.name}`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="sec about">
        <div className="shell">
          <div>
            <h2 className="h-display">{loc.about.heading[0]}<em>{loc.about.heading[1]}</em>.</h2>
          </div>
          <div>
            {loc.about.paras.map((p, i) => <p key={i} style={{ marginBottom: 16 }}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="sec menus" id="menus">
        <div className="shell">
          <div className="photo imgfill" style={{ aspectRatio: '4/3' }}>
            <Image src={loc.menuPhoto} alt={`Food at Duke's ${loc.name}`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <div className="sec-head" style={{ marginBottom: 20 }}>
              <h2 className="h-display">Menus &amp; <em>specials</em>.</h2>
            </div>
            <p style={{ color: 'var(--ink-soft)', margin: '0 0 12px', maxWidth: '44ch' }}>
              Menus are kept current across all six locations.
            </p>
            <div className="menus-list">
              <a href="/menus/lunch-menu"><span className="name">Lunch &amp; Dinner</span><span className="arr">→</span></a>
              <a href="/menus/happy-hour-menu"><span className="name">Happy Hour · 3–6pm &amp; 9pm–close</span><span className="arr">→</span></a>
              <a href="/menus/drinks-menu"><span className="name">Drinks</span><span className="arr">→</span></a>
              <a href="/menus/dessert-menu"><span className="name">Dessert</span><span className="arr">→</span></a>
              <a href="/menus/kids-menu"><span className="name">Kids</span><span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section className="reserve" id="reserve">
        <div className="shell">
          <div>
            <h2 className="h-display">Reserve at <em>{loc.name}</em>.</h2>
            <p className="lede">Walk-ins always welcome at the bar — full menu and happy hour served there every day of the week.</p>
          </div>
          <ReservationWidget rid={loc.rid} name={loc.name} />
        </div>
      </section>

      {/* Private dining */}
      <section className="sec events" id="events">
        <div className="shell">
          <div className="sec-head">
            <h2 className="h-display">Private &amp; semi-private <em>dining</em>.</h2>
            <div className="head-aside">{loc.events.aside}</div>
          </div>
          <div className="events-intro">
            <p><strong>{loc.name} Duke&apos;s</strong> {loc.events.intro[0].replace(/^Duke\u2019s [^—]+ /, '')}</p>
            <p>{loc.events.intro[1]}</p>
          </div>
          <div className="events-list">
            {loc.events.options.map((o, i) => (
              <div className="event" key={i} style={o.wide ? { gridColumn: '1 / -1' } : undefined}>
                <div className="photo imgfill"><Image src={o.photo} alt={o.title} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></div>
                <div className="body">
                  <span className="opt">{o.opt}</span>
                  <h3 className="h-display">{o.title}</h3>
                  <p>{o.desc}</p>
                  <div className="cap">{o.cap}</div>
                </div>
              </div>
            ))}
          </div>
          {loc.events.needsConfirm && (
            <p style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brass-dark)' }}>
              Preview · private-dining options to be confirmed against this location
            </p>
          )}
        </div>
      </section>

      {/* Visit */}
      <section className="sec visit" id="visit">
        <div className="shell">
          <div className="col col-info">
            <h2 className="h-display" style={{ marginBottom: 24 }}>Visit <em>{loc.name}</em>.</h2>
            <div className="hours-block">
              {loc.hours.map((h, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  <div className="day">{h.day}</div>
                  <div className="time">{h.time}</div>
                </span>
              ))}
            </div>
            <p className="location-perk">
              <strong>Wine Down Monday:</strong> 50% off every bottle of wine, all day.
            </p>
            <div className="address-block">
              <p className="addr" dangerouslySetInnerHTML={{ __html: loc.addressLines.join('<br>') }} />
              <p className="meta">
                <a href={`tel:${loc.phoneHref}`}>{loc.phone}</a><br />
                {loc.metaLines.join(' · ')}
                {loc.needsConfirmAddress && <><br /><em style={{ color: 'var(--brass-dark)' }}>Address &amp; details to confirm against live site</em></>}
              </p>
            </div>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#reserve" className="btn btn-primary btn-sm">Reserve <span className="arrow">→</span></a>
              <a href={`https://maps.google.com/?q=${loc.mapsQuery}`} className="btn btn-ghost btn-sm">Get directions</a>
              <a href={ORDER_URL} className="btn btn-ghost btn-sm">Order online</a>
            </div>
          </div>
          <div className="col col-map">
            <div className="map-frame">
              <iframe
                title={`Map to Duke's Seafood ${loc.name}`}
                src={`https://www.google.com/maps?q=${loc.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="sec">
        <div className="shell">
          <div className="sec-head"><h2 className="h-display">Visit another <em>Duke&apos;s</em>.</h2></div>
          <div className="menus-list">
            {siblings.map((s) => (
              <a key={s.slug} href={`/locations/${s.slug}`}>
                <span className="name">{s.name}</span><span className="arr">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
