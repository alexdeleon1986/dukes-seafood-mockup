import { Link } from 'react-router-dom';
import { LOCATIONS } from '../data/locations';

export default function LocationsIndex() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <span className="eyebrow on-dark">Six restaurants · Western Washington</span>
            <h1>Our <em>locations</em></h1>
            <p className="page-hero-lede">
              From the Tacoma waterfront to downtown Bellevue, six Duke's restaurants serve
              wild Pacific seafood, grass-fed burgers, and award-winning chowder. Every one is family-owned and run.
            </p>
          </div>
          <div className="page-hero-image">
            <img src="/images/loc-tacoma.jpg" alt="Duke's Seafood on the Tacoma waterfront" />
            <span className="frame-tag">Ruston Way, Tacoma</span>
          </div>
        </div>
      </section>

      <section className="loc-section">
        <div className="locidx-grid">
          {LOCATIONS.map((l) => (
            <Link to={`/locations/${l.slug}`} className="locidx-card" key={l.slug}>
              <div className="locidx-img"><img src={l.image} alt={`Duke's ${l.name}`} /></div>
              <div className="locidx-body">
                <span className="eyebrow">{l.neighborhood}</span>
                <h3>{l.name}</h3>
                <p>{l.tagline}.</p>
                <span className="addr">{l.address} · {l.cityLine}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
