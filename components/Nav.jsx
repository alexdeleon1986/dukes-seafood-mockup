'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ORDER_URL = 'https://order.online/business/dukes-seafood-22397';
const DOCKSIDE_URL = 'https://docksideatdukes.com/';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <nav className="nav">
      <div className="shell">
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        <div className="nav-left">
          <Link href="/menus" className={`nav-link nav-link-hide-mobile ${isActive('/menus') ? 'active' : ''}`}>Menus</Link>
          <Link href="/locations" className={`nav-link nav-link-hide-mobile ${isActive('/locations') ? 'active' : ''}`}>Locations</Link>
          <a href={DOCKSIDE_URL} className="nav-link nav-link-hide-mobile">Private Dining</a>
        </div>

        <Link href="/" className="wordmark">
          <Image src="/images/dukes-logo.png" alt="Duke's Seafood" width={160} height={48} style={{ width: 160, height: 48, objectFit: 'contain', display: 'block', margin: '0 auto 2px' }} priority />
          <span className="small">Wild Pacific Seafood · Since 1976</span>
        </Link>

        <div className="nav-right">
          <Link href="/chowder" className={`nav-link nav-link-hide-mobile ${isActive('/chowder') ? 'active' : ''}`}>Chowder</Link>
          <Link href="/our-story" className={`nav-link nav-link-hide-mobile ${isActive('/our-story') ? 'active' : ''}`}>Our Story</Link>
          <a href="https://dukesseafood.com/locations/" className="btn btn-primary btn-sm">Reserve <span className="arrow">→</span></a>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="mobile-menu" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="mobile-menu-inner">
          <button className="mobile-menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
          <Link href="/menus">Menus</Link>
          <Link href="/locations">Locations</Link>
          <a href={DOCKSIDE_URL}>Private Dining</a>
          <Link href="/chowder">Chowder</Link>
          <Link href="/our-story">Our Story</Link>
          <a href="https://dukesseafood.com/locations/" className="mobile-menu-cta">Reserve a table →</a>
          <div className="mobile-menu-rail">
            <a href={ORDER_URL}>Order online</a>
            <span className="dot">·</span>
            <a href="https://dukesseafood.com/locations/">Reservations</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
