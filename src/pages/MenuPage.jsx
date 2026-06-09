import { useParams, Navigate, Link } from 'react-router-dom';
import { getMenu } from '../data/menus';

export default function MenuPage() {
  const { slug } = useParams();
  const menu = getMenu(slug);

  if (!menu) return <Navigate to="/menus" replace />;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <span className="eyebrow on-dark">Duke's Seafood · Menu</span>
            <h1>{menu.name}</h1>
            <p className="page-hero-lede">{menu.note}</p>
            <div className="page-hero-cta">
              <a href="https://dukesseafood.com/locations/" className="btn btn-primary">Reserve a table</a>
              <Link to="/menus" className="btn btn-ghost on-dark">All menus</Link>
            </div>
          </div>
          <div className="page-hero-image">
            <img src="/images/chowder.jpg" alt="Duke's Seafood" />
            <span className="frame-tag">Wild Pacific seafood</span>
          </div>
        </div>
      </section>

      <section className="loc-section">
        <div className="menu-detail">
          {menu.pending && (
            <div className="menu-note-banner">
              This is a preview layout. The full {menu.name.toLowerCase()} listing and current
              pricing will be populated from the live menu before launch.
            </div>
          )}
          {menu.groups.map((g, gi) => (
            <div className="menu-group" key={gi}>
              <h2>{g.title}</h2>
              {g.items.map((it, ii) => (
                <div className="menu-item" key={ii}>
                  <span className="mi-name">{it.name}</span>
                  {it.price && <span className="mi-price">{it.price}</span>}
                  {it.desc && <p className="mi-desc">{it.desc}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
