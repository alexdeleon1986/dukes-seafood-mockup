import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';
import HeroVideoControls from '@/components/HeroVideoControls';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import ReservationWidget from '@/components/ReservationWidget';
import { LOCATION_LIST } from '@/lib/locations';
import { AWARDS, GUARANTEE } from '@/lib/awards';

export const metadata = {
  title: "Duke's Seafood — Wild Pacific Seafood Since 1977",
  description: "Six family-owned Duke's Seafood restaurants across Western Washington. Wild Alaska salmon, sustainable Pacific seafood, and award-winning chowder since 1977.",
  alternates: { canonical: '/' },
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

        <HeroVideoBackground />

        <div className="hv-content">
          <div className="hv-mid">
            <div className="hv-top">
              <span>Pacific Northwest · Family-Owned Since 1977</span>
              <span>Wild Alaska Salmon · Sustainably Sourced</span>
            </div>
            <h1 className="h-display">Pacific Northwest seafood, <em>family-run since 1977</em>.</h1>
            <p className="lede">We buy directly from small Alaska boats Duke has known for thirty years and pull oysters and Dungeness crab from up and down the Sound. Family-owned since 1977, six dining rooms in Western Washington, and the chowder is the same award-winning recipe that&apos;s carried our name for decades.</p>
            <div className="ctas">
              <a href="#reserve" className="btn btn-primary btn-lg">Reserve a table <span className="arrow">→</span></a>
              <a href="#locations" className="btn btn-lg">Find a location</a>
            </div>
          </div>

          <div className="hv-bottom">
            <a href="#story" className="scroll-cue"><span className="line"></span> Scroll to see more</a>
            <HeroVideoControls />
          </div>
        </div>
      </section>

      <section className="sec about" id="story">
        <div className="shell">
          <div className="about-lead">
            <h2 className="h-display">Seattle&apos;s been eating here <em>since 1977</em>.</h2>
          </div>
          <div>
            <p>Duke opened the first Duke&apos;s in 1977, two blocks from the Seattle Center, with cigar boxes for a register because nobody had set up a real one yet. Nearly fifty years later his son John runs the company, the chowder is the same recipe we&apos;ve poured since the first Chowder House, and the same family sits at the same tables.</p>
            <p>We buy from small Alaska boats Duke has known for thirty years, pull oysters and Dungeness crab from up and down the Sound, and pour the same award-winning chowder we opened with. Six restaurants, one family, recipes we won&apos;t change and sourcing we won&apos;t compromise.</p>
            <div className="about-cta">
              <a href="/our-story/" className="btn btn-ghost btn-sm">Read our history <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec hh-band" id="happy-hour">
        <div className="shell">
          <div className="feature-row flip">
            <div className="photo">
              <span className="imgfill"><Image src="/images/patio-spread.jpg" alt="A spread of Duke's food and a cocktail on a sunny patio table" fill sizes="(max-width: 880px) 100vw, 50vw" style={{ objectFit: 'cover' }} /></span>
            </div>
            <div>
              <p className="eyebrow">Happy Hour</p>
              <h2 className="h-display">Twice a day. <em>Full portions</em>, not just drinks.</h2>
              <p>Happy hour runs 3&ndash;6pm and again 9pm to close, seven days a week, in the dining room, the bar, and out on the deck. Dishes straight off the regular menu &mdash; the grass-fed cheeseburger, the crab &lsquo;un&rsquo;-cake, the chowder &mdash; at happy hour prices, in full portions. We never shrink the plate.</p>
              <div className="actions">
                <a href="/menus/happy-hour-menu/" className="btn btn-primary">See the happy hour menu <span className="arrow">→</span></a>
                <a href="/locations/" className="btn btn-ghost">Find a table</a>
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
            <a href="/locations/lake-union/" className="location-card">
              <div className="photo"><span className="imgfill"><Image src="/images/slu-interior.jpg" alt="South Lake Union" fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span></div>
              <div className="city">South Lake Union</div>
              <div className="meta"><strong>The original Chowder House.</strong> Big bar, lake views, the patio that started it all. Opened 1989.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/bellevue/" className="location-card">
              <div className="photo"><span className="imgfill"><Image src="/images/loc-bellevue.jpg" alt="Bellevue" fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span></div>
              <div className="city">Bellevue</div>
              <div className="meta"><strong>Lincoln Square South.</strong> Second-floor dining room, downtown views.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/green-lake/" className="location-card">
              <div className="photo"><span className="imgfill"><Image src="/images/greenlake-hero.jpg" alt="Green Lake" fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span></div>
              <div className="city">Green Lake</div>
              <div className="meta"><strong>Right on the lake.</strong> Seaplanes overhead, the deck open most of the year.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/tacoma/" className="location-card">
              <div className="photo"><span className="imgfill"><Image src="/images/tacoma-hero.jpg" alt="Tacoma" fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span></div>
              <div className="city">Tacoma Waterfront</div>
              <div className="meta"><strong>Ruston Way.</strong> The water at your shoulder, Mount Rainier in the window.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/southcenter/" className="location-card">
              <div className="photo"><span className="imgfill"><Image src="/images/southcenter-hero.jpg" alt="Southcenter" fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span></div>
              <div className="city">Southcenter</div>
              <div className="meta"><strong>Westfield Southcenter.</strong> Full menu, full bar, easy from anywhere south of Seattle.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
            <a href="/locations/kent-station/" className="location-card">
              <div className="photo"><span className="imgfill"><Image src="/images/kent-hero.jpg" alt="Kent Station" fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span></div>
              <div className="city">Kent Station</div>
              <div className="meta"><strong>Open daily.</strong> Family-friendly, easy parking, in the heart of Kent Station.</div>
              <div className="arr"><span>Visit page</span><span>→</span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="awards-strip" aria-label="Awards">
        <div className="shell">
          <ul className="awards-list">
            {AWARDS.map((a, i) => (
              <li key={i}><span className="aw-name">{a.award}</span><span className="aw-src">{a.source}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {GUARANTEE.confirmed && (
        <section className="guarantee-band">
          <div className="shell">
            <blockquote>
              <p>&ldquo;{GUARANTEE.quote}&rdquo;</p>
              <cite>{GUARANTEE.attribution}</cite>
            </blockquote>
          </div>
        </section>
      )}

      <section className="sec" id="chowder">
        <div className="shell">
          <div className="feature-row">
            <div className="photo">
              <span className="imgfill"><Image src="/images/chowder-hero.jpg" alt="Duke's award-winning clam chowder in a bread bowl" fill sizes="(max-width: 880px) 100vw, 50vw" style={{ objectFit: 'cover' }} /></span>
            </div>
            <div>
              <p className="eyebrow">The Chowder</p>
              <h2 className="h-display">The recipe Duke <em>perfected</em>. Three Cook Off wins.</h2>
              <p>Our award-winning clam chowder is the same recipe we&apos;ve poured since the first Chowder House opened in 1989, made fresh every day at every location. It took home the Seattle Chowder Cook Off three years running, and now the clam, lobster, and crab go home frozen too — stocked in Puget Sound grocery freezers and delivered by Sound Bites.</p>
              <div className="actions">
                <a href="/frozen-chowders/" className="btn btn-primary">Take it home <span className="arrow">→</span></a>
                <a href="/menus/" className="btn btn-ghost">Order in restaurant</a>
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
              <span className="imgfill"><Image src="/images/damsel-on-a-train.webp" alt="Wild salmon swimming upstream in a Pacific Northwest river" fill sizes="(max-width: 880px) 100vw, 50vw" style={{ objectFit: 'cover' }} /></span>
            </div>
            <div>
              <p className="eyebrow">Dukes Damsel on a Train Foundation</p>
              <h2 className="h-display">We've served wild salmon for nearly fifty years. We'd like to serve it for <em>fifty more</em>.</h2>
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
            <h2 className="h-display">Join the club, <em>get a 2-for-1 dinner</em>.</h2>
            <p>Sign up for Duke&apos;s email club and a 2-for-1 entree offer lands in your inbox &mdash; buy one, get one of our top picks free. Then a free entree every birthday, and up to $20 off each time you dine and check in. Members also get first look at Chef Bill&apos;s seasonal specials and a note from Duke about what the boats are pulling in.</p>
          </div>
          <div>
            <NewsletterForm />
            <p className="newsletter-fineprint">One email a couple times a month. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </>
  );
}
