export const metadata = {
  title: "Gift Cards — Duke's Seafood",
  description: "Give the gift of great food with a Duke's Seafood gift card. E-gift cards for instant delivery, physical cards by mail, good at any location for dining in or takeout. They never expire.",
  alternates: { canonical: '/gift-cards/' },
};

const CARD_LINK = 'https://www.toasttab.com/dukes-seafood-seattle-greenlake/giftcards';
const PHYSICAL_LINK = 'https://shop.dukesseafood.com/';
const BALANCE_LINK = 'https://www.toasttab.com/dukes-seafood-seattle-greenlake/findcard';

export default function GiftCards() {
  return (
    <div className="page-simple">
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">Gift cards</p>
            <h1 className="h-display">The gift of a <em>good table</em></h1>
            <p className="lede">A Duke&apos;s gift card works for a birthday, a thank-you, or anyone who loves wild Pacific seafood. Good for dining in or takeout at all six locations, and it never expires. Yes, really.</p>
            <div className="hero-ctas">
              <a href={CARD_LINK} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Buy an e-gift card <span className="arrow">→</span></a>
              <a href={PHYSICAL_LINK} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">Buy a physical card</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/dukes-sign-lamps.jpg" alt="Duke's Seafood cedar storefront sign" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell">
          <div className="vip-card">
            <p className="eyebrow">Instant</p>
            <h2 className="h-display">E-gift card</h2>
            <p className="body">Delivered by email the moment you buy it. The fastest way to get a last-minute gift to someone&apos;s inbox.</p>
            <a href={CARD_LINK} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Buy an e-gift card <span className="arrow">→</span></a>
          </div>
          <div className="vip-card">
            <p className="eyebrow">By mail</p>
            <h2 className="h-display">Physical card</h2>
            <p className="body">A classic card sent to you or straight to the recipient. The kind you can wrap.</p>
            <a href={PHYSICAL_LINK} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Buy a physical card <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="shell-narrow">
          <div className="sec-head"><h2 className="h-display">Already <em>have one?</em></h2></div>
          <p className="body">Check your balance any time. Duke&apos;s gift cards work at every location, for dining in or takeout, and never expire.</p>
          <a href={BALANCE_LINK} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>Check your balance</a>
        </div>
      </section>
    </div>
  );
}
