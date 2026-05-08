import './Hero.css';

const HEADLINE = 'Driving Performance, <em>Building Sustainable Advantage.</em>';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <span className="pill-strap">
          <span className="eb">Corporate Strategy</span>
          <span className="pip" />
          <span className="eb">Lagos · Pan-Africa</span>
        </span>
        <h1 className="hero-head" dangerouslySetInnerHTML={{ __html: HEADLINE }} />
      </div>
      <div className="hero-side">
        <p>
          Strategy advisory for founders who already have momentum and need the
          operating clarity to channel it. We diagnose, design, and stay until
          the plan is moving.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn btn-primary">Schedule a Diagnostic →</a>
          <a href="#approach" className="btn btn-ghost">See how we work</a>
        </div>
      </div>
    </section>
  );
}
