import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="newsletter-section">
      <div className="newsletter">
        <h4>Quarterly notes from the engagement floor.</h4>
        {done ? (
          <p className="newsletter-done">Subscribed — see you next quarter.</p>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          >
            <input type="email" placeholder="founder@yourcompany.com" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
