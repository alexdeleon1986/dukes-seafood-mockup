export const metadata = {
  title: "The Chowder — Duke's Seafood",
  description: "Duke's award-winning clam chowder: three-time Seattle Chowder Cook Off champion, made fresh daily at every location since 1989. Seven flavors, all gluten free.",
};

const CHOWDERS = [
  "Seattle's Best Clam Chowder",
  'Lobster Mobster Chowder',
  'Dungeness Crab Bisque',
  'Smoked Salmon Chowder',
  'North by Northwest Seafood Chowder',
  "Ragin\u2019 Cajun Chicken & Corn Chowder",
  'Four-Chowder Sampler',
];

export default function Chowder() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">The chowder that <em>started it all</em>.</h1>
            <p className="lede">Three-time champion of the Seattle Chowder Cook Off, made fresh every day at every location. It&apos;s the recipe Duke spent years perfecting, and we&apos;ve never had a reason to change it.</p>
            <div className="hero-ctas">
              <a href="/frozen-chowders" className="btn btn-primary btn-lg">Take it home <span className="arrow">→</span></a>
              <a href="/locations" className="btn btn-ghost btn-lg">Find a location</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/chowder-hero.jpg" alt="Duke's award-winning clam chowder in a sourdough bread bowl" />
          </div>
        </div>
      </section>

      <section className="sec menus">
        <div className="shell">
          <div className="photo imgfill" style={{ aspectRatio: '1/1' }}>
            <img src="/images/chowder-bowl.jpg" alt="Clam chowder bread bowl with a margarita" />
          </div>
          <div>
            <p className="eyebrow">The recipe</p>
            <h2 className="h-display">From <em>New England</em>, by way of South Lake Union.</h2>
            <p style={{ marginTop: 20, marginBottom: 16, color: 'var(--ink-soft)' }}>Our clam chowder is the recipe Duke spent years perfecting with Chef Bill. We&apos;ve been pouring it since 1989, when the first Chowder House opened on South Lake Union, and it hasn&apos;t changed since.</p>
            <p style={{ marginBottom: 16, color: 'var(--ink-soft)' }}>Six other flavors have grown out of that original. None displaced it. Order the four-chowder sampler and decide for yourself.</p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', borderTop: '1px solid var(--line)', paddingTop: 24, marginTop: 8 }}>
              {[['3× Champion', 'Seattle Chowder Cook Off'], ['Best Seafood', '425 Magazine, 2025'], ['Best of', 'South Sound, 2025']].map(([a, b]) => (
                <div key={a} style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)' }}>
                  <strong style={{ display: 'block', color: 'var(--brass-dark)', marginBottom: 4 }}>{a}</strong>{b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell">
          <div className="sec-head">
            <h2 className="h-display">Seven <em>chowders</em>.</h2>
            <p className="head-aside">One award-winning original and six that grew out of it. Every one made fresh daily, every one available by the cup or the bowl, and the clam, lobster, and crab also go home frozen.</p>
          </div>
          <div className="chowder-list">
            {CHOWDERS.map((c) => (
              <div className="chowder-list-item" key={c}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="reserve">
        <div className="shell">
          <div>
            <h2 className="h-display">Take it <em>home</em>.</h2>
            <p className="lede" style={{ marginTop: 16, color: 'rgba(242,235,223,0.82)' }}>Find the clam, lobster, and crab in grocery freezers around the Puget Sound, or have them delivered by Sound Bites.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/frozen-chowders" className="btn btn-primary btn-lg">Find it in stores <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
