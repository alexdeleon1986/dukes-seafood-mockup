'use client';
import { useState } from 'react';

const LOCATIONS = ['Bellevue', 'Green Lake', 'Kent', 'Lake Union', 'Tacoma Ruston Way', 'Southcenter'];

// Honest until wired: NEXT_PUBLIC_FORMS_ENABLED=true flips this on once the GF
// bridge has credentials. No fake check-in confirmation without a real submit.
const FORMS_ENABLED = process.env.NEXT_PUBLIC_FORMS_ENABLED === 'true';
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function VipCheckinForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [loc, setLoc] = useState('');

  async function handleSubmit() {
    setError('');
    if (!isEmail(email)) { setError('Please enter a valid email address.'); return; }
    if (!loc) { setError('Please choose the location where you dined.'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/vip-checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, loc }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setDone(true);
      } else {
        setError('Something went wrong on our end. Please try again in a moment.');
      }
    } catch {
      setError('We couldn\u2019t reach the server. Please try again shortly.');
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="form-confirm">
        <div className="check">✓</div>
        <h3>You&apos;re checked in.</h3>
        <p className="body">Watch your inbox over the next 24 hours for an offer from Duke. If it hasn&apos;t arrived, check your spam folder.</p>
      </div>
    );
  }

  if (!FORMS_ENABLED) {
    return (
      <div className="vip-form">
        <div className="form-note" style={{ marginBottom: 12 }}>
          Online check-in opens soon. Already an Email Club member? Your check-in
          reward is applied when you dine and show your email at the table.
        </div>
        <a href="/locations/" className="btn btn-primary btn-lg">Find a location <span className="arrow">→</span></a>
      </div>
    );
  }

  return (
    <div className="vip-form">
      <p className="form-note">A required field is marked with *</p>
      <label className="field">
        <span className="field-label">Email *</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
      </label>
      <label className="field">
        <span className="field-label">Restaurant location *</span>
        <select value={loc} onChange={(e) => setLoc(e.target.value)} required>
          <option value="">Select a location</option>
          {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </label>
      {error && <p className="form-note" style={{ color: 'var(--brass-dark)' }} role="alert">{error}</p>}
      <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit} disabled={submitting}>
        {submitting ? 'Checking in…' : <>Check in <span className="arrow">→</span></>}
      </button>
    </div>
  );
}
