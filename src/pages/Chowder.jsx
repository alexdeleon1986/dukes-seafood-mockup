import { Link } from 'react-router-dom';

export default function Chowder() {
  return (
    <>
      <section className="page-hero" id="chowder">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <span className="eyebrow on-dark">Since 1989 · Duke's grandfather's recipe</span>
            <h1>The <em>chowder</em> that started it all</h1>
            <p className="page-hero-lede">
              Three-time champion of the Seattle Chowder Cook Off, made fresh every day at every location.
              The base is Duke's grandfather's New England recipe, and we've never had a reason to change it.
            </p>
            <div className="page-hero-cta">
              <a href="https://dukesseafood.com/frozen-chowders/" className="btn btn-primary">Ship frozen chowder</a>
              <Link to="/locations" className="btn btn-ghost on-dark">Find a location</Link>
            </div>
          </div>
          <div className="page-hero-image">
            <img src="/images/dukes-chowder.jpg" alt="Duke's award-winning clam chowder" />
            <span className="frame-tag">Award-winning clam chowder</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="chowder-inner">
          <div className="chowder-text">
            <span className="eyebrow">The recipe</span>
            <h2>From <em>New England</em>, by way of South Lake Union</h2>
            <p>The base of our clam chowder is Duke's grandfather's recipe, made in New England long before any of this was a restaurant. We've been pouring it since 1989, when the first Chowder House opened on South Lake Union.</p>
            <p>Six other chowder flavors have grown out of that original over the years. Crab. Smoked salmon. Lobster Mobster with Pernod. None of them displaced the original, and none of them ever will. Order the four-chowder sampler and decide for yourself.</p>
            <div className="award-strip">
              <div className="award"><strong>3× Champion</strong>Seattle Chowder Cook Off</div>
              <div className="award"><strong>Best Seafood</strong>425 Magazine, 2025</div>
              <div className="award"><strong>Best of</strong>South Sound, 2025</div>
            </div>
          </div>
          <div className="chowder-image">
            <img src="/images/chowder.jpg" alt="A bowl of Duke's chowder" />
          </div>
        </div>
      </section>

      {/* The flavors band */}
      <section className="loc-band">
        <div className="loc-band-grid">
          <div>
            <span className="eyebrow on-dark">The lineup</span>
            <h2>Seven chowders</h2>
            <ul className="dish-list">
              {[
                'Award-Winning Clam Chowder',
                'Lobster Mobster Pernod Chowder',
                'Dungeness Crab Chowder',
                'Smoked Salmon Chowder',
                'North by Northwest Seafood Chowder',
                'Ragin\u2019 Cajun Chicken & Corn Chowder',
                'Four-Chowder Sampler',
              ].map((c, i) => (
                <li key={i}><span className="num">{String(i + 1).padStart(2, '0')}</span>{c}</li>
              ))}
            </ul>
          </div>
          <div className="hours-card">
            <h3>Take it home</h3>
            <p style={{ color: 'rgba(242,235,223,0.82)', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '19px', lineHeight: 1.5, marginBottom: '24px' }}>
              We ship frozen chowder kits anywhere in the country, so a Duke's lunch is never out of reach.
            </p>
            <a href="https://dukesseafood.com/frozen-chowders/" className="btn btn-primary" style={{ width: 'max-content' }}>Order frozen chowder</a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <h2>Pull up a stool. The chowder's <em>hot</em>.</h2>
        <p>Six dining rooms across Western Washington. The chowder's made fresh at every one.</p>
        <div className="closing-buttons">
          <a href="https://dukesseafood.com/locations/" className="btn btn-dark">Reserve a table →</a>
          <Link to="/menus" className="btn btn-ghost">See the menus</Link>
        </div>
      </section>
    </>
  );
}
