import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal.js';
import './Experience.css';

/* ── Experience Data ── */
const experiences = [
  {
    role: 'CAPTAIN & MULTI-DOMAIN LEAD',
    org: 'SAE INDIA ELECTRIC BAJA 2025',
    date: '2024 — 2025',
    location: 'Pune, India',
    tag: 'MOTORSPORT',
    highlights: [
      'Led 25+ member cross-functional team to design, fabricate, and race a Rear Wheel Drive Electric ATV',
      'Designed and implemented the event\'s most complex braking system, achieving shortest stopping distance (102 cm)',
      'Implemented Level 2 ADAS control algorithms using MATLAB & IPG CarMaker, achieving 2nd overall rank in simulation',
      'Designed Drive-by-Wire (DBW) system for autonomous ATV, contributing to 5th position in physical event',
      'Secured sponsorship of ₹1.5–2.0 lakhs as Sponsorship Head for electric and autonomous BAJA event',
    ],
  },
  {
    role: 'ROBOTICS DEVELOPER & INTERN',
    org: 'UNIVERSITY ROBOTICS LAB',
    date: '2024',
    location: 'On-Campus',
    tag: 'RESEARCH',
    highlights: [
      'Fabricated 10+ differential drive line-following robots within one month for major internship event',
      'Secured 1st place in Line Following Competition — fastest robot in the university',
      'Developed object avoidance and line following algorithms using IR sensors and embedded C',
    ],
  },
  {
    role: 'JOINT SECRETARY & CORE COMMITTEE',
    org: 'SAE BAJA COLLEGIATE CLUB',
    date: '2023 — PRESENT',
    location: 'University',
    tag: 'LEADERSHIP',
    highlights: [
      'Founded the SAE BAJA COLLEGIATE club with 200+ student registrations',
      'Organized first workshop with 40+ student participants',
      'Core Committee Member driving technical culture and mentorship programs',
    ],
  },
  {
    role: 'JOINT SECRETARY',
    org: 'THE ROBOTICS SOCIETY OF INDIA',
    date: '2023 — PRESENT',
    location: 'University Chapter',
    tag: 'LEADERSHIP',
    highlights: [
      'Managing events, workshops, and competitions for university robotics community',
      'Coordinating with national RSI body for technical sessions and hackathons',
      'Mentoring junior students in robotics fundamentals and embedded systems',
    ],
  },
];

export default function Experience() {
  const [headerRef, headerRevealed] = useScrollReveal({ threshold: 0.15 });
  const [setEntryRef, entryRevealed] = useMultiReveal(experiences.length, {
    staggerDelay: 150,
  });

  return (
    <section id="experience" className="section exp">
      <div className="section__container">
        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className={`exp__header reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <span className="section__label">SECTION 02</span>
          <h2 className="section__title exp__title">EXPERIENCE</h2>
          <div className="section__divider" />
        </div>

        {/* ── Timeline Entries ── */}
        <div className="exp__timeline">
          {experiences.map((entry, i) => (
            <article
              key={entry.org}
              ref={setEntryRef(i)}
              className={`exp-entry reveal ${entryRevealed[i] ? 'revealed' : ''}`}
            >
              {/* Date Column */}
              <div className="exp-entry__date-col">
                <span className="exp-entry__date">{entry.date}</span>
              </div>

              {/* Content Column */}
              <div className="exp-entry__content">
                {/* Title Row */}
                <div className="exp-entry__title-row">
                  <h3 className="exp-entry__role">{entry.role}</h3>
                  <span className="exp-entry__org">@ {entry.org}</span>
                </div>

                {/* Meta Row */}
                <div className="exp-entry__meta">
                  <span className="exp-entry__location">{entry.location}</span>
                  <span className="exp-entry__tag">{entry.tag}</span>
                </div>

                {/* Highlights */}
                <ul className="exp-entry__highlights">
                  {entry.highlights.map((hl, j) => (
                    <li key={j} className="exp-entry__highlight">
                      <span className="exp-entry__bullet">▸</span>
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accent Left Border Bar */}
              <div className="exp-entry__accent-bar" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
