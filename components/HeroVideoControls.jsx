'use client';
import { useState, useEffect, useCallback } from 'react';

/**
 * Pause/play control for the background hero video (Vimeo iframe).
 *
 * The iframe is injected lazily by HeroVideoBackground (facade pattern), so this
 * control stays disabled until it hears the 'hero-video-ready' event. That way it
 * can never be a dead button pointing at an iframe that hasn't loaded — and the
 * paused state only flips when a postMessage actually went out.
 *
 * The video is a muted, looping background embed, so there's nothing to control
 * but play/pause. We talk to the iframe with Vimeo's postMessage API (no SDK):
 * posting {method:'pause'} / {method:'play'} to the player's contentWindow.
 *
 * Hidden on mobile via CSS, where the video never loads.
 */
export default function HeroVideoControls({ iframeId = 'hero-vimeo' }) {
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // If the iframe already loaded before this mounted, enable immediately.
    if (document.getElementById(iframeId)) setReady(true);
    const onReady = () => setReady(true);
    window.addEventListener('hero-video-ready', onReady);
    return () => window.removeEventListener('hero-video-ready', onReady);
  }, [iframeId]);

  const toggle = useCallback(() => {
    const iframe = document.getElementById(iframeId);
    const win = iframe && iframe.contentWindow;
    if (!win) return; // iframe not live yet — do nothing, don't flip state
    const method = paused ? 'play' : 'pause';
    win.postMessage(JSON.stringify({ method }), 'https://player.vimeo.com');
    setPaused((p) => !p);
  }, [iframeId, paused]);

  // Don't render the control until there's a video to control.
  if (!ready) return null;

  return (
    <div className="hv-controls" aria-label="Video controls">
      <button type="button" onClick={toggle} aria-pressed={paused} title={paused ? 'Play video' : 'Pause video'}>
        {paused ? '►' : '❚❚'}
      </button>
    </div>
  );
}
