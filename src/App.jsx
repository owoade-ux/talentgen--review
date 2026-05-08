import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoWall from './components/LogoWall';
import Services from './components/Services';
import Approach from './components/Approach';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import CTABlock from './components/CTABlock';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './animations.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoWall />
        <Services />
        <Approach />
        <FAQ />
        <AboutUs />
        <CTABlock />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
