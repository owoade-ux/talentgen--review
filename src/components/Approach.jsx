import './Approach.css';

const STEPS = [
  { n: '01', k: 'Diagnose', d: 'Two-week discovery across leadership, market, and operating data.' },
  { n: '02', k: 'Design', d: 'A focused strategy tailored to your sector — not a generic template.' },
  { n: '03', k: 'Deploy', d: 'We embed alongside your team for the first 90 days of execution.' },
  { n: '04', k: 'Drive', d: 'Quarterly reviews keep the strategy honest as the business evolves.' },
];

export default function Approach() {
  return (
    <section className="sec approach" id="approach">
      <div className="approach-inner">
        <div className="sec-head">
          <span className="eb">How We Work</span>
          <h2>Four disciplines. <em>One engagement.</em></h2>
        </div>
        <ol className="appr-grid">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="appr-num">{s.n}</span>
              <h4>{s.k}</h4>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
