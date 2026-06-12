import Link from 'next/link';
import Image from 'next/image';
import { getMenuHub } from '@/lib/menus';

export default async function Footer() {
  const menuHub = await getMenuHub();
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="wordmark">
              <Image src="/images/dukes-logo.png" alt="Duke's Seafood" width={200} height={60}
                style={{ width: 200, height: 60, objectFit: 'contain', display: 'block', marginBottom: 8, filter: 'brightness(0) invert(1) opacity(0.92)' }} />
              <span className="small">Wild Pacific Seafood · Since 1977</span>
            </div>
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.55, color: 'rgba(242,235,223,0.72)', maxWidth: '32ch' }}>
              Six restaurants across Western Washington. Family-owned since 1977.
            </p>
          </div>

          <div>
            <h4>Menus</h4>
            <ul>
              {menuHub.map((m) => (
                <li key={m.slug}><Link href={`/menus/${m.slug}/`}>{m.name}</Link></li>
              ))}
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
              <li><Link href="/gift-cards/">Gift cards</Link></li>
              <li><Link href="/frozen-chowders/">Frozen chowders</Link></li>
              <li><Link href="/dukes-vip/">VIP Email Club</Link></li>
              <li><a href="https://dukesseafood.com/recipes/">Recipes</a></li>
              <li><a href="https://dukesseafood.com/blog">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Duke&apos;s Seafood Restaurants · Family-owned</span>
          <span>Made with care in the Pacific Northwest</span>
        </div>
      </div>
    </footer>
  );
}
