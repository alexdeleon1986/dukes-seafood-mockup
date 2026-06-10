'use client';
import { useState, useCallback } from 'react';

/**
 * Pause/play control for the background hero video (Vimeo iframe).
 *
 * The video is a muted, looping background embed, so there's no sound to
 * control — only play/pause. We talk to the iframe with Vimeo's postMessage
 * API (no SDK needed): posting {method:'pause'} / {method:'play'} to the
 * player's contentWindow.
 *
 * Hidden on mobile via CSS, where the video doesn't render at all.
 */
export default function HeroVideoControls({ iframeId = 'hero-vimeo' }) {
  const [paused, setPaused] = useState(false);

  const toggle = useCallback(() => {
    const iframe = document.getElementById(iframeId);
    const win = iframe && iframe.contentWindow;
    if (!win) return;
    const method = paused ? 'play' : 'pause';
    win.postMessage(JSON.stringify({ method }), 'https://player.vimeo.com');
    setPaused((p) => !p);
  }, [iframeId, paused]);

  return (
    <div className="hv-controls" aria-label="Video controls">
      <button type="button" onClick={toggle} aria-pressed={paused} title={paused ? 'Play video' : 'Pause video'}>
        {paused ? '►' : '❚❚'}
      </button>
    </div>
  );
}
