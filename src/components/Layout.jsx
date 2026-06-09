import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const ORDER_URL = 'https://order.online/business/dukes-seafood-22397';
const RESERVE_URL = 'https://dukesseafood.com/locations/';
const DOCKSIDE_URL = 'https://docksideatdukes.com/';

const NAV_LEFT = [
  { to: '/menus', label: 'Menus' },
  { to: '/locations', label: 'Locations' },
  { to: DOCKSIDE_URL, label: 'Private Dining', external: true },
];
const NAV_RIGHT = [
  { to: '/chowder', label: 'Chowder' },
  { to: '/our-story', label: 'Our Story' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu and scroll to top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Toggle body class so the existing CSS overlay/hamburger animation works
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const renderLink = (item, className) =>
    item.external ? (
      <a key={item.label} href={item.to} className={className}>{item.label}</a>
    ) : (
      <NavLink key={item.label} to={item.to} className={className}>{item.label}</NavLink>
    );

  return (
    <>
      <header className="site">
        <div className="header-rail">
          <span className="rail-brand">
            Family-owned <span className="dot">·</span> Sourced from Alaska <span className="dot">·</span> Pacific Northwest
          </span>
          <span className="rail-links">
            <a href={ORDER_URL}>Order online</a>
            <a href={RESERVE_URL}>Reservations</a>
          </span>
        </div>

        <nav className="nav">
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>

          <div className="nav-left">
            {NAV_LEFT.map((i) => renderLink(i, 'nav-hide-mobile'))}
          </div>

          <Link to="/" className="logo">
            Duke's
            <small>WILD PACIFIC SEAFOOD · SINCE 1976</small>
          </Link>

          <div className="nav-right">
            {NAV_RIGHT.map((i) => renderLink(i, 'nav-hide-mobile'))}
            <a href={RESERVE_URL} className="reserve">Reserve</a>
          </div>
        </nav>

        {/* Mobile overlay */}
        <div
          className="mobile-menu"
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
        >
          <div className="mobile-menu-inner">
            <button className="mobile-menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
            <Link to="/menus">Menus</Link>
            <Link to="/locations">Locations</Link>
            <a href={DOCKSIDE_URL}>Private Dining</a>
            <Link to="/chowder">Chowder</Link>
            <Link to="/our-story">Our Story</Link>
            <a href={RESERVE_URL} className="mobile-menu-cta">Reserve a table →</a>
            <div className="mobile-menu-rail">
              <a href={ORDER_URL}>Order online</a>
              <span className="dot">·</span>
              <a href={RESERVE_URL}>Reservations</a>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="footer-grid">
          <div className="footer-mark">
            <div className="logo-text">Duke's</div>
            <small>PACIFIC NORTHWEST · SINCE 1976</small>
            <p>Six restaurants across Western Washington. Wild seafood from small Alaska boats. Family-owned by the Moscrips since 1976.</p>
          </div>
          <div className="footer-col">
            <h5>Menus</h5>
            <Link to="/menus/lunch-menu">Lunch &amp; Dinner</Link>
            <Link to="/menus/happy-hour-menu">Happy Hour</Link>
            <Link to="/menus/drinks-menu">Drinks</Link>
            <Link to="/menus/dessert-menu">Dessert</Link>
            <Link to="/menus/kids-menu">Kids</Link>
          </div>
          <div className="footer-col">
            <h5>Locations</h5>
            <Link to="/locations/bellevue">Bellevue</Link>
            <Link to="/locations/lake-union">South Lake Union</Link>
            <Link to="/locations/green-lake">Green Lake</Link>
            <Link to="/locations/tacoma">Tacoma Waterfront</Link>
            <Link to="/locations/southcenter">Southcenter</Link>
            <Link to="/locations/kent-station">Kent Station</Link>
          </div>
          <div className="footer-col">
            <h5>Duke's</h5>
            <a href="https://dukesseafood.com/gift-cards/">Gift cards</a>
            <a href="https://dukesseafood.com/frozen-chowders/">Frozen chowders</a>
            <a href="https://dukesseafood.com/dukes-vip">Free dinners (VIP)</a>
            <a href="https://dukesseafood.com/recipes/">Recipes</a>
            <a href="https://dukesseafood.com/blog">Blog</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Duke's Seafood Restaurants · Family-owned</span>
          <span>Made with care in the Pacific Northwest</span>
        </div>
      </footer>
    </>
  );
}
