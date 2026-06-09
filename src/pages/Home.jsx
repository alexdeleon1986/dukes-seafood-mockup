import { Link } from 'react-router-dom';
import { LOCATIONS, ORDER_URL } from '../data/locations';

const RESERVE_URL = 'https://dukesseafood.com/locations/';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src="/images/duke-hero.jpg" alt="Duke's Seafood waterfront dining" />
        </div>
        <div className="home-hero-scrim" />
        <div className="home-hero-inner">
          <span className="eyebrow on-dark">Family-owned since 1976</span>
          <h1>Wild Pacific seafood, the Duke's way</h1>
          <p className="home-hero-lede">
            Six restaurants across Western Washington. Sustainable seafood from small Alaska boats,
            grass-fed beef, and the award-winning chowder that started it all.
          </p>
          <div className="home-hero-cta">
            <a href={RESERVE_URL} className="btn btn-primary">Reserve a table</a>
            <Link to="/locations" className="btn btn-ghost on-dark">Find a location</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="home-section">
        <div className="home-intro-inner">
          <span className="eyebrow">Sustainable · All-natural · Local</span>
          <h2>Food worth <em>caring</em> about</h2>
          <p>
            All six Duke's locations serve tasty, sustainable seafood, grass-fed beef, and organic chicken,
            plus the freshest seasonal vegetables and fruit, much of it from local farms. We also offer
            gluten-free and vegetarian items.
          </p>
          <p>
            Our culinary director and co-owners Duke and John Moscrip take a hands-on approach to sourcing.
            We visit the farms, ride the fishing boats, and oversee processing whenever possible, to hold our
            standard for great taste and sustainability.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="home-section home-loc">
        <div className="home-loc-head">
          <div>
            <span className="eyebrow">Six restaurants, one family</span>
            <h2>Where to find us</h2>
          </div>
          <p>From the Tacoma waterfront to downtown Bellevue, each Duke's has its own view and its own regulars.</p>
        </div>
        <div className="home-loc-grid">
          {LOCATIONS.map((l) => (
            <Link to={`/locations/${l.slug}`} className="home-loc-card" key={l.slug}>
              <img src={l.image} alt={`Duke's ${l.name}`} />
              <div className="overlay">
                <span className="eyebrow">{l.neighborhood}</span>
                <h3>{l.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chowder feature */}
      <section className="home-section home-chowder">
        <div className="home-chowder-inner">
          <div className="home-chowder-img">
            <img src="/images/dukes-chowder.jpg" alt="Duke's award-winning clam chowder" />
          </div>
          <div className="home-chowder-text">
            <span className="eyebrow on-dark">The chowder that started it all</span>
            <h2>Award-winning <em>clam chowder</em></h2>
            <p>
              Duke's clam chowder has won more awards than we can fit on the wall. It's made fresh every day
              at every location, and it's the reason a lot of people first walk through our doors.
            </p>
            <p>
              Can't make it in? We ship our frozen chowders anywhere in the country.
            </p>
            <div className="home-chowder-cta">
              <Link to="/chowder" className="btn btn-primary">The chowder story</Link>
              <a href="https://dukesseafood.com/frozen-chowders/" className="btn btn-ghost on-dark">Ship frozen chowder</a>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve / Order split */}
      <section className="home-split">
        <div className="split-reserve">
          <span className="eyebrow">Dine with us</span>
          <h3>Reserve a table</h3>
          <p>Book a table at any of our six locations through OpenTable. Walk-ins always welcome at the bar.</p>
          <a href={RESERVE_URL} className="btn btn-dark">Reserve now</a>
        </div>
        <div className="split-order">
          <span className="eyebrow">Takeout & delivery</span>
          <h3>Order online</h3>
          <p>Get Duke's to go. Order online for pickup, or delivery through DoorDash in many neighborhoods.</p>
          <a href={ORDER_URL} className="btn btn-primary">Start an order</a>
        </div>
      </section>
    </>
  );
}
