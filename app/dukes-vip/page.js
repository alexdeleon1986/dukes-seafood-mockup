export const metadata = {
  title: "Duke's VIP Email Club — Duke's Seafood",
  description: "Join Duke's Seafood Email Club for a 2-for-1 entree, a birthday entree every year, and up to $20 off your next meal. Already a member? Check in after you dine.",
};

export default function DukesVip() {
  return (
    <div className="page-simple">
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">Free dinners</p>
            <h1 className="h-display">Duke&apos;s <em>Email Club</em>.</h1>
            <p className="lede">Members eat well. A 2-for-1 entree when you join, a free entree every birthday, and up to $20 off your next meal each time you dine and check in.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell">
          <div className="vip-card">
            <p className="eyebrow">Returning guest</p>
            <h2 className="h-display">Welcome back.</h2>
            <p className="body">Just finished a meal with us? Check in with your email and location, and we&apos;ll send a Frequent Diner offer worth up to $20 off your next visit. Every visit qualifies.</p>
            <a href="/dukes-vip-guest-check-in" className="btn btn-primary btn-lg">Check in now <span className="arrow">→</span></a>
          </div>
          <div className="vip-card">
            <p className="eyebrow">New guest</p>
            <h2 className="h-display">Join the club.</h2>
            <p className="body">Sign up once and a 2-for-1 dinner offer lands in your inbox automatically. It takes about a minute.</p>
            <a href="/vip-club-sign-up" className="btn btn-primary btn-lg">Join the email club <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="shell-narrow">
          <div className="sec-head"><h2 className="h-display">What members <em>get</em>.</h2></div>
          <div className="benefit">
            <h3>One free dinner to start</h3>
            <p className="body">Sign up and we send a 2-for-1 entree offer right away. Buy one entree at full price, get one of our five top choices free.</p>
          </div>
          <div className="benefit">
            <h3>Dinner on us every birthday</h3>
            <p className="body">Each year we send a voucher for a free birthday entree, or a free dessert for everyone at your table when they order a meal.</p>
          </div>
          <div className="benefit">
            <h3>Up to $20 off, every time you dine</h3>
            <p className="body">Check in after any visit and we take $10 off a bill of $50 or more, or $20 off a bill of $100 or more. At any of our six restaurants.</p>
          </div>
          <p className="body" style={{ marginTop: 28 }}>You&apos;ll also get our newsletter: stories from more than forty years of Duke&apos;s, recipes and tips from Wild Bill Ranniger, and member-only promotions.</p>
        </div>
      </section>
    </div>
  );
}
