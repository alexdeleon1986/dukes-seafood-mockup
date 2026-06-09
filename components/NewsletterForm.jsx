'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [joined, setJoined] = useState(false);
  return (
    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setJoined(true); }}>
      <input type="email" placeholder="your@email.com" required aria-label="Email address" />
      <button type="submit">{joined ? 'Welcome aboard ✓' : 'Join'}</button>
    </form>
  );
}
