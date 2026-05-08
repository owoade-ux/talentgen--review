import './Approach.css';

const STEPS = [
  { n: '01', k: 'Diagnose', d: 'Data driven analysis of your business position to design targeted initiatives.' },
  { n: '02', k: 'Design', d: 'Personalized solutions built around your unique business context.' },
  { n: '03', k: 'Deploy', d: 'We work alongside you every step, your team is always carried along.' },
  { n: '04', k: 'Drive', d: 'Ongoing tracking ensures success is embedded for the long term.' },
];

export default function Approach() {
  return (
    <section className="sec approach" id="approach">
      <div className="approach-inner">
        <div className="sec-head reveal">
          <span className="eb">Our Approach</span>
          <h2>Four disciplines. <em>One engagement.</em></h2>
        </div>
        <ol className="appr-grid">
          {STEPS.map((s, i) => (
            <li key={s.n} className={`reveal d${i + 1}`}>
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
