import { useState } from 'react';
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'MATLAB FUNDAMENTALS',
    category: 'SIMULATION',
    level: 'INTERMEDIATE',
    code: 'CERT-SIM-001',
    description: 'Comprehensive MATLAB programming and simulation course covering data analysis, visualization, control system modeling, and Simulink integration for engineering applications.',
    tech: ['MATLAB', 'Simulink', 'Control Systems', 'Data Analysis'],
    issuer: 'MATHWORKS',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    id: 2,
    title: 'SOLIDWORKS CSWA',
    category: 'CAD DESIGN',
    level: 'ADVANCED',
    code: 'CERT-CAD-002',
    description: 'Certified SolidWorks Associate credential covering 3D modeling, assembly design, engineering drawings, and design validation for mechanical systems.',
    tech: ['SolidWorks', '3D Modeling', 'Assembly', 'Drawings'],
    issuer: 'DASSAULT SYSTÈMES',
    gradient: 'linear-gradient(135deg, #2d2d2d, #1a1a1a)',
  },
  {
    id: 3,
    title: 'ROS FOR ROBOTICS',
    category: 'ROBOTICS',
    level: 'ADVANCED',
    code: 'CERT-ROB-003',
    description: 'Robot Operating System fundamentals including nodes, topics, services, navigation stack, SLAM, and autonomous robot programming with Gazebo simulation.',
    tech: ['ROS', 'Gazebo', 'Python', 'SLAM'],
    issuer: 'THE CONSTRUCT',
    gradient: 'linear-gradient(135deg, #0d1b2a, #1b2838)',
  },
  {
    id: 4,
    title: 'PCB DESIGN WITH KICAD',
    category: 'ELECTRONICS',
    level: 'INTERMEDIATE',
    code: 'CERT-ELC-004',
    description: 'Complete PCB design workflow from schematic capture to board layout, including component footprints, design rules, and gerber file generation.',
    tech: ['KiCad', 'PCB Design', 'Schematic', 'Electronics'],
    issuer: 'UDEMY',
    gradient: 'linear-gradient(135deg, #1a1a2e, #0d0d1a)',
  },
  {
    id: 5,
    title: 'EMBEDDED C PROGRAMMING',
    category: 'EMBEDDED',
    level: 'EXPERT',
    code: 'CERT-EMB-005',
    description: 'Advanced embedded C for ARM Cortex microcontrollers covering register-level programming, interrupts, timers, ADC, UART, SPI, I2C, and RTOS fundamentals.',
    tech: ['Embedded C', 'ARM Cortex', 'RTOS', 'Peripherals'],
    issuer: 'FASTBIT EMBEDDED',
    gradient: 'linear-gradient(135deg, #1b2838, #0d1b2a)',
  },
  {
    id: 6,
    title: 'PYTHON FOR ENGINEERS',
    category: 'PROGRAMMING',
    level: 'INTERMEDIATE',
    code: 'CERT-PRG-006',
    description: 'Python for engineering applications including NumPy, Matplotlib, SciPy for scientific computing, automation scripting, and data-driven analysis.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'SciPy'],
    issuer: 'EDX',
    gradient: 'linear-gradient(135deg, #2d2d2d, #1a2e1a)',
  },
];

export default function Certifications() {
  const [flippedCards, setFlippedCards] = useState({});
  const [headerRef, headerRevealed] = useScrollReveal();
  const [setCardRef, cardRevealed] = useMultiReveal(certifications.length, { staggerDelay: 100 });

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section certs-section" id="certifications">
      <div className="section__container">
        <div ref={headerRef} className={`section__header ${headerRevealed ? 'revealed' : 'reveal'}`}>
          <div className="section__label">SECTION 04</div>
          <h2 className="section__title">CERTIFICATIONS</h2>
          <div className="section__divider" />
        </div>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              ref={setCardRef(index)}
              className={`cert-card ${cardRevealed[index] ? 'revealed' : 'reveal-scale'} ${flippedCards[cert.id] ? 'cert-card--flipped' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={`${cert.title} certification details`}
              onClick={() => toggleFlip(cert.id)}
              onKeyDown={(e) => e.key === 'Enter' && toggleFlip(cert.id)}
            >
              <div className="cert-card__inner">
                {/* Front */}
                <div className="cert-card__front">
                  <div className="cert-card__header-bar">
                    <span className="cert-card__code">{cert.code}</span>
                    <span className="cert-card__level">{cert.level}</span>
                  </div>
                  <div className="cert-card__image" style={{ background: cert.gradient }}>
                    <svg className="cert-card__bg-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                      <rect x="4" y="4" width="16" height="16" rx="1" />
                      <path d="M4 9h16M9 4v16" />
                      <circle cx="15" cy="15" r="3" />
                    </svg>
                    <span className="cert-card__category">{cert.category}</span>
                  </div>
                  <div className="cert-card__content">
                    <h3 className="cert-card__title">{cert.title}</h3>
                    <ul className="cert-card__tags">
                      {cert.tech.map(t => <li key={t}>{t}</li>)}
                    </ul>
                    <div className="cert-card__footer">
                      <span className="cert-card__issuer">{cert.issuer}</span>
                      <span className="cert-card__flip-hint">CLICK TO VIEW →</span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="cert-card__back">
                  <div className="cert-card__back-content">
                    <div className="cert-card__back-label">{cert.category}</div>
                    <h3 className="cert-card__back-title">{cert.title}</h3>
                    <p className="cert-card__back-desc">{cert.description}</p>

                    <div className="cert-card__specs">
                      <div className="cert-card__spec">
                        <span className="cert-card__spec-label">LEVEL</span>
                        <span className="cert-card__spec-value">{cert.level}</span>
                      </div>
                      <div className="cert-card__spec">
                        <span className="cert-card__spec-label">ISSUER</span>
                        <span className="cert-card__spec-value">{cert.issuer}</span>
                      </div>
                      <div className="cert-card__spec">
                        <span className="cert-card__spec-label">CODE</span>
                        <span className="cert-card__spec-value">{cert.code}</span>
                      </div>
                    </div>

                    <ul className="cert-card__back-tags">
                      {cert.tech.map(t => <li key={t}>{t}</li>)}
                    </ul>

                    <button className="cert-card__cred-btn" onClick={(e) => e.stopPropagation()}>
                      VIEW CREDENTIAL →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
