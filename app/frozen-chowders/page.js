export const metadata = {
  title: "Frozen Chowders — Duke's Seafood",
  description: "Duke's award-winning chowders and bisque at home, any day of the week. Seattle's Best Clam Chowder, Lobster Mobster Chowder, and Dungeness Crab Bisque. In the frozen aisle at Puget Sound grocers and delivered through Sound Bites.",
};

const PRODUCTS = [
  {
    name: "Seattle's Best Clam Chowder",
    img: '/images/frozen-clam.jpg',
    made: 'Sustainable clams',
    quote: 'This chowder won the Seattle Chowder Cook-Off so often, they asked us to stop entering.',
    features: ['Rich & Creamy', 'Sustainable Clams', 'World Famous', 'Gluten Free'],
  },
  {
    name: 'Lobster Mobster Chowder',
    img: '/images/frozen-lobster.jpg',
    made: 'Made with Argentinian Red Shrimp',
    quote: 'This chowder is so delicious, you will want to lick the bowl.',
    features: ['Rich & Creamy', 'Tender Red Shrimp', 'Fragrant Anise', 'Gluten Free'],
  },
  {
    name: 'Dungeness Crab Bisque',
    img: '/images/frozen-crab.jpg',
    made: 'Made with Tillamook Extra Sharp White Cheddar',
    quote: 'The marriage of the best crab in the world with the best cheese in the world.',
    features: ['Rich & Creamy', 'Dungeness Crab', 'Tillamook Cheese', 'Gluten Free'],
  },
];

const RETAILERS = [
  'Metropolitan Market',
  'Haggen Northwest Fresh',
  'Town & Country Markets',
  'Thriftway West Seattle',
  'PCC Community Markets',
  'QFC',
];

export default function FrozenChowders() {
  return (
    <div className="page-simple">
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">In the frozen aisle</p>
            <h1 className="h-display">Duke&apos;s chowder, <em>at home</em>.</h1>
            <p className="lede">The same recipes we serve in the dining room, ready any night of the week. Every one is gluten free and simple to make. Keep it frozen, then boil the pouch. Serves one to two.</p>
            <div className="hero-ctas">
              <a href="https://www.soundbitesdelivers.com/dukes" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Order from Sound Bites <span className="arrow">→</span></a>
              <a href="/chowder" className="btn btn-ghost btn-lg">About the chowder</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/chowder-hero.jpg" alt="Bowl of Duke's award-winning clam chowder" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell-narrow">
          <div className="sec-head"><h2 className="h-display">Three to <em>choose from</em>.</h2></div>
        </div>
        <div className="shell">
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <div className="product-card" key={p.name}>
                <div className="product-photo imgfill"><img src={p.img} alt={`Duke's ${p.name} retail package`} /></div>
                <div className="product-body">
                  <h3 className="h-display">{p.name}</h3>
                  <p className="product-made">{p.made}</p>
                  <p className="product-quote">&ldquo;{p.quote}&rdquo;</p>
                  <ul className="product-features">
                    {p.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="shell-narrow">
          <div className="sec-head"><h2 className="h-display">Find it <em>near you</em>.</h2></div>
          <p className="body">Duke&apos;s frozen chowders and bisque are stocked at grocers around the Puget Sound:</p>
          <ul className="plain-list">
            {RETAILERS.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p className="body" style={{ marginTop: 28 }}>
            Want it delivered? Sound Bites brings them straight to your door.
          </p>
          <a href="https://www.soundbitesdelivers.com/dukes" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>Order from Sound Bites <span className="arrow">→</span></a>
        </div>
      </section>
    </div>
  );
}
