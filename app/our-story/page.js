export const metadata = {
  title: "Our Story — Duke's Seafood",
  description: "Duke Moscrip opened the first Duke's in 1977. Nearly fifty years on, the salmon still comes off the same Alaska boats and the chowder uses the same recipe. Family-owned since 1977.",
  alternates: { canonical: '/our-story/' },
};

const PEOPLE = [
  { name: 'Duke Moscrip', role: 'Founder', photo: '/images/duke-portrait-2015.jpg', bio: 'Opened the original Duke\u2019s on Queen Anne in 1977. Still flies to Alaska to vet the boats, still runs taste tests in the kitchen, still writes most of the company\u2019s blog posts himself.', pos: 'center top' },
  { name: 'John Moscrip', role: "President · Duke\u2019s Son", photo: '/images/duke-john-bar.jpg', bio: 'Took over running the company. Day-to-day operations, sourcing relationships, the foundation work. Helped launch the Dukes Damsel on a Train Foundation in 2025.', pos: '85% center' },
  { name: 'Alan Caraco', role: 'Executive Chef', photo: '/images/alan-caraco.jpg', bio: 'Runs the kitchens across all six restaurants. Develops the seasonal menu alongside Chef Bill\u2019s specials. Believes a deviled egg without crab on top is a missed opportunity.', pos: 'center' },
];

const TIMELINE = [
  ['1977', "Duke\u2019s Bar & Grill opens on Queen Anne.", 'Two blocks from the Seattle Center. Chalkboard menu, eclectic food, cigar boxes for a register.'],
  ['1978', "The original Duke\u2019s Bellevue follows.", 'The success of Queen Anne pulls a second location across the lake. It later closed; Bellevue returns in 2017.'],
  ['1989', 'The first Chowder House opens on South Lake Union.', 'The prototype for everything that follows. The chowder recipe goes on the menu and stays on the menu.'],
  ['1990', "Duke\u2019s Green Lake opens.", 'Right on the lake. Seaplanes overhead. Most of the year, the deck is open.'],
  ['2005', 'Kent Station opens.', 'In the heart of Kent Station, with a patio and one of Kent\u2019s best happy hours.'],
  ['2006', 'Tacoma Waterfront opens on Ruston Way.', 'Built on pilings over Puget Sound. The water at your shoulder, Mount Rainier in the window.'],
  ['2008', 'Southcenter opens at Westfield Mall.', 'Full menu, full bar, a big patio, easy to reach from anywhere south of Seattle.'],
  ['2017', 'Duke\u2019s returns to Bellevue.', 'A showpiece room in Lincoln Square South, and the name becomes Duke\u2019s Seafood & Chowder.'],
  ['2019', 'South Lake Union moves up the lake.', 'The Chowder House relocates to a larger second-floor waterfront spot, and Dockside at Duke\u2019s opens below it as the first event venue.'],
  ['2025', 'The Dukes Damsel on a Train Foundation launches.', 'A foundation to fund habitat restoration for wild Pacific salmon.'],
];

