import './CaseStudy.css';

const CASE = {
  name: 'Logistics Tech · Pan-Nigeria',
  quote:
    'Revenue potential was there, but execution was cracking under pressure. Twelve months later we were running 4× the volume with a team that knew exactly what mattered.',
  stats: [
    { n: '230%', l: 'Revenue increase across verticals' },
    { n: '4×', l: 'YoY operational growth in 12 months' },
    { n: '300%', l: 'Productivity gain through digitization' },
  ],
};

export default function CaseStudy() {
  return (
    <section className="sec case-section" id="cases">
      <div className="case-inner">
        <div className="sec-head">
          <span className="eb">Case Study · {CASE.name}</span>
          <h2>What sequenced strategy <em>actually delivered.</em></h2>
        </div>
        <div className="case-grid">
          <div className="case-narr">
            <div className="case-photo">Client photo · placeholder</div>
            <blockquote className="case-quote">"{CASE.quote}"</blockquote>
            <cite className="eb">— Founder &amp; CEO, Logistics Tech</cite>
          </div>
          <div className="case-stats">
            {CASE.stats.map((s) => (
              <div className="case-stat" key={s.l}>
                <div className="case-n">{s.n}</div>
                <div className="case-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
