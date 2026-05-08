import { useState, useEffect } from 'react';
import yMark from '../assets/y-mark.svg';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`tg-header${scrolled ? ' scrolled' : ''}`}>
      <a className="tg-brand" href="#top">
        <img src={yMark} alt="" width={22} height={26} />
        <span>TalentGen</span>
      </a>
      <nav className="tg-nav">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#approach">Approach</a>
      </nav>
      <a href="#cta" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 13 }}>
        Contact Us →
      </a>
    </header>
  );
}
