import './Engagement.css';

export default function Engagement() {
  return (
    <section className="sec engagement" id="engage">
      <div className="engage-inner">
        <div className="sec-head">
          <span className="eb">Engagement Models</span>
          <h2>Two ways to <em>work with us.</em></h2>
        </div>
        <div className="eng-grid">
          <article className="eng-card light">
            <span className="eb">Project-Based</span>
            <h3>Defined scope. Clear deliverables.</h3>
            <p>Best for one-time strategy sprints with a clear start, end, and decision moment.</p>
            <ul>
              <li>Scoped engagement</li>
              <li>Fixed deliverables</li>
              <li>Clear timelines</li>
              <li>Milestone based</li>
            </ul>
          </article>
          <article className="eng-card brand">
            <span className="eb" style={{ color: 'rgba(255,255,255,0.7)' }}>Retainership</span>
            <h3>Embedded execution. Continuous support.</h3>
            <p>Best for founders scaling through inflection points — strategy woven into your business rhythm.</p>
            <ul>
              <li>Monthly hours</li>
              <li>Priority access</li>
              <li>Embedded partnership</li>
              <li>Ongoing monitoring</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
