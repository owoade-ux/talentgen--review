import { useState } from 'react';
import owoadePhoto from '../assets/owoade.jpg';
import './AboutUs.css';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [f, setF] = useState({ name: '', email: '', phone: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      {submitted ? (
        <div className="contact-form-success">
          <span className="eb">Message received</span>
          <h4>Thank you, {f.name || 'there'}.</h4>
          <p>We'll be in touch within one business day.</p>
        </div>
      ) : (
        <>
          <h4>Send us a message</h4>
          <label>Full name<input value={f.name} onChange={set('name')} placeholder="Your name" required /></label>
          <label>Email address<input type="email" value={f.email} onChange={set('email')} placeholder="you@company.com" required /></label>
          <label>Phone number<input type="tel" value={f.phone} onChange={set('phone')} placeholder="Your phone number" /></label>
          <label>Message<textarea value={f.message} onChange={set('message')} placeholder="How can we help you?" rows={4} /></label>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Send Message →
          </button>
        </>
      )}
    </form>
  );
}

const VALUES = [
  { title: 'Integrity', desc: 'We do what we say and say what we mean. Our clients trust us with their most sensitive business challenges — we honour that trust in every interaction.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standard in everything we deliver — from the first diagnostic conversation to the final handover.' },
  { title: 'Quality', desc: 'Our work is thorough, precise, and built to last. We don\'t cut corners, and we don\'t deliver work we wouldn\'t stake our reputation on.' },
  { title: 'Respect', desc: 'We treat every client, partner, and colleague with dignity. Diverse perspectives make our work stronger — we listen before we lead.' },
  { title: 'Customer Focus', desc: 'Our clients\' success is our success. Every recommendation we make is shaped by a genuine understanding of their goals, constraints, and context.' },
];

const TESTIMONIALS = [
  { quote: 'Placeholder — add a client testimonial here.', name: 'Client Name', role: 'Title, Company' },
  { quote: 'Placeholder — add a client testimonial here.', name: 'Client Name', role: 'Title, Company' },
  { quote: 'Placeholder — add a client testimonial here.', name: 'Client Name', role: 'Title, Company' },
];

export default function AboutUs() {
  return (
    <section className="about-us" id="about">

      {/* Who We Are */}
      <div className="sec about-who">
        <div className="about-inner">
          <div className="sec-head">
            <span className="eb">About Us</span>
            <h2>Who We Are</h2>
          </div>
          <div className="about-grid">
            <div className="about-portrait">
              <img src={owoadePhoto} alt="Owoade Yussuff — Managing Partner, TalentGen" />
            </div>
            <div className="about-body">
              <p className="about-intro">
                TalentGen is a Lagos-based strategic advisory firm serving startups
                and mid-sized organisations across Africa and the Middle East. We
                operate at the intersection of corporate strategy, operations, and
                human capital — translating executive vision into operating models,
                talent systems, and measurable commercial performance.
              </p>
              <div className="about-advisor">
                <div className="about-advisor-name">
                  <span className="eb">Managing Partner</span>
                  <h3>Owoade Yussuff</h3>
                  <p className="about-advisor-title">Strategy &amp; Transformation Advisor</p>
                </div>
                <p>
                  Owoade has a 14-year track record of partnering with CEOs and
                  founders to turn strategic intent into operating reality. She has
                  led transformations across Logistics, FMCG, Oil &amp; Gas, and
                  Technology — bridging the gap between boardroom ambition and
                  front-line execution.
                </p>
                <div className="about-stats">
                  <div><span className="stat-n">14+</span><span className="stat-l">Years of experience</span></div>
                  <div><span className="stat-n">90</span><span className="stat-l">FTEs placed</span></div>
                  <div><span className="stat-n">4</span><span className="stat-l">Industry sectors</span></div>
                </div>
                <div className="about-prev">
                  <span className="eb">Previous engagements</span>
                  <div className="prev-list">
                    {['Schlumberger', 'FrieslandCampina', 'Medlog', 'TSL Metroline'].map((c) => (
                      <span key={c} className="prev-tag">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="about-creds">
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
        </div>
      </div>

      {/* Vision & Values */}
      <div className="sec about-values">
        <div className="about-inner">
          <div className="sec-head">
            <span className="eb">Our Vision &amp; Values</span>
            <h2>What drives <em>everything we do.</em></h2>
          </div>
          <div className="vision-block">
            <span className="eb">Our Vision</span>
            <p className="vision-text">
              To be the most trusted strategic partner for African founders and
              organisations building for the long term.
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-num">0{i + 1}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="sec about-testimonials">
        <div className="about-inner">
          <div className="sec-head">
            <span className="eb">Client Testimonials</span>
            <h2>What our clients <em>say.</em></h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-attr">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="sec about-contact" id="contact">
        <div className="about-inner">
          <div className="sec-head">
            <span className="eb">Contact Us</span>
            <h2>Let&rsquo;s start <em>a conversation.</em></h2>
          </div>
          <div className="contact-layout">

            {/* Left — form */}
            <ContactForm />

            {/* Right — direct options */}
            <div className="contact-options">
              <p className="contact-options-intro">
                Prefer to reach us directly? Choose an option below.
              </p>
              <a href="mailto:info@talentgen.com.ng" className="contact-option">
                <div className="contact-option-icon">✉</div>
                <div>
                  <span className="eb">Send an email</span>
                  <span className="contact-option-val">info@talentgen.com.ng</span>
                </div>
              </a>
              <div className="contact-option">
                <div className="contact-option-icon">✆</div>
                <div>
                  <span className="eb">Call us</span>
                  <span className="contact-option-val">+234 — placeholder</span>
                </div>
              </div>
              <div className="contact-option">
                <div className="contact-option-icon">⊙</div>
                <div>
                  <span className="eb">Location</span>
                  <span className="contact-option-val">Lekki Phase 1, Lagos, Nigeria</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
