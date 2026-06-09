import { Link } from 'react-router-dom';

const RESERVE_URL = 'https://dukesseafood.com/locations/';

export default function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" id="story">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <span className="eyebrow on-dark">Our Story · Family-owned since 1976</span>
            <h1>Fifty years on, the chowder hasn't changed and <em>neither have the boats</em>.</h1>
            <p className="page-hero-lede">
              Duke opened the first restaurant in 1976, two blocks from the Seattle Center, paying employees
              in cash out of cigar boxes. His son John runs the company now. The salmon still comes off the
              same Alaska boats. The chowder still uses Duke's grandfather's recipe.
            </p>
          </div>
          <div className="page-hero-image">
            <img src="/images/duke-hero.jpg" alt="Duke Moscrip" style={{ objectPosition: '75% center' }} />
            <span className="frame-tag">Duke Moscrip · Founder</span>
          </div>
        </div>
      </section>

      {/* Anchor rail */}
      <nav className="anchor-rail">
        <div className="anchor-inner">
          <a href="#beginnings">The Beginning</a><span className="sep">·</span>
          <a href="#sourcing">Why Alaska</a><span className="sep">·</span>
          <a href="#chowder">The Chowder</a><span className="sep">·</span>
          <a href="#family">The Family</a><span className="sep">·</span>
          <a href="#timeline">The Timeline</a><span className="sep">·</span>
          <a href="#foundation">Saving Salmon</a>
        </div>
      </nav>

      {/* Beginnings */}
      <section className="story-section" id="beginnings">
        <div className="opener">
          <div className="opener-image">
            <img src="/images/dukes-archival.jpeg" alt="Duke's Seafood, archival photo" />
            <p className="image-caption">Duke's, the early years.</p>
          </div>
          <div className="opener-text">
            <span className="eyebrow">The beginning · Queen Anne, 1976</span>
            <h2>Duke wanted somewhere <em>less formal</em>. So he opened it.</h2>
            <p>Duke Moscrip broke away from a partnership at Ray's Boathouse and opened the first Duke's Bar &amp; Grill on Queen Anne in 1976. Two blocks from the Seattle Center. Eclectic menu. Cigar boxes for a register because nobody had time to set up a real one yet.</p>
            <p>He wanted a hangout. The kind of place where the after-work crowd from the Lower Queen Anne ad agencies could sit at the bar without being made to feel like they were intruding on something fancy. Quality, but no fuss. That tension between casual and serious has run through every Duke's since.</p>
            <p className="kicker">"There were no paychecks. We didn't even have a cash register. We kept the money in cigar boxes. Really, cigar boxes."</p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="pull-quote">
        <div className="ornament">⌁ &nbsp; ⌁ &nbsp; ⌁</div>
        <blockquote>I personally guarantee that you'll enjoy your meal, or you don't pay.</blockquote>
        <div className="attribution">Duke Moscrip · Founder</div>
      </section>

      {/* Sourcing */}
      <section className="story-section sourcing" id="sourcing">
        <div className="sourcing-inner">
          <div className="sourcing-image">
            <img src="/images/duke-sourcing.jpg" alt="Duke Moscrip sourcing in Alaska" />
          </div>
          <div className="sourcing-text">
            <span className="eyebrow">The sourcing · Wild Alaska, since the nineties</span>
            <h2>The same boats. <em>For thirty years</em>.</h2>
            <p>For more than three decades, our wild salmon has come from the same small, family-run Alaska fishing operations. Many of them are on their second or third generation. Duke knows the captains by name and visits the docks himself.</p>
            <p>Alaska is the only US state with sustainability written directly into its constitution. Article VIII has required all fisheries to be managed on a sustained-yield basis since statehood in 1959. That's the law our suppliers fish under, and it's why Alaska salmon is what we serve when we say "wild."</p>
            <p>Once it's caught, the fish is processed and flash-frozen within hours. The result tastes better than what most restaurants call "fresh," which is to say "shipped on ice for a week." We've run the taste tests. The ribbon goes to the flash-frozen fish every time.</p>
            <div className="sourcing-stats">
              <div><div className="stat-num">30+</div><div className="stat-label">Years sourcing<br />from Alaska</div></div>
              <div><div className="stat-num">100%</div><div className="stat-label">Wild &amp; sustainably<br />caught seafood</div></div>
              <div><div className="stat-num">1959</div><div className="stat-label">Year sustainability<br />entered AK law</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Chowder */}
      <section className="story-section" id="chowder">
        <div className="chowder-inner">
          <div className="chowder-text">
            <span className="eyebrow">The chowder · Duke's grandfather's recipe</span>
            <h2>The recipe came from <em>New England</em>. We just kept making it.</h2>
            <p>The base of our clam chowder is Duke's grandfather's recipe, made in New England long before any of this was a restaurant. We've been pouring it since 1989, when the first Chowder House opened on South Lake Union, and we've never had a reason to change it.</p>
            <p>It won the Seattle Chowder Cook Off three years running and has picked up best-of awards from 425 Magazine and South Sound Magazine more times than we keep track of. It's also the reason we ship frozen kits across the country.</p>
            <p>Six other chowder flavors have come from that original recipe over the years. Crab. Smoked salmon. Lobster. None of them displaced the original. None of them ever will.</p>
            <div className="award-strip">
              <div className="award"><strong>3× Champion</strong>Seattle Chowder Cook Off</div>
              <div className="award"><strong>Best Seafood</strong>425 Magazine, 2025</div>
              <div className="award"><strong>Best of</strong>South Sound, 2025</div>
            </div>
          </div>
          <div className="chowder-image">
            <img src="/images/dukes-chowder.jpg" alt="Duke's Seafood clam chowder" />
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="story-section family" id="family">
        <div className="family-head">
          <span className="eyebrow">The family · Three generations in</span>
          <h2>A <em>Moscrip</em> still runs every dining room.</h2>
          <p>Duke founded the company. His son John runs it now. The chef who plates your fish has been with us long enough to remember when Duke himself worked the Queen Anne floor. The thread doesn't break.</p>
        </div>
        <div className="people-grid">
          <article className="person">
            <div className="person-image"><img src="/images/duke-portrait.jpg" alt="Duke Moscrip" style={{ objectPosition: 'center top' }} /></div>
            <div className="person-body">
              <h3>Duke Moscrip</h3>
              <div className="role">Founder</div>
              <p>Opened the original Duke's on Queen Anne in 1976. Still flies to Alaska to vet the boats, still runs taste tests in the kitchen, still writes most of the company's blog posts himself.</p>
            </div>
          </article>
          <article className="person">
            <div className="person-image"><img src="/images/john-and-duke.jpg" alt="John Moscrip" style={{ objectPosition: '85% center' }} /></div>
            <div className="person-body">
              <h3>John Moscrip</h3>
              <div className="role">President · Duke's Son</div>
              <p>Took over running the company. Day-to-day operations, sourcing relationships, the foundation work. Wrote the announcement of the Saving Salmon Foundation in 2025.</p>
            </div>
          </article>
          <article className="person">
            <div className="person-image"><img src="/images/alan-caraco.jpg" alt="Alan Caraco, Executive Chef" /></div>
            <div className="person-body">
              <h3>Alan Caraco</h3>
              <div className="role">Executive Chef</div>
              <p>Runs the kitchens across all six restaurants. Develops the seasonal menu alongside Chef Bill's specials. Believes a deviled egg without crab on top is a missed opportunity.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Timeline */}
      <section className="story-section" id="timeline">
        <div className="timeline-inner">
          <div className="timeline-head">
            <div>
              <span className="eyebrow">The timeline</span>
              <h2>Fifty years, give or take.</h2>
            </div>
            <p>From a Queen Anne bar with cigar-box accounting to six dining rooms across Western Washington, a foundation, and a frozen-chowder business that ships nationwide. Most of the milestones below were unintentional.</p>
          </div>
          <div className="timeline">
            {[
              ['1976', "Duke's Bar & Grill opens on Queen Anne.", 'Two blocks from the Seattle Center. Chalkboard menu, eclectic food, cigar boxes for a register. Duke pays employees in cash every night.'],
              ['1978', "Duke's Bellevue follows.", 'The success of Queen Anne pulls a second location across the lake.'],
              ['1989', 'The first Chowder House opens on South Lake Union.', "The grandfather's chowder recipe goes on the menu and stays on the menu. The \u201cChowder House\u201d concept becomes the company's center of gravity."],
              ['1990', "Duke's Green Lake opens.", 'Right on the lake. Seaplanes overhead. Most of the year, the deck is open.'],
              ['~1995', 'The Alaska sourcing relationships begin.', 'Duke starts buying directly from small, family-run Alaska boats. Many of those relationships are still intact thirty years later.'],
              ['2018', 'South Lake Union moves up the lake.', 'The Chowder House relocates to a larger waterfront spot with the same view, a bigger bar, and party facilities for private dining.'],
              ['2019', 'Tacoma Waterfront opens on Ruston Way.', 'The water at your shoulder, Mount Rainier in the window.'],
              ['2022', 'Kent Station and Westfield Southcenter open.', "Duke's expands into Kent Station and Southcenter. Six dining rooms, all running on the same playbook."],
              ['2025', 'The Dukes Damsel on a Train Foundation launches.', "Duke's, Damsel Cellars, and the band Train start a foundation to fund habitat restoration for wild Pacific salmon."],
            ].map(([year, title, body]) => (
              <div className="t-row" key={year}>
                <div className="t-year">{year}</div>
                <div className="t-body">
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="foundation" id="foundation">
        <div className="foundation-grid">
          <div className="foundation-image">
            <img src="/images/foundation-logo.jpg" alt="Dukes Damsel on a Train Foundation" />
          </div>
          <div className="foundation-text">
            <span className="eyebrow on-dark">Dukes Damsel on a Train Foundation</span>
            <h2>We've served wild salmon for fifty years. We'd like to <em>serve it for fifty more</em>.</h2>
            <p>Wild Pacific salmon are running out of the clean, cold water they need to spawn in. In 2025 we partnered with Damsel Cellars and the band Train to start a foundation that funds habitat restoration across the rivers our fish come home to.</p>
            <p>If we serve it for a living, we have a stake in keeping it alive.</p>
            <div className="partners">
              <strong>In partnership with</strong>
              Damsel Cellars · Train
            </div>
            <a href="https://dukesseafood.com/blog/dukes-partners-with-damsel-cellars-and-train-to-launch-foundation-to-save-wild-salmon/" className="btn btn-primary" style={{ marginTop: '32px', width: 'max-content' }}>Read the story →</a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <h2>Pull up a stool. The chowder's <em>hot</em>.</h2>
        <p>Six dining rooms across Western Washington. Same family, same recipes, same fishermen we started with.</p>
        <div className="closing-buttons">
          <a href={RESERVE_URL} className="btn btn-dark">Reserve a table →</a>
          <Link to="/locations" className="btn btn-ghost">Find a location</Link>
        </div>
      </section>
    </>
  );
}
