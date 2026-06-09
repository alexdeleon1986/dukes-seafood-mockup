'use client';
import { useState } from 'react';

const LOCATIONS = ['Bellevue', 'Green Lake', 'Kent', 'Lake Union', 'Tacoma Ruston Way', 'Southcenter'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

export default function VipSignupForm() {
  const [done, setDone] = useState(false);
  const [f, setF] = useState({ first: '', email: '', month: '', day: '', year: '', loc: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  function handleSubmit() {
    // Placeholder: submission wiring (Gravity Forms / email service) to be connected.
    if (!f.first || !f.email) return;
    setDone(true);
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
      <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Sign up <span className="arrow">→</span></button>
    </div>
  );
}
