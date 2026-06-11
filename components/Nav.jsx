'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ReserveModal from '@/components/ReserveModal';
import { LOCATION_LIST } from '@/lib/locations';

const ORDER_URL = 'https://order.online/business/dukes-seafood-22397';
const RESERVE_ORDER = ['lake-union','bellevue','green-lake','tacoma','southcenter','kent-station'];
const RESERVE_LOCATIONS = RESERVE_ORDER
  .map((slug) => LOCATION_LIST.find((l) => l.slug === slug))
  .filter(Boolean)
  .map((l) => ({ slug: l.slug, name: l.name, rid: l.rid }));

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
          <a href="/group-dining/" className="nav-link nav-link-hide-mobile">Private Dining</a>
        </div>

        <Link href="/" className="wordmark">
          <Image src="/images/dukes-logo.png" alt="Duke's Seafood" width={160} height={48} style={{ width: 160, height: 48, objectFit: 'contain', display: 'block', margin: '0 auto 2px' }} priority />
          <span className="small">Wild Pacific Seafood · Since 1977</span>
        </Link>

        <div className="nav-right">
          <Link href="/chowder" className={`nav-link nav-link-hide-mobile ${isActive('/chowder') ? 'active' : ''}`}>Chowder</Link>
          <Link href="/our-story" className={`nav-link nav-link-hide-mobile ${isActive('/our-story') ? 'active' : ''}`}>Our Story</Link>
          <ReserveModal locations={RESERVE_LOCATIONS} triggerClassName="btn btn-primary btn-sm" triggerLabel="Reserve" />
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="mobile-menu" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="mobile-menu-inner">
          <button className="mobile-menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
          <Link href="/menus">Menus</Link>
          <Link href="/locations">Locations</Link>
          <a href="/group-dining/">Private Dining</a>
          <Link href="/chowder">Chowder</Link>
          <Link href="/our-story">Our Story</Link>
          <ReserveModal locations={RESERVE_LOCATIONS} triggerClassName="mobile-menu-cta" triggerLabel="Reserve a table" showArrow={false} />
          <div className="mobile-menu-rail">
            <a href={ORDER_URL}>Order online</a>
            <span className="dot">·</span>
            <a href="/locations">Reservations</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
