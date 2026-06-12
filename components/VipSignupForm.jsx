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
    // Until the form is wired to a backend, this is a non-functional preview:
    // validate, then show a demo confirmation rather than POSTing to a dead route.
    if (!FORMS_ENABLED) {
      setDone(true);
      return;
    }
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
        <p className="body">{FORMS_ENABLED
          ? <>Your 2-for-1 dinner offer is on its way to your inbox. If it hasn&apos;t arrived within a few minutes, check your spam folder.</>
          : <>This is a preview of the sign-up flow. Once it&apos;s live, your 2-for-1 dinner offer will land in your inbox right after you join.</>}
        </p>
      </div>
    );
  }

  return (
    <div className="vip-form">
      {FORMS_ENABLED
        ? <p className="form-note">A required field is marked with *</p>
        : <p className="form-note">Preview — this sign-up form isn&apos;t collecting entries yet. A required field is marked with *</p>}
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
