import { useState } from 'react';
import './CTABlock.css';

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [f, setF] = useState({ name: '', company: '', email: '', stage: 'Pre-launch / 0–10 people', note: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <form className="cta-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      {submitted ? (
        <>
          <span className="eb">Received</span>
          <h3>Thank you, {f.name || 'there'}.</h3>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)' }}>
            We'll reach out within one business day to lock the diagnostic.
          </p>
        </>
      ) : (
        <>
          <h3>Schedule An Exploratory Call</h3>
          <label>
            Full name
            <input value={f.name} onChange={set('name')} placeholder="Your name" required />
          </label>
          <label>
            Company
            <input value={f.company} onChange={set('company')} placeholder="Your company" />
          </label>
          <label>
            Work email
            <input type="email" value={f.email} onChange={set('email')} placeholder="you@company.com" required />
          </label>
          <label>
            Team stage
            <select value={f.stage} onChange={set('stage')}>
              <option>Pre-launch / 0–10 people</option>
              <option>Scaling / 10–50 people</option>
              <option>Mature / 50–250 people</option>
              <option>250+</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Schedule Your Exploratory Call →
          </button>
          <small>We respond within one business day.</small>
        </>
      )}
    </form>
  );
}

export default function CTABlock() {
  return (
    <section className="sec cta-section" id="cta">
      <div className="cta-block">
        <div className="cta-copy">
          <span className="eb" style={{ color: 'rgba(255,255,255,0.6)' }}>Schedule An Exploratory Call</span>
          <h2>
            Let&rsquo;s map your <em>next 12 months.</em>
          </h2>
          <p>
            A 30-minute diagnostic — no slides, no pitch. We listen, ask sharp
            questions, and tell you whether we&rsquo;re the right partner.
          </p>
          <div className="cta-contacts">
            <span className="btn btn-outline-light" style={{ cursor: 'default' }}>info@talentgen.com.ng</span>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
