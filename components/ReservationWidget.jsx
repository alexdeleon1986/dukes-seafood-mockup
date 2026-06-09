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
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function ReservationWidget({ rid, name }) {
  const [covers, setCovers] = useState(2);
  const [date, setDate] = useState(todayISO());
  const [time, setTime] = useState('19:00');
  const [booked, setBooked] = useState(false);

  const bookUrl = useMemo(() => {
    // OpenTable deep link with party size, date, and time prefilled.
    const dateTime = `${date}T${time}`;
    const params = new URLSearchParams({
      restref: String(rid),
      datetime: dateTime,
      covers: String(covers),
      lang: 'en-US',
    });
    return `https://www.opentable.com/restref/client/?rid=${rid}&${params.toString()}`;
  }, [rid, date, time, covers]);

  function handleBook() {
    window.open(bookUrl, '_blank', 'noopener,noreferrer');
    setBooked(true);
  }

  if (booked) {
    return (
      <div className="reserve-form">
        <div className="rf-confirm">
          <div className="check">✓</div>
          <div className="val" style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>Opening OpenTable</div>
          <p className="rf-help">
            We sent your request for {covers} {covers === 1 ? 'guest' : 'guests'} to OpenTable in a new tab.
            Pick your spot there to confirm.
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
          Book at {name} <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}
