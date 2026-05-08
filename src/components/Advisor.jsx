import owoadePhoto from '../assets/owoade.jpg';
import './Advisor.css';

export default function Advisor() {
  return (
    <section className="sec advisor-section" id="advisor">
      <div className="advisor-inner">
        <div className="sec-head">
          <span className="eb">The Advisor</span>
          <h2>14 years. Three sectors. <em>One focus.</em></h2>
        </div>
        <div className="advisor-grid">
          <div className="advisor-portrait">
            <img src={owoadePhoto} alt="Owoade Yussuff — Managing Partner, TalentGen" />
          </div>
          <div className="advisor-body">
            <div className="advisor-name-block">
              <span className="eb">Managing Partner</span>
              <h3>Owoade Yussuff</h3>
              <p className="advisor-title">Strategy &amp; Transformation Advisor</p>
            </div>
            <p className="advisor-bio">
              Owoade has a 14-year track record of partnering with CEOs and
              founders to turn strategic intent into operating reality. She has
              led transformations across Logistics, FMCG, Oil &amp; Gas, and
              Technology — bridging the gap between boardroom ambition and
              front-line execution.
            </p>
            <div className="advisor-stats">
              <div>
                <span className="stat-n">14+</span>
                <span className="stat-l">Years of experience</span>
              </div>
              <div>
                <span className="stat-n">90</span>
                <span className="stat-l">FTEs placed</span>
              </div>
              <div>
                <span className="stat-n">4</span>
                <span className="stat-l">Industry sectors</span>
              </div>
            </div>
            <div className="advisor-prev">
              <span className="eb">Previous engagements</span>
              <div className="prev-list">
                {['Schlumberger', 'FrieslandCampina', 'Medlog', 'TSL Metroline'].map((c) => (
                  <span key={c} className="prev-tag">{c}</span>
                ))}
              </div>
            </div>
            <div className="advisor-creds">
              <span className="eb">Credentials</span>
              <ul>
                <li>MSHRM — University of Wollongong</li>
                <li>Certified Scrum Product Owner (CSPO)</li>
                <li>Lagos-based · Pan-Africa &amp; Middle East reach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
