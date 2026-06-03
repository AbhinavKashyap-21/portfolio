import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import './About.css';

/* ---- Inline SVG Icons (18px stroke) ---- */
const icons = {
  gear: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24">
      <path d="M5 17h14v-5l-2-6H7L5 12v5z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <line x1="1" y1="17" x2="5" y2="17" />
      <line x1="19" y1="17" x2="23" y2="17" />
      <path d="M5 12h14" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24">
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  ),
};

const STATS = [
  { number: '03+', label: 'Years Active' },
  { number: '15+', label: 'Projects Built' },
  { number: '10+', label: 'Leadership Roles' },
  { number: '200+', label: 'Team Members Led' },
];

const COMPETENCIES = [
  { icon: 'gear', label: 'Robotics & Automation' },
  { icon: 'cpu', label: 'Embedded Systems' },
  { icon: 'car', label: 'Vehicle Dynamics' },
  { icon: 'sliders', label: 'Control Systems' },
  { icon: 'pen', label: 'CAD/CAM Design' },
  { icon: 'wifi', label: 'IoT & Connectivity' },
];

const TECH_STACK = [
  {
    heading: 'Languages',
    items: ['Python', 'C/C++', 'Embedded C', 'MATLAB', 'JavaScript'],
  },
  {
    heading: 'Hardware',
    items: ['Arduino', 'Raspberry Pi', 'STM32', 'ESP32', 'Servo Motors'],
  },
  {
    heading: 'Software',
    items: ['SolidWorks', 'CATIA', 'ANSYS', 'MATLAB/Simulink', 'ROS', 'IPG CarMaker'],
  },
  {
    heading: 'Fabrication',
    items: ['CNC Machining', '3D Printing', 'Sheet Metal', 'Lathe & Milling'],
  },
];

function About() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [bioRef, bioRevealed] = useScrollReveal();
  const [cardRef, cardRevealed] = useScrollReveal();
  const [setStatRef, statsRevealed] = useMultiReveal(STATS.length, { staggerDelay: 120 });
  const [setCompRef, compRevealed] = useMultiReveal(COMPETENCIES.length, { staggerDelay: 100 });
  const [techRef, techRevealed] = useScrollReveal();
  const [compTitleRef, compTitleRevealed] = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* ---- Section Header ---- */}
        <div
          ref={headerRef}
          className={`about__reveal ${headerRevealed ? 'about__reveal--visible' : ''}`}
        >
          <div className="about__label">Section 01</div>
          <h2 className="about__title">About</h2>
          <div className="about__header-divider" />
        </div>

        {/* ---- Two-Column Body ---- */}
        <div className="about__body">
          {/* Left — Bio */}
          <div
            ref={bioRef}
            className={`about__bio about__reveal--left ${bioRevealed ? 'about__reveal--visible' : ''}`}
          >
            <p>
              I'm Nityeh Aggarwal, a B.Tech Mechatronics Engineering student driven by a
              passion for building intelligent mechanical systems. I specialize in vehicle
              dynamics, ADAS, embedded control systems, and robotics. As Captain of SAE
              eBaja 2025, I've led teams to design, fabricate, and race electric ATVs from
              the ground up.
            </p>
            <p>
              My engineering journey spans mechanical design, embedded firmware, simulation,
              and competitive motorsport engineering. I've fabricated differential drive
              robots, designed braking systems achieving record-short stopping distances, and
              implemented Level 2 ADAS control algorithms using MATLAB &amp; IPG CarMaker.
            </p>
            <p>
              I operate at the intersection of hardware and software — from SolidWorks CAD
              models to Embedded C firmware, from MATLAB/Simulink simulations to ROS-based
              autonomous systems. My mission is to engineer mechatronic solutions that
              redefine mobility.
            </p>
          </div>

          {/* Right — Profile Card */}
          <div
            ref={cardRef}
            className={`about__reveal--right ${cardRevealed ? 'about__reveal--visible' : ''}`}
          >
            <div className="about__profile-card">
              <div className="about__profile-avatar">
                <span className="about__profile-initials">NA</span>
              </div>
              <div className="about__profile-info">
                <h3 className="about__profile-name">Nityeh Aggarwal</h3>
                <p className="about__profile-subtitle">Mechatronics Engineer</p>
                <div className="about__profile-status">
                  <span className="about__status-dot" />
                  <span>Available for Opportunities</span>
                </div>
                <a href="#contact" className="about__profile-cta">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Engineering Stats ---- */}
        <div className="about__stats">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              ref={setStatRef(i)}
              className={`about__stat about__reveal ${statsRevealed[i] ? 'about__reveal--visible' : ''}`}
            >
              <div className="about__stat-number">{stat.number}</div>
              <div className="about__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ---- Core Competencies ---- */}
        <div className="about__competencies">
          <div
            ref={compTitleRef}
            className={`about__reveal ${compTitleRevealed ? 'about__reveal--visible' : ''}`}
          >
            <h3 className="about__subtitle">Core Competencies</h3>
          </div>
          <div className="about__competencies-grid">
            {COMPETENCIES.map((comp, i) => (
              <div
                key={comp.label}
                ref={setCompRef(i)}
                className={`about__competency-card about__reveal ${compRevealed[i] ? 'about__reveal--visible' : ''}`}
              >
                <div className="about__competency-icon">{icons[comp.icon]}</div>
                <span className="about__competency-label">{comp.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Technology Stack ---- */}
        <div
          ref={techRef}
          className={`about__tech-stack about__reveal ${techRevealed ? 'about__reveal--visible' : ''}`}
        >
          <h3 className="about__subtitle">Technology Stack</h3>
          <div className="about__tech-grid">
            {TECH_STACK.map((cat) => (
              <div key={cat.heading}>
                <h4 className="about__tech-category-heading">{cat.heading}</h4>
                <ul className="about__tech-list">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
