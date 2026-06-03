import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="section contact-section" id="contact">
      <div className="section__container">
        <div ref={ref} className={`contact__inner ${isRevealed ? 'revealed' : 'reveal'}`}>
          {/* Technical spec corner */}
          <div className="contact__spec-corner">
            <span>TRANSMISSION // OPEN</span>
            <span>CHANNEL // DIRECT</span>
          </div>

          <div className="contact__label">SECTION 05</div>
          <h2 className="contact__heading">LET'S ENGINEER<br />THE FUTURE</h2>
          <div className="contact__line" />
          <p className="contact__text">
            Whether it's a robotics project, a vehicle dynamics challenge, or an innovative
            mechatronics solution — I'm ready to collaborate. Let's connect and build
            something extraordinary together.
          </p>
          <a
            href="mailto:nityeh.030@gmail.com"
            className="contact__btn"
            id="contact-btn"
          >
            INITIATE CONTACT →
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__line" />
          <div className="footer__content">
            <span className="footer__credit">DESIGNED & ENGINEERED BY NITYEH AGGARWAL</span>
            <span className="footer__year">© 2025</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
