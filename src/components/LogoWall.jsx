import './LogoWall.css';

const LOGOS = ['Schlumberger', 'FrieslandCampina', 'Medlog', 'TSL Metroline'];

export default function LogoWall() {
  return (
    <div className="logo-wall-wrap">
      <div className="logos">
        <span className="eb logos-label">Trusted across</span>
        {LOGOS.map((l) => (
          <span className="lg" key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
