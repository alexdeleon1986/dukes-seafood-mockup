export const metadata = {
  title: "Frozen Chowders — Duke's Seafood",
  description: "Duke's award-winning chowders and bisques at home, any day of the week. Available in the frozen aisle at Puget Sound grocers and delivered locally through Sound Bites.",
};

const PRODUCTS = [
  {
    name: "Seattle's Best Clam Chowder",
    img: '/images/chowder-hero.jpg',
    copy: "The one that started it all. Our world-famous chowder comes from a recipe handed down by Duke's Grampa Cox, who swore it was the best in New England. Fresh herbs, a creamy base, and clams that show up without taking over. It won the Seattle Chowder Cook Off three years running, and we only stopped competing because they asked us to.",
  },
  {
    name: 'Lobster Mobster Pernod Chowder',
    img: '/images/chowder-bowl.jpg',
    copy: "A splash of Pernod sets this one apart. The faint note of black licorice plays against tender langostino and a rich lobster base, and the result is a bowl you will not find anywhere else.",
  },
  {
    name: 'Dungeness Crab Bisque',
    img: '/images/lobster.jpg',
    copy: "Sweet, briny Dungeness crab is hard to beat. We fold tender crab meat together with Tillamook Extra Sharp White Cheddar and a careful mix of herbs and spices for a bisque that is every bit as rich as it sounds.",
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
            <p className="lede">Enjoy our famous chowders and bisques any day of the week. Each one carries the flavor of our signature recipes with the convenience of a boil-in-bag pouch. Find them at grocers around the Puget Sound, or have them delivered through Sound Bites.</p>
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

      {PRODUCTS.map((p, i) => (
        <section className="sec" key={p.name}>
          <div className="shell" style={{ direction: i % 2 ? 'rtl' : 'ltr' }}>
            <div className="photo imgfill" style={{ aspectRatio: '4/3', direction: 'ltr' }}>
              <img src={p.img} alt={p.name} />
            </div>
            <div style={{ direction: 'ltr' }}>
              <h2 className="h-display">{p.name}</h2>
              <p className="body">{p.copy}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="sec alt">
        <div className="shell-narrow">
          <div className="sec-head"><h2 className="h-display">Where to <em>buy</em>.</h2></div>
          <p className="body">Duke&apos;s frozen chowders are stocked at these Puget Sound grocers:</p>
          <ul className="plain-list">
            {RETAILERS.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p className="body" style={{ marginTop: 24 }}>
            Prefer delivery? Sound Bites brings them straight to your door.{' '}
            <a href="https://www.soundbitesdelivers.com/dukes" target="_blank" rel="noopener noreferrer">Order from Sound Bites →</a>
          </p>
        </div>
      </section>
    </div>
  );
}
