'use client';
import { useState } from 'react';

const LOCATIONS = ['Bellevue', 'Green Lake', 'Kent', 'Lake Union', 'Tacoma Ruston Way', 'Southcenter'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

// Flip on by setting NEXT_PUBLIC_FORMS_ENABLED=true in Vercel once the GF REST
// bridge (app/api/vip-signup) has its credentials. Until then the form shows an
// honest "open soon" state instead of a fake success — no submission is faked.
const FORMS_ENABLED = process.env.NEXT_PUBLIC_FORMS_ENABLED === 'true';
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function VipSignupForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [f, setF] = useState({ first: '', email: '', month: '', day: '', year: '', loc: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function handleSubmit() {
    setError('');
    if (!f.first.trim()) { setError('Please enter your first name.'); return; }
    if (!isEmail(f.email)) { setError('Please enter a valid email address.'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/vip-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setDone(true);
      } else {
        setError('Something went wrong on our end. Please try again, or sign up at any location.');
      }
    } catch {
      setError('We couldn\u2019t reach the server. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="form-confirm">
        <div className="check">✓</div>
        <h3>Welcome to the club, {f.first}.</h3>
        <p className="body">Your 2-for-1 dinner offer is on its way to your inbox. If it hasn&apos;t arrived within a few minutes, check your spam folder.</p>
      </div>
    );
  }

  // Honest pre-wiring state: don't collect data we can't deliver on.
  if (!FORMS_ENABLED) {
    return (
      <div className="vip-form">
        <div className="form-note" style={{ marginBottom: 12 }}>
          Online sign-ups open soon. In the meantime, join the Email Club at any
          Duke&apos;s location and start with a 2-for-1 dinner.
        </div>
        <a href="/locations/" className="btn btn-primary btn-lg">Find a location <span className="arrow">→</span></a>
      </div>
    );
  }

  return (
    <div className="vip-form">
      <p className="form-note">A required field is marked with *</p>
      <label className="field">
        <span className="field-label">First name *</span>
        <input type="text" value={f.first} onChange={set('first')} placeholder="First name" required />
      </label>
      <label className="field">
        <span className="field-label">Email *</span>
        <input type="email" value={f.email} onChange={set('email')} placeholder="you@example.com" required />
      </label>
      <fieldset className="field">
        <span className="field-label">Birthday</span>
        <div className="field-row">
          <select value={f.month} onChange={set('month')} aria-label="Birth month">
            <option value="">Month</option>
            {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select value={f.day} onChange={set('day')} aria-label="Birth day">
            <option value="">Day</option>
            {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={f.year} onChange={set('year')} aria-label="Birth year">
            <option value="">Year</option>
            {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </fieldset>
      <label className="field">
        <span className="field-label">Favorite location</span>
        <select value={f.loc} onChange={set('loc')}>
          <option value="">Select a location</option>
          {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </label>
      {error && <p className="form-note" style={{ color: 'var(--brass-dark)' }} role="alert">{error}</p>}
      <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit} disabled={submitting}>
        {submitting ? 'Signing up…' : <>Sign up <span className="arrow">→</span></>}
      </button>
    </div>
  );
}
