'use client';
import { useState } from 'react';

// Honest until wired: NEXT_PUBLIC_FORMS_ENABLED=true flips this on once the GF
// bridge has credentials. No fake "welcome aboard" without a real subscribe.
const FORMS_ENABLED = process.env.NEXT_PUBLIC_FORMS_ENABLED === 'true';
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | submitting | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isEmail(email)) { setState('error'); return; }
    setState('submitting');
    try {
      const res = await fetch('/api/vip-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first: 'Newsletter', email }),
      });
      const data = await res.json().catch(() => ({}));
      setState(res.ok && data.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (!FORMS_ENABLED) {
    return (
      <p className="newsletter-soon">
        Email sign-ups open soon. Join the Duke&apos;s Email Club at any location for a 2-for-1 dinner.
      </p>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
      />
      <button type="submit" disabled={state === 'submitting' || state === 'done'}>
        {state === 'done' ? 'Welcome aboard ✓' : state === 'submitting' ? 'Joining…' : 'Join'}
      </button>
      {state === 'error' && (
        <span className="newsletter-err" role="alert" style={{ display: 'block', marginTop: 8, fontSize: 13, color: 'var(--brass-dark)' }}>
          Please enter a valid email, or try again shortly.
        </span>
      )}
    </form>
  );
}
