import { useState, useEffect } from 'react';
import yMark from '../assets/y-mark.svg';
import './Header.css';

function scrollTo(id, closeFn) {
  return (e) => {
    e.preventDefault();
    closeFn?.();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`tg-header${scrolled ? ' scrolled' : ''}`}>
        <a className="tg-brand" href="/" onClick={scrollTo('top', close)}>
          <img src={yMark} alt="" width={22} height={26} />
          <span>TalentGen</span>
        </a>
        <nav className="tg-nav">
          <a href="/" onClick={scrollTo('about', close)}>About Us</a>
          <a href="/" onClick={scrollTo('services', close)}>Services</a>
          <a href="/" onClick={scrollTo('approach', close)}>Approach</a>
        </nav>
        <a href="/" onClick={scrollTo('cta', close)} className="btn btn-primary tg-cta-btn">
          Contact Us →
        </a>
        <button className="tg-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      {menuOpen && (
        <div className="tg-mobile-menu">
          <a href="/" onClick={scrollTo('about', close)}>About Us</a>
          <a href="/" onClick={scrollTo('services', close)}>Services</a>
          <a href="/" onClick={scrollTo('approach', close)}>Approach</a>
          <a href="/" onClick={scrollTo('cta', close)} className="btn btn-primary" style={{ textAlign: 'center' }}>
            Contact Us →
          </a>
        </div>
      )}
    </>
  );
}
