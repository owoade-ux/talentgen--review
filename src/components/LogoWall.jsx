import britishCouncil from '../assets/logo-british-council.png';
import lush from '../assets/logo-lush.jpg';
import medlog from '../assets/logo-medlog.png';
import friesland from '../assets/logo-friesland.jpg';
import schlumberger from '../assets/logo-schlumberger.png';
import './LogoWall.css';

const LOGOS = [
  { src: schlumberger, alt: 'Schlumberger' },
  { src: friesland, alt: 'FrieslandCampina' },
  { src: medlog, alt: 'Medlog' },
  { src: britishCouncil, alt: 'British Council' },
  { src: lush, alt: 'Lush' },
];

export default function LogoWall() {
  return (
    <div className="logo-wall-wrap">
      <div className="logos">
        <span className="eb logos-label">Trusted across</span>
        {LOGOS.map((l) => (
          <img key={l.alt} src={l.src} alt={l.alt} className="lg-img" />
        ))}
      </div>
    </div>
  );
}
