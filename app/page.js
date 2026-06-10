import NewsletterForm from '@/components/NewsletterForm';
import ReservationWidget from '@/components/ReservationWidget';
import { LOCATION_LIST } from '@/lib/locations';

export const metadata = {
  title: "Duke's Seafood — Wild Pacific Seafood Since 1976",
  description: "Six family-owned Duke's Seafood restaurants across Western Washington. Wild Alaska salmon, sustainable Pacific seafood, and award-winning chowder since 1976.",
};

const RESERVE_ORDER = ['lake-union','bellevue','green-lake','tacoma','southcenter','kent-station'];
const RESERVE_LOCATIONS = RESERVE_ORDER
  .map((slug) => LOCATION_LIST.find((l) => l.slug === slug))
  .filter(Boolean)
  .map((l) => ({ slug: l.slug, name: l.name, rid: l.rid }));

export default function Home() {
  return (
    <>
      <section className="hero-video">

        <div className="hero-video-embed" aria-hidden="true">
          <iframe src="https://player.vimeo.com/video/1073729759?background=1&autoplay=1&loop=1&muted=1&autopause=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Duke's hero"></iframe>
        </div>
        <div className="hero-video-fallback" aria-hidden="true"></div>
        <div className="scrim"></div>

        <div className="hv-content">
          <div className="hv-mid">
            <div className="hv-top">
              <span>Pacific Northwest · Family-Owned Since 1976</span>
              <span>Wild Alaska Salmon · Sustainably Sourced</span>
            </div>
            <h1 className="h-display">Pacific Northwest seafood, <em>family-run since 1976</em>.</h1>
            <p className="lede">We buy directly from small Alaska boats Duke has known for thirty years and pull oysters and Dungeness crab from up and down the Sound. Family-owned since 1976, six dining rooms in Western Washington, and the chowder is the same award-winning recipe we've had since we opened.</p>
            <div className="ctas">
              <a href="#reserve" className="btn btn-primary btn-lg">Reserve a table <span className="arrow">→</span></a>
              <a href="#locations" className="btn btn-lg">Find a location</a>
            </div>
          </div>

          <div className="hv-bottom">
            <a href="#story" className="scroll-cue"><span className="line"></span> Scroll to see more</a>
            <div className="hv-controls" aria-label="Video controls">
              <button title="Sound">🔊</button>
              <button title="Pause">❚❚</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec about" id="story">
        <div className="shell">
          <div className="about-lead">
            <h2 className="h-display">Seattle&apos;s been eating here <em>since 1976</em>.</h2>
          </div>
          <div>
            <p>Duke opened the first Duke&apos;s in 1976, two blocks from the Seattle Center, paying employees in cash out of cigar boxes. Nearly fifty years later his son John runs the company, the chowder recipe still comes from Duke&apos;s grandfather, and the same family sits at the same tables.</p>
            <p>We buy from small Alaska boats Duke has known for thirty years, pull oysters and Dungeness crab from up and down the Sound, and pour the same award-winning chowder we opened with. Six restaurants, one family, recipes we won&apos;t change and sourcing we won&apos;t compromise.</p>
            <div style={{marginTop: '24px'}}>
              <a href="/our-story" className="btn btn-ghost btn-sm">Read our history <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec hh-band" id="happy-hour">
        <div className="shell">
          <div className="feature-row flip">
            <div className="photo">
              <span className="imgfill"><img src="/images/patio-spread.jpg" alt="A spread of Duke's food and a cocktail on a sunny patio table" /></span>
            </div>
            <div>
              <p className="eyebrow">Happy Hour</p>
              <h2 className="h-display">Twice a day. <em>The full menu</em>, not just drinks.</h2>
              <p>Most happy hours hand you a watered-down well drink and a sad basket of fries. Ours runs 3&ndash;6pm and again 9pm to close, seven days a week, in the dining room, the bar, and out on the deck. Same wild seafood, same grass-fed burgers, same award-winning chowder, at happy hour prices. Full portions. We never shrink the plate.</p>
              <div className="actions">
                <a href="/menus/happy-hour-menu" className="btn btn-primary">See the happy hour menu <span className="arrow">→</span></a>
                <a href="/locations" className="btn btn-ghost">Find a table</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="locations">
        <div className="shell">
          <div className="sec-head">
            <h2 className="h-display">One menu. <em>Six</em> dining rooms.</h2>
            <div className="head-aside">From South Lake Union to Tacoma's Ruston Way, every Duke's is run by the Moscrip family and pours from the same wine list. Pick the view that suits the night.</div>
          </div>

          <div className="locations-grid">
            <a href="/locations/lake-union" className="location-card">
              <div className="photo"><span className="imgfill"><img src="/images/slu-interior.jpg" alt="South Lake Union" /></span></div>
              <div className="city">South Lake Union</div>
              <div className="meta"><strong>The original Chowder House.</strong> Big bar, lake views, the patio that started it all. Opened 1989.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/bellevue" className="location-card">
              <div className="photo"><span className="imgfill"><img src="/images/loc-bellevue.jpg" alt="Bellevue" /></span></div>
              <div className="city">Bellevue</div>
              <div className="meta"><strong>Lincoln Square South.</strong> Second-floor dining room, downtown views.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/green-lake" className="location-card">
              <div className="photo"><span className="imgfill"><img src="/images/greenlake-hero.jpg" alt="Green Lake" /></span></div>
              <div className="city">Green Lake</div>
              <div className="meta"><strong>Right on the lake.</strong> Seaplanes overhead, the deck open most of the year.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/tacoma" className="location-card">
              <div className="photo"><span className="imgfill"><img src="/images/tacoma-hero.jpg" alt="Tacoma" /></span></div>
              <div className="city">Tacoma Waterfront</div>
              <div className="meta"><strong>Ruston Way.</strong> The water at your shoulder, Mount Rainier in the window.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/southcenter" className="location-card">
              <div className="photo"><span className="imgfill"><img src="/images/southcenter-hero.jpg" alt="Southcenter" /></span></div>
              <div className="city">Southcenter</div>
              <div className="meta"><strong>Westfield Southcenter.</strong> Full menu, full bar, easy from anywhere south of Seattle.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/kent-station" className="location-card">
              <div className="photo"><span className="imgfill"><img src="/images/kent-hero.jpg" alt="Kent Station" /></span></div>
              <div className="city">Kent Station</div>
              <div className="meta"><strong>Open daily.</strong> Family-friendly, easy parking, in the heart of Kent Station.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="sec" id="chowder">
        <div className="shell">
          <div className="feature-row">
            <div className="photo">
              <span className="imgfill"><img src="/images/chowder-hero.jpg" alt="Duke's award-winning clam chowder in a bread bowl" /></span>
            </div>
            <div>
              <p className="eyebrow">The Chowder</p>
              <h2 className="h-display">Duke's <em>grandfather's</em> recipe. Three Cook Off wins.</h2>
              <p>The base of our award-winning clam chowder came from Duke's grandfather in New England and has been simmering in our kitchens since the first Chowder House opened in 1989. It took home the Seattle Chowder Cook Off three years in a row, and we now ship frozen kits anywhere in the country so you can have it without driving to one of our restaurants.</p>
              <div className="actions">
                <a href="/frozen-chowders" className="btn btn-primary">Ship a chowder kit <span className="arrow">→</span></a>
                <a href="/menus" className="btn btn-ghost">Order in restaurant</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reserve" id="reserve">
        <div className="shell">
          <div>
            <h2 className="h-display">Reserve at <em>any</em> of the six.</h2>
            <p className="lede">Pick a date, time, and dining room. We'll hand you off to OpenTable to confirm. Walk-ins always welcome at the bar.</p>
          </div>
          <ReservationWidget locations={RESERVE_LOCATIONS} />
        </div>
      </section>

      <section className="sec">
        <div className="shell">
          <div className="feature-row flip">
            <div className="photo">
              <span className="imgfill"><img src="/images/damsel-on-a-train.webp" alt="river / salmon / habitat" /></span>
            </div>
            <div>
              <p className="eyebrow">Dukes Damsel on a Train Foundation</p>
              <h2 className="h-display">We've served wild salmon for fifty years. We'd like to serve it for <em>fifty more</em>.</h2>
              <p>Wild Pacific salmon are running out of clean, cold water to spawn in. We started the Dukes Damsel on a Train Foundation with our partners at Damsel Cellars and the band Train to fund habitat restoration across the rivers our fish come home to.</p>
              <div className="actions">
                <a href="https://dukesseafood.com/blog/dukes-partners-with-damsel-cellars-and-train-to-launch-foundation-to-save-wild-salmon/" className="btn btn-primary">Read the story <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="shell">
          <div>
            <h2 className="h-display">A free dinner to join. <em>Another every birthday.</em></h2>
            <p>Join Duke&apos;s email club and your first dinner is on us. Then a free entree every birthday, and up to $20 off each time you dine and check in. Members also get first look at Chef Bill&apos;s seasonal specials and a note from Duke about what the boats are pulling in.</p>
          </div>
          <div>
            <NewsletterForm />
            <p style={{marginTop: '12px', fontSize: '13px', color: 'rgba(242,235,223,0.55)'}}>One email a couple times a month. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <div id="tweaks-root"></div>    </>
  );
}
