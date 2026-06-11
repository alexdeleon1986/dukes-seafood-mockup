'use client';
import { useState, useRef, useEffect } from 'react';

/**
 * Hero background, facade pattern. Renders a still poster immediately and injects
 * the Vimeo iframe only after the page is idle/interactive — so the heavy
 * third-party embed never blocks the initial paint (LCP).
 *
 * On mobile (<=768px) or with prefers-reduced-motion, the iframe is never loaded;
 * the poster is the hero. This matches the old CSS that hid the embed on mobile
 * and saves phones the Vimeo payload entirely.
 *
 * The iframe keeps id="hero-vimeo" so the existing HeroVideoControls can reach it.
 * When the iframe finishes loading we dispatch a 'hero-video-ready' window event
 * so the control can enable itself; until then the control stays disabled and
 * can't become a dead button.
 */

const VIMEO_SRC =
  'https://player.vimeo.com/video/1073729759?background=1&autoplay=1&loop=1&muted=1&autopause=0';
const POSTER = '/images/tacoma-pilings.jpg';
const MOBILE_QUERY = '(max-width: 768px)';

export default function HeroVideoBackground() {
  const [showIframe, setShowIframe] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    if (prefersReduced || isMobile) return;

    const inject = () => {
      if (injectedRef.current) return;
      injectedRef.current = true;
      setShowIframe(true);
    };

    const ric = window.requestIdleCallback;
    let idleId, timerId;
    if (typeof ric === 'function') {
      idleId = ric(inject, { timeout: 2500 });
    } else {
      timerId = window.setTimeout(inject, 1200);
    }
    const safety = window.setTimeout(inject, 3000);

    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
      window.clearTimeout(safety);
    };
  }, []);

  function handleLoad() {
    setLoaded(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hero-video-ready'));
    }
  }

  return (
    <>
      <div
        className="hero-video-poster"
        aria-hidden="true"
        style={{ backgroundImage: `url(${POSTER})` }}
      />
      {showIframe && (
        <div className={`hero-video-embed${loaded ? ' is-loaded' : ''}`} aria-hidden="true">
          <iframe
            id="hero-vimeo"
            src={VIMEO_SRC}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Duke's hero"
            onLoad={handleLoad}
          />
        </div>
      )}
      <div className="scrim"></div>
    </>
  );
}
