import './Hero.css';

const HEADLINE = 'Driving Performance, <em>Building Sustainable Advantage.</em>';

export default function Hero() {
  return (
    <section className="hero" id="top">

      {/* Geometric background shapes */}
      <div className="hero-geo" aria-hidden="true">
        <div className="hero-geo-1" />
        <div className="hero-geo-2" />
        <div className="hero-geo-3" />
        <div className="hero-geo-4" />
      </div>

      {/* Floating glow blobs */}
      <div className="hero-blobs" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-top">
          <span className="pill-strap">
            <span className="eb">Pan Nigeria</span>
            <span className="pip" />
            <span className="eb">Lagos</span>
          </span>
        </div>
        <div className="hero-bottom">
          <div className="hero-left">
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
              <a href="#approach" className="btn btn-ghost-light">See how we work</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}
