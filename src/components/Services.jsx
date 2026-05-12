import './Services.css';

const TRANSFORMATION = [
  {
    t: 'Strategy Planning',
    d: 'Translate boardroom ambition into a measurable roadmap your organisation can execute.',
    items: ['Vision & OKR design', 'Strategy execution planning'],
  },
  {
    t: 'Operating Model Design',
    d: 'Lean structures, governance and workflows built for scale.',
    items: ['Operating model design', 'Org structure design', 'Governance systems'],
  },
  {
    t: 'Process Reengineering',
    d: 'We redesign the processes that slow your organisation down and rebuild them for performance.',
    items: ['Process mapping & audit', 'Workflow optimisation', 'Digital enablement'],
  },
];

const PEOPLE = [
  {
    t: 'Workforce Planning',
    d: 'Align your people capacity with your business strategy, now and for the future.',
    items: ['Headcount planning', 'Skills gap analysis', 'Succession planning'],
  },
  {
    t: 'Capability Design & Development',
    d: 'Build the skills and structures your organisation needs to perform at the next level.',
    items: ['Competency frameworks', 'Learning & development design', 'Leadership programmes'],
  },
  {
    t: 'Specialised Recruitment',
    d: 'The right people in the right roles, recruited with precision and placed with purpose.',
    items: ['Executive search', 'Role profiling', 'Onboarding design'],
  },
  {
    t: 'HR Advisory',
    d: 'Practical HR guidance that supports your people strategy and keeps your business compliant.',
    items: ['HR policy design', 'Performance management', 'Culture & engagement'],
  },
];

function ServiceCard({ s, delay }) {
  return (
    <article className={`svc-card reveal d${delay}`}>
      <h3>{s.t}</h3>
      <p>{s.d}</p>
      <ul>
        {s.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <section className="sec services" id="services">
      <div className="services-inner">

        <div className="svc-line-head reveal">
          <span className="eb">Service Line 01</span>
          <h2 className="svc-line-title">Transformation</h2>
          <p className="svc-line-sub">
            Strategy and operational advisory for organisations navigating growth,
            complexity, and change.
          </p>
        </div>
        <div className="svc-grid">
          {TRANSFORMATION.map((s, i) => (
            <ServiceCard key={s.t} s={s} delay={i + 1} />
          ))}
        </div>

        <div className="svc-line-head reveal" style={{ marginTop: 80 }}>
          <span className="eb">Service Line 02</span>
          <h2 className="svc-line-title">People &amp; Business Advisory</h2>
          <p className="svc-line-sub">
            Human capital solutions that align your people strategy with your
            business goals.
          </p>
        </div>
        <div className="svc-grid four-col">
          {PEOPLE.map((s, i) => (
            <ServiceCard key={s.t} s={s} delay={(i % 4) + 1} />
          ))}
        </div>

      </div>
    </section>
  );
}
