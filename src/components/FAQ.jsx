import { useState } from 'react';
import './FAQ.css';

const FAQS = [
  {
    q: 'How long is a typical strategy engagement?',
    a: 'Project-based diagnostics run 3–6 weeks. Full strategy design runs 4–8 weeks. Retainer engagements are open-ended and reviewed quarterly.',
  },
  {
    q: 'Do you work with founders pre-Series A?',
    a: "Yes — strategy work is most valuable before scale forces tradeoffs.",
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
    q: 'How does your team work?',
    a: 'Our managing partner leads every engagement personally. And we are proud to have vetted expert associates from the TalentGen network.',
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
