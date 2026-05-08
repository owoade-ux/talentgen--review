import { useState } from 'react';
import './FAQ.css';

const FAQS = [
  {
    q: 'How long is a typical strategy engagement?',
    a: 'Project-based diagnostics run 4–6 weeks. Full strategy design runs 8–12 weeks. Retainer engagements are open-ended and reviewed quarterly.',
  },
  {
    q: 'Do you work with founders pre-Series A?',
    a: "Yes — strategy work is most valuable before scale forces tradeoffs. We've supported teams from seed through Series C.",
  },
  {
    q: 'Can you work remotely?',
    a: "We're Lagos-based and prefer at least one onsite week per engagement. Beyond that, most work happens over video and shared Notion / Slack.",
  },
  {
    q: 'What does engagement cost?',
    a: "Fees are based on scope, complexity, and timeline. Schedule a diagnostic and we'll send a tailored proposal within 48 hours.",
  },
  {
    q: 'Who actually does the work?',
    a: 'Owoade leads every engagement personally. For larger scopes we bring in vetted associates from the TalentGen network.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec faq-section">
      <div className="faq-inner">
        <div className="sec-head">
          <span className="eb">FAQ</span>
          <h2>Questions founders <em>actually ask.</em></h2>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              className={`faq-item${open === i ? ' open' : ''}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span>{f.q}</span>
                <span className="faq-toggle">{open === i ? '–' : '+'}</span>
              </div>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
