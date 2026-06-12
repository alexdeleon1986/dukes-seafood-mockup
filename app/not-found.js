export const metadata = {
  title: 'Page not found — Duke\u2019s Seafood',
  description: 'The page you were looking for isn\u2019t here. Find Duke\u2019s menus, locations, and reservations.',
};

export default function NotFound() {
  return (
    <div className="page-simple">
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">404</p>
            <h1 className="h-display">This page isn&apos;t on the <em>menu</em></h1>
            <p className="lede">The link may have moved when we rebuilt the site. The chowder, happily, is right where it&apos;s always been.</p>
            <div className="hero-ctas">
              <a href="/" className="btn btn-primary btn-lg">Back to the homepage <span className="arrow">→</span></a>
              <a href="/menus/" className="btn btn-ghost btn-lg">See the menus</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
