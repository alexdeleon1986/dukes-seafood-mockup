import { Link } from 'react-router-dom';
import { MENU_HUB } from '../data/menus';

export default function MenusHub() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <span className="eyebrow on-dark">Lunch · Dinner · Happy Hour</span>
            <h1>Our <em>menus</em></h1>
            <p className="page-hero-lede">
              Sustainable seafood, grass-fed beef, organic chicken, and the freshest seasonal produce,
              much of it from local farms. Gluten-free and vegetarian options at every location.
            </p>
          </div>
          <div className="page-hero-image">
            <img src="/images/dukes-chowder.jpg" alt="Duke's award-winning clam chowder" />
            <span className="frame-tag">Award-winning chowder</span>
          </div>
        </div>
      </section>

      <section className="loc-section">
        <div className="menu-hub-grid">
          {MENU_HUB.map((m, i) => (
            <Link to={`/menus/${m.slug}`} className="menu-card" key={m.slug}>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{m.name}</h3>
              <p>{m.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
