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

export default function App() {
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
