'use client';
import { useState, useEffect } from 'react';
import ReservationWidget from '@/components/ReservationWidget';

// A nav-launched reservation popup. Renders a trigger styled like the nav CTA,
// and a modal containing the multi-location reservation widget.
export default function ReserveModal({ locations, triggerClassName = 'btn btn-primary btn-sm', triggerLabel = 'Reserve', showArrow = true, defaultSlug }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button type="button" className={triggerClassName} onClick={() => setOpen(true)}>
        {triggerLabel} {showArrow && <span className="arrow">→</span>}
      </button>

      {open && (
        <div className="reserve-modal-overlay" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Make a reservation">
          <div className="reserve-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="reserve-modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <div className="reserve-modal-head">
              <p className="eyebrow">Reservations</p>
              <h2 className="h-display">Book a table</h2>
              <p className="reserve-modal-sub">Pick a location, date, and time. We&apos;ll hand you off to OpenTable to confirm.</p>
            </div>
            <ReservationWidget locations={locations} defaultSlug={defaultSlug} />
          </div>
        </div>
      )}
    </>
  );
}
