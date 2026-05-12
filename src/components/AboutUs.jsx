import { useState } from 'react';
import owoadePhoto from '../assets/owoade.jpg';
import './AboutUs.css';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [f, setF] = useState({ name: '', email: '', phone: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://formspree.io/f/xrejrvoq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: f.name, email: f.email, phone: f.phone, message: f.message }),
    });
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
  { title: 'Integrity', desc: 'We do what we say and say what we mean. Our clients trust us with their most sensitive business challenges and we honour that trust in every interaction.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standard in everything we deliver, from the first diagnostic conversation to the final handover.' },
  { title: 'Quality', desc: 'Our work is thorough, precise, and built to last. We don\'t cut corners, and we don\'t deliver work we wouldn\'t stake our reputation on.' },
  { title: 'Respect', desc: 'We treat every client, partner, and colleague with dignity. Diverse perspectives make our work stronger and we listen before we lead.' },
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
          <div className="sec-head reveal">
            <span className="eb">About Us</span>
            <h2>Who We Are</h2>
          </div>
          <div className="about-grid">
            <div className="about-portrait reveal-left">
              <img src={owoadePhoto} alt="" />
            </div>
            <div className="about-body reveal-right">
              <div className="about-advisor">
                <div className="about-advisor-name">
                  <span className="eb">Partner</span>
                  <h3>Owoade Yussuff</h3>
                </div>
                <p>
                  Owoade is a business transformation and HR advisory executive with
                  14+ years of experience helping organisations build the structures,
                  systems, and talent they need to grow.
                </p>
                <p>
                  Her career spans strategy and transformation leadership at a leading
                  technology-enabled logistics business, HR Business Partner and talent
                  leadership roles at FrieslandCampina, and cross regional HR operations
                  at Schlumberger, one of the world's largest energy services
                  multinationals across Dubai and Kuala Lumpur. This combination of
                  multinational discipline and African market experience gives her a
                  practical, globally informed perspective on what it takes to build
                  organisations that perform.
                </p>
                <p>
                  She specialises in business partnering, change management, performance
                  governance, organisational design, and talent strategy working with
                  founders, executives, and leadership teams to turn strategic ambition
                  into measurable execution. She holds a Master's degree in Human
                  Resource Management from the University of Wollongong, Australia, and
                  is a Certified Scrum Product Owner (CSPO®).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Values */}
      <div className="sec about-values">
        <div className="about-inner">
          <div className="sec-head reveal">
            <span className="eb">Our Vision &amp; Values</span>
            <h2>What drives <em>everything we do.</em></h2>
          </div>
          <div className="vision-block reveal d1">
            <span className="eb">Our Vision</span>
            <p className="vision-text">
              To be the most trusted strategic partner for African founders and
              organisations building for the long term.
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className={`value-card reveal d${i + 1}`}>
                <span className="value-num">0{i + 1}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
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
                  <span className="contact-option-val">+2349032045191</span>
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
