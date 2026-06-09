'use client';
import { useState } from 'react';

const LOCATIONS = ['Bellevue', 'Green Lake', 'Kent', 'Lake Union', 'Tacoma Ruston Way', 'Southcenter'];

export default function VipCheckinForm() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');
  const [loc, setLoc] = useState('');

  function handleSubmit() {
    // Placeholder: submission wiring (Gravity Forms / email service) to be connected.
    if (!email || !loc) return;
    setDone(true);
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
      <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Check in <span className="arrow">→</span></button>
    </div>
  );
}