export default function OurStory() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">Nearly fifty years on, the chowder hasn&apos;t changed and <em>neither have the boats</em>.</h1>
            <p className="lede">Duke opened the first restaurant in 1977 with cigar boxes for a register. His son John runs the company now. The salmon still comes off the same Alaska boats.</p>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/duke-amy-jm-dock.jpg" alt="Duke, Amy, and John Moscrip on the dock" style={{ objectPosition: 'center' }} />
          </div>
        </div>
      </section>

      {/* Beginning */}
      <section className="sec about">
        <div className="shell">
          <div>
            <p className="eyebrow">The beginning · Queen Anne, 1977</p>
            <h2 className="h-display">Duke wanted somewhere <em>less formal</em>. So he opened it.</h2>
          </div>
          <div>
            <p style={{ marginBottom: 16 }}>Duke Moscrip broke away from a partnership at Ray&apos;s Boathouse and opened the first Duke&apos;s Bar &amp; Grill on Queen Anne in 1977. Two blocks from the Seattle Center. Cigar boxes for a register because nobody had time to set up a real one yet.</p>
            <p style={{ marginBottom: 16 }}>He wanted a hangout. Quality, but no fuss. That tension between casual and serious has run through every Duke&apos;s since.</p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 21, fontStyle: 'italic', color: 'var(--ink)', borderLeft: '3px solid var(--brass)', paddingLeft: 22, marginTop: 12 }}>No cash register, just a cigar box on the counter. Some of that hangout spirit never left.</p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="reserve">
        <div className="shell" style={{ display: 'block', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.3em', color: 'var(--brass)', marginBottom: 28 }}>⌁ &nbsp; ⌁ &nbsp; ⌁</p>
          <blockquote style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3.6vw, 48px)', fontStyle: 'italic', lineHeight: 1.25, maxWidth: 900, margin: '0 auto', color: 'var(--cream)' }}>
            I personally guarantee that you&apos;ll enjoy your meal, or you don&apos;t pay.
          </blockquote>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brass)', marginTop: 32 }}>Duke Moscrip · Founder</p>
        </div>
      </section>

      {/* Sourcing */}
      <section className="sec menus">
        <div className="shell">
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/duke-rockfish.jpg" alt="Duke Moscrip fishing for rockfish in Alaska" />
          </div>
          <div>
            <p className="eyebrow">The sourcing · Wild Alaska, since the nineties</p>
            <h2 className="h-display">The same boats. <em>For thirty years</em>.</h2>
            <p style={{ marginTop: 20, marginBottom: 16, color: 'var(--ink-soft)' }}>For more than three decades, our wild salmon has come from the same small, family-run Alaska fishing operations. Duke knows the captains by name and visits the docks himself.</p>
            <p style={{ marginBottom: 16, color: 'var(--ink-soft)' }}>Alaska is the only US state with sustainability written directly into its constitution, required since statehood in 1959. That&apos;s the law our suppliers fish under.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32, borderTop: '1px solid var(--line)', paddingTop: 28 }}>
              {[['30+', 'Years sourcing from Alaska'], ['100%', 'Wild & sustainably caught'], ['1959', 'Sustainability in AK law']].map(([n, l]) => (
                <div key={n}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 40, color: 'var(--ink)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brass-dark)', marginTop: 10 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="sec events">
        <div className="shell">
          <div className="sec-head">
            <h2 className="h-display">A <em>Moscrip</em> still runs every dining room.</h2>
            <div className="head-aside">Duke founded the company. His son John runs it now. The thread doesn&apos;t break.</div>
          </div>
          <div className="events-list">
            {PEOPLE.map((p) => (
              <div className="event" key={p.name}>
                <div className="photo imgfill"><img src={p.photo} alt={p.name} style={{ objectPosition: p.pos }} /></div>
                <div className="body">
                  <span className="opt">{p.role}</span>
                  <h3 className="h-display">{p.name}</h3>
                  <p>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sec">
        <div className="shell">
          <div className="sec-head"><h2 className="h-display">Fifty years, give or take.</h2></div>
          <div className="menus-list">
            {TIMELINE.map(([year, title, body]) => (
              <div key={year} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 28, padding: '22px 0', borderBottom: '1px solid var(--line)', alignItems: 'baseline' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--brass-dark)' }}>{year}</div>
                <div>
                  <h3 className="h-display" style={{ fontSize: 22, marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="reserve">
        <div className="shell">
          <div>
            <p className="eyebrow" style={{ color: 'var(--brass)' }}>Dukes Damsel on a Train Foundation</p>
            <h2 className="h-display">We&apos;ve served wild salmon for nearly fifty years. We&apos;d like to <em>serve it for fifty more</em>.</h2>
            <p className="lede" style={{ marginTop: 20, color: 'rgba(242,235,223,0.82)' }}>In 2025 we partnered with Damsel Cellars and the band Train to fund habitat restoration across the rivers our fish come home to.</p>
            <a href="https://dukesseafood.com/blog/dukes-partners-with-damsel-cellars-and-train-to-launch-foundation-to-save-wild-salmon/" className="btn btn-primary btn-lg" style={{ marginTop: 28 }}>Read the story →</a>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '1/1' }}>
            <img src="/images/foundation-logo.jpg" alt="Dukes Damsel on a Train Foundation" />
          </div>
        </div>
      </section>
    </>
  );
}
