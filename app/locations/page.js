import Image from 'next/image';
import { LOCATION_LIST } from '@/lib/locations';
import ReserveModal from '@/components/ReserveModal';

export const metadata = {
  title: "Locations — Duke's Seafood",
  description: "Six Duke's Seafood restaurants across Western Washington: Bellevue, Tacoma Waterfront, South Lake Union, Green Lake, Southcenter, and Kent Station. Find hours, addresses, and reservations.",
  alternates: { canonical: '/locations/' },
};

export default function LocationsIndex() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div>
            <h1 className="h-display">Six dining rooms, <em>one family</em></h1>
            <p className="lede">From the Tacoma waterfront to downtown Bellevue, every Duke&apos;s is run by the Moscrip family and pours from the same wine list. Pick the view that suits the night.</p>
            <div className="hero-ctas">
              <ReserveModal locations={LOCATION_LIST} triggerClassName="btn btn-primary btn-lg" triggerLabel="Reserve a table" />
              <a href="https://order.online/business/dukes-seafood-22397" className="btn btn-ghost btn-lg">Order online</a>
            </div>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <Image src="/images/tacoma-hero.jpg" alt="Duke's Seafood on the Tacoma waterfront" fill sizes="(max-width: 880px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="shell">
          <div className="locations-grid">
            {LOCATION_LIST.map((l) => (
              <a key={l.slug} href={`/locations/${l.slug}/`} className="location-card">
                <div className="photo imgfill"><Image src={l.heroPhoto} alt={`Duke's ${l.name}`} fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></div>
                <div className="city">{l.name}</div>
                <div className="meta">{l.heroLede}</div>
                <div className="arr"><span>Visit page</span><span>→</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
