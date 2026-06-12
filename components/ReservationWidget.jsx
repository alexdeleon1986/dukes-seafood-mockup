'use client';
import { useState, useMemo } from 'react';

// Time-of-day tiles. Each maps to a concrete time we hand to OpenTable.
const TIME_SLOTS = [
  { label: '11:30a', time: '11:30' },
  { label: '12:00p', time: '12:00' },
  { label: '1:00p', time: '13:00' },
  { label: '5:00p', time: '17:00' },
  { label: '6:00p', time: '18:00' },
  { label: '6:30p', time: '18:30' },
  { label: '7:00p', time: '19:00' },
  { label: '7:30p', time: '19:30' },
  { label: '8:00p', time: '20:00' },
];

function todayISO() {
  // Local-time date, not UTC. toISOString() rolls to tomorrow after 5pm Pacific,
  // which blocked same-day booking during the dinner rush.
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Props:
//   rid, name, slug  -> single-location mode (location page)
//   locations: [{slug,name,rid}]  -> multi-location mode (adds a picker)
export default function ReservationWidget({ rid, name, slug, locations, defaultSlug }) {
  const isMulti = Array.isArray(locations) && locations.length > 0;
  const initialSlug = isMulti
    ? (locations.some((l) => l.slug === defaultSlug) ? defaultSlug : locations[0].slug)
    : null;
  const [locSlug, setLocSlug] = useState(initialSlug);
  const [covers, setCovers] = useState(2);
  const [date, setDate] = useState(todayISO());
  const [time, setTime] = useState('19:00');
  const [booked, setBooked] = useState(false);

  // Resolve the active rid/name from either the picker or the fixed props.
  const active = useMemo(() => {
    if (isMulti) {
      const l = locations.find((x) => x.slug === locSlug) || locations[0];
      return { rid: l.rid, name: l.name, slug: l.slug };
    }
    return { rid, name, slug: slug ?? null };
  }, [isMulti, locations, locSlug, rid, name, slug]);

  const bookUrl = useMemo(() => {
    const dateTime = `${date}T${time}`;
    // OpenTable restref/client endpoint: partysize (not covers), single restref
    // (no duplicate rid in the path). ot_source attributes the cover to
    // "Your Network" (the cheaper, restaurant-owned class tracked in the dashboard).
    const params = new URLSearchParams({
      restref: String(active.rid),
      datetime: dateTime,
      partysize: String(covers),
      ot_source: 'Restaurant website',
      lang: 'en-US',
    });
    return `https://www.opentable.com/restref/client/?${params.toString()}`;
  }, [active.rid, date, time, covers]);

  function handleBook() {
    // Fire-and-forget GA4 handoff event (no-op if gtag isn't loaded yet).
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'reserve_handoff', {
        location_slug: active.slug ?? null,
        location_name: active.name,
        party_size: covers,
        reservation_date: date,
      });
    }
    window.open(bookUrl, '_blank', 'noopener,noreferrer');
    setBooked(true);
  }

  if (booked) {
    return (
      <div className="reserve-form">
        <div className="rf-confirm">
          <div className="check">✓</div>
          <div className="val" style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>OpenTable is open in a new tab</div>
          <p className="rf-help">
            We opened OpenTable with your details filled in: {covers} {covers === 1 ? 'guest' : 'guests'} at {active.name}.
            Finish there to confirm your table &mdash; then we&apos;ll see you soon.
          </p>
          <button className="rf-time" style={{ marginTop: 12, padding: '10px 18px' }} onClick={() => setBooked(false)}>
            Change details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reserve-form">
      {isMulti && (
        <div className="rf-row rf-row-loc">
          <div className="rf-cell">
            <span className="lbl">Location</span>
            <select className="val" value={locSlug} onChange={(e) => setLocSlug(e.target.value)} aria-label="Location">
              {locations.map((l) => (
                <option key={l.slug} value={l.slug}>{l.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="rf-row">
        <div className="rf-cell">
          <span className="lbl">Party size</span>
          <select className="val" value={covers} onChange={(e) => setCovers(Number(e.target.value))} aria-label="Party size">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
            ))}
            <option value={13}>13+ guests</option>
          </select>
        </div>
        <div className="rf-cell">
          <span className="lbl">Date</span>
          <input className="val" type="date" value={date} min={todayISO()} onChange={(e) => setDate(e.target.value)} aria-label="Reservation date" />
        </div>
      </div>

      <div className="rf-times" role="group" aria-label="Time">
        {TIME_SLOTS.map((slot) => (
          <button
            key={slot.time}
            type="button"
            className={`rf-time ${time === slot.time ? 'active' : ''}`}
            aria-pressed={time === slot.time}
            onClick={() => setTime(slot.time)}
          >
            {slot.label}
          </button>
        ))}
      </div>

      <div className="rf-submit">
        <span className="rf-help">Walk-ins welcome at the bar.</span>
        <button type="button" className="btn btn-primary btn-lg" onClick={handleBook}>
          Book at {active.name} <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}
