'use client';
import { useEffect, useRef } from 'react';

/**
 * OpenTable reservation widget, embedded per location.
 * Uses OpenTable's official reserve-widget iframe build. The `rid` is the
 * restaurant's OpenTable ID. A direct booking link is always rendered as a
 * fallback (and in case the widget is blocked on a non-whitelisted domain).
 */
export default function ReservationWidget({ rid, name }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!rid || !mountRef.current) return;
    const mount = mountRef.current;
    mount.innerHTML = '';

    // OpenTable's standard embeddable widget iframe.
    const iframe = document.createElement('iframe');
    iframe.title = `Reserve a table at Duke's ${name}`;
    iframe.src =
      `https://www.opentable.com/widget/reservation/canvas?rid=${rid}` +
      `&type=standard&theme=tall&color=1&iframe=true&domain=com&lang=en-US&newtab=false`;
    iframe.width = '100%';
    iframe.height = '300';
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.style.display = 'block';
    mount.appendChild(iframe);

    return () => { mount.innerHTML = ''; };
  }, [rid, name]);

  const directUrl = `https://www.opentable.com/restref/client/?rid=${rid}&restref=${rid}`;

  return (
    <div className="reserve-form">
      <div ref={mountRef} className="ot-mount" aria-live="polite" />
      <a
        href={directUrl}
        className="btn btn-primary btn-lg ot-fallback"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book on OpenTable <span className="arrow">→</span>
      </a>
    </div>
  );
}
