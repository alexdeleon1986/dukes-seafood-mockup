import Image from 'next/image';
import { LOCATION_LIST } from '@/lib/locations';

export const metadata = {
  title: "Private & Group Dining — Duke's Seafood",
  description: "Private and semi-private dining rooms at all six Duke's Seafood locations, from a 12-person table to a 50-guest room. Real rooms, real capacities, and a direct contact at each restaurant.",
  alternates: { canonical: '/group-dining/' },
  openGraph: {
    title: "Private & Group Dining — Duke's Seafood",
    description: "Private and semi-private dining rooms at all six Duke's Seafood locations. Real rooms, real capacities, a direct contact at each restaurant.",
    url: '/group-dining/',
    type: 'website',
    images: ['/images/dukes-sign.jpg'],
  },
};

const DOCKSIDE_URL = 'https://docksideatdukes.com/';

export default function GroupDining() {
  return (
    <div className="page-simple">
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">Private &amp; group dining</p>
            <h1 className="h-display">Your party, <em>Duke&apos;s style</em></h1>
            <p className="lede">Every Duke&apos;s does group dining, and most have a private or semi-private room. Birthdays, business lunches, reunions, celebrations, all on 100% sustainable seafood, grass-fed beef, and our award-winning chowder. Find your location below and talk to the person who runs events there.</p>
          </div>
          <div className="photo imgfill" style={{ aspectRatio: '4/5' }}>
            <img src="/images/friends-cheers.jpg" alt="A group toasting over dinner at Duke's Seafood" />
          </div>
        </div>
      </section>

      {LOCATION_LIST.map((loc) => (
        <section className="sec gd-loc" key={loc.slug} id={loc.slug}>
          <div className="shell shell-products">
            <div className="gd-loc-head">
              <h2 className="h-display">{loc.name}</h2>
              <p className="gd-aside">{loc.events.aside}</p>
            </div>
            <div className="gd-rooms">
              {loc.events.options.map((o, i) => (
                <div className="gd-room" key={i}>
                  <div className="photo imgfill"><Image src={o.photo} alt={o.title} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></div>
                  <div className="gd-room-body">
                    <span className="opt">{o.opt}</span>
                    <h3 className="h-display">{o.title}</h3>
                    <p>{o.desc}</p>
                    <div className="cap">{o.cap}</div>
                  </div>
                </div>
              ))}
            </div>
            {loc.events.contact && (
              <div className="events-contact">
                <p>Talk to <strong>{loc.events.contact.name}</strong> about your event at {loc.name}.</p>
                <div className="events-contact-actions">
                  <a href={`tel:${loc.events.contact.phoneHref}`} className="btn btn-primary btn-sm">{loc.events.contact.phone} <span className="arrow">→</span></a>
                  <a href={`mailto:${loc.events.contact.email}`} className="btn btn-ghost btn-sm">{loc.events.contact.email}</a>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="sec gd-dockside">
        <div className="shell">
          <div className="gd-dockside-inner">
            <p className="eyebrow">Bigger events</p>
            <h2 className="h-display">Booking the whole room?</h2>
            <p className="body">For full-venue events, weddings, and large receptions, our dedicated event space, Dockside at Duke&apos;s on South Lake Union, is built for it: a private floor, a full event team, and seating well beyond what the restaurant rooms hold.</p>
            <a href={DOCKSIDE_URL} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Visit Dockside at Duke&apos;s <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
