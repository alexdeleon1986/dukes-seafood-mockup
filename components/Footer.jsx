import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="wordmark">
              <Image src="/images/dukes-logo.png" alt="Duke's Seafood" width={200} height={60}
                style={{ width: 200, height: 60, objectFit: 'contain', display: 'block', marginBottom: 8, filter: 'brightness(0) invert(1) opacity(0.92)' }} />
              <span className="small">Wild Pacific Seafood · Since 1976</span>
            </div>
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.55, color: 'rgba(242,235,223,0.72)', maxWidth: '32ch' }}>
              Six restaurants across Western Washington. Family-owned since 1976.
            </p>
          </div>

          <div>
            <h4>Menus</h4>
            <ul>
              <li><Link href="/menus/lunch-menu">Lunch &amp; Dinner</Link></li>
              <li><Link href="/menus/happy-hour-menu">Happy Hour</Link></li>
              <li><Link href="/menus/drinks-menu">Drinks</Link></li>
              <li><Link href="/menus/dessert-menu">Dessert</Link></li>
              <li><Link href="/menus/kids-menu">Kids</Link></li>
            </ul>
          </div>

          <div>
            <h4>All locations</h4>
            <ul>
              <li><Link href="/locations/bellevue">Bellevue</Link></li>
              <li><Link href="/locations/lake-union">South Lake Union</Link></li>
              <li><Link href="/locations/green-lake">Green Lake</Link></li>
              <li><Link href="/locations/tacoma">Tacoma Waterfront</Link></li>
              <li><Link href="/locations/southcenter">Southcenter</Link></li>
              <li><Link href="/locations/kent-station">Kent Station</Link></li>
            </ul>
          </div>

          <div>
            <h4>Duke's</h4>
            <ul>
              <li><a href="https://dukesseafood.com/gift-cards/">Gift cards</a></li>
              <li><a href="/frozen-chowders">Frozen chowders</a></li>
              <li><a href="/dukes-vip">Free dinners (VIP)</a></li>
              <li><a href="https://dukesseafood.com/recipes/">Recipes</a></li>
              <li><a href="https://dukesseafood.com/blog">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Duke's Seafood Restaurants · Family-owned</span>
          <span>Made with care in the Pacific Northwest</span>
        </div>
      </div>
    </footer>
  );
}
