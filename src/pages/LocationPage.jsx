import { useParams, Link, Navigate } from 'react-router-dom';
import { LOCATIONS, getLocation, ORDER_URL } from '../data/locations';

export default function LocationPage() {
  const { slug } = useParams();
  const loc = getLocation(slug);

  if (!loc) return <Navigate to="/locations" replace />;

  const siblings = LOCATIONS.filter((l) => l.slug !== loc.slug);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <span className="eyebrow on-dark">{loc.neighborhood}</span>
            <h1>{loc.name}</h1>
            <p className="page-hero-lede">{loc.lede}</p>
            <div className="page-hero-cta">
              <a href={loc.reserveUrl} className="btn btn-primary">Reserve a table</a>
              <a href={ORDER_URL} className="btn btn-ghost on-dark">Order online</a>
            </div>
          </div>
          <div className="page-hero-image">
            <img src={loc.image} alt={`Duke's Seafood ${loc.name}`} />
            <span className="frame-tag">{loc.frameTag}</span>
          </div>
        </div>
      </section>

      {/* Meta bar: address, phone, reserve */}
      <div className="loc-meta-bar">
        <div className="loc-meta-inner">
          <div className="loc-meta-item">
            <span className="k">Address</span>
            <span className="v">{loc.address}, {loc.cityLine}</span>
          </div>
          <div className="loc-meta-item">
            <span className="k">Phone</span>
            <span className="v"><a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}>{loc.phone}</a></span>
          </div>
          <div className="loc-meta-spacer" />
          <div className="loc-meta-cta">
            <a href={loc.reserveUrl} className="btn btn-dark">Reserve</a>
            <a href={ORDER_URL} className="btn btn-ghost">Order online</a>
          </div>
        </div>
      </div>

      {/* Intro + features */}
      <section className="loc-section">
        <div className="loc-intro-grid">
          <div className="loc-intro-text">
            <span className="eyebrow">{loc.tagline}</span>
            <h2>{loc.fullName.replace("Duke's Seafood ", "")} <em>at a glance</em></h2>
            {loc.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="loc-features">
            {loc.features.map((f, i) => (
              <div className="loc-feature" key={i}>
                <div className="k">{f.label}</div>
                <div className="v">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature dishes + hours */}
      <section className="loc-band">
        <div className="loc-band-grid">
          <div>
            <span className="eyebrow on-dark">On the menu</span>
            <h2>House favorites</h2>
            <ul className="dish-list">
              {loc.signatureDishes.map((d, i) => (
                <li key={i}><span className="num">{String(i + 1).padStart(2, '0')}</span>{d}</li>
              ))}
            </ul>
          </div>
          <div className="hours-card">
            <h3>Hours</h3>
            {loc.hours.map((h, i) => (
              <div className="hours-row" key={i}>
                <span className="days">{h.days}</span>
                <span className="val">{h.value}</span>
              </div>
            ))}
            <div className="hours-note">Happy Hour 3–6pm &amp; 9pm–close daily</div>
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="sib-strip">
        <div className="sib-head">
          <span className="eyebrow">Six restaurants, one family</span>
          <h2>Visit another Duke's</h2>
        </div>
        <div className="sib-grid">
          {siblings.map((s) => (
            <Link to={`/locations/${s.slug}`} className="sib-card" key={s.slug}>
              <img src={s.image} alt={`Duke's ${s.name}`} />
              <span className="sib-label">{s.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
