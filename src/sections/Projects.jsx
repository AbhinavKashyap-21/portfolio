import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal.js';
import './Projects.css';

/* ── SVG overlay icons (one per project, very faint) ── */
const overlayIcons = [
  /* 0 – Robot Arm */
  <svg key="arm" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <path d="M16 48 L28 32 L40 38 L52 20" /><circle cx="16" cy="48" r="4" /><circle cx="52" cy="20" r="4" />
    <path d="M28 32l4-12" /><circle cx="32" cy="18" r="3" />
  </svg>,
  /* 1 – IoT / Wifi */
  <svg key="iot" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <circle cx="32" cy="44" r="3" />
    <path d="M22 38a14 14 0 0 1 20 0" /><path d="M16 32a22 22 0 0 1 32 0" /><path d="M10 26a30 30 0 0 1 44 0" />
  </svg>,
  /* 2 – Circuit / Line Follower */
  <svg key="circuit" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <path d="M8 32h12l4-8 8 16 4-8h12l4 8h4" /><circle cx="52" cy="40" r="3" /><circle cx="8" cy="32" r="3" />
  </svg>,
  /* 3 – Car / ATV chassis */
  <svg key="car" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <rect x="8" y="26" width="48" height="16" rx="4" /><path d="M16 26l6-10h20l6 10" />
    <circle cx="18" cy="46" r="4" /><circle cx="46" cy="46" r="4" />
  </svg>,
  /* 4 – Drone / Propeller */
  <svg key="drone" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <rect x="26" y="26" width="12" height="12" rx="2" />
    <line x1="26" y1="32" x2="12" y2="20" /><line x1="38" y1="32" x2="52" y2="20" />
    <line x1="26" y1="32" x2="12" y2="44" /><line x1="38" y1="32" x2="52" y2="44" />
    <circle cx="12" cy="20" r="6" /><circle cx="52" cy="20" r="6" />
    <circle cx="12" cy="44" r="6" /><circle cx="52" cy="44" r="6" />
  </svg>,
  /* 5 – CNC / Gear */
  <svg key="cnc" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <circle cx="32" cy="32" r="8" /><circle cx="32" cy="32" r="3" />
    <path d="M32 20v-8M32 52v-8M20 32h-8M52 32h-8M23 23l-5-5M46 46l-5-5M23 41l-5 5M46 18l-5 5" />
  </svg>,
  /* 6 – Hand / Prosthetic */
  <svg key="hand" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <path d="M22 36V16a3 3 0 0 1 6 0v14" /><path d="M28 26V12a3 3 0 0 1 6 0v18" />
    <path d="M34 28V16a3 3 0 0 1 6 0v14" /><path d="M40 30V22a3 3 0 0 1 6 0v14l-4 10a8 8 0 0 1-8 6h-6a8 8 0 0 1-8-8V36" />
  </svg>,
  /* 7 – Cloud / Weather */
  <svg key="cloud" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="proj-card__icon">
    <path d="M18 44a10 10 0 0 1-2-20 14 14 0 0 1 27-4 8 8 0 0 1 3 15" />
    <path d="M24 50v6M32 48v8M40 50v6" />
  </svg>,
];

/* ── Project Data ── */
const projects = [
  {
    title: 'AUTONOMOUS ROBOT ARM',
    desc: '6-DOF robotic arm with computer vision-based pick-and-place. Inverse kinematics, real-time trajectory planning.',
    tech: ['Arduino', 'Servo Motors', 'OpenCV', 'Python'],
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    title: 'SMART HOME IoT SYSTEM',
    desc: 'ESP32 sensor network with MQTT broker and React dashboard for real-time environmental monitoring.',
    tech: ['ESP32', 'MQTT', 'React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
  },
  {
    title: 'PID LINE FOLLOWER ROBOT',
    desc: 'Competition-winning differential drive robot. PID control, fastest lap in university competition.',
    tech: ['STM32', 'PID Control', 'IR Sensors', 'Embedded C'],
    gradient: 'linear-gradient(135deg, #0d1b2a, #1b2838)',
  },
  {
    title: 'ELECTRIC ATV — SAE BAJA',
    desc: 'RWD Electric ATV for SAE India BAJA 2025. Custom suspension, drive-by-wire, ADAS integration.',
    tech: ['SolidWorks', 'MATLAB', 'IPG CarMaker', 'Embedded C'],
    gradient: 'linear-gradient(135deg, #1a1a2e, #0d0d1a)',
  },
  {
    title: 'DRONE FLIGHT CONTROLLER',
    desc: 'Custom firmware for quadcopter with IMU sensor fusion, PID stabilization, GPS waypoint navigation.',
    tech: ['STM32', 'IMU', 'PID', 'Embedded C'],
    gradient: 'linear-gradient(135deg, #1b2838, #0d1b2a)',
  },
  {
    title: 'CNC MACHINE CONTROLLER',
    desc: 'Arduino-based CNC controller interpreting G-code for 3-axis milling. Acceleration profiles, limit switch homing.',
    tech: ['Arduino', 'Stepper Motors', 'G-code', 'GRBL'],
    gradient: 'linear-gradient(135deg, #2d2d2d, #1a1a1a)',
  },
  {
    title: '3D PRINTED PROSTHETIC HAND',
    desc: 'Myoelectric prosthetic with flex sensors and servo fingers. SolidWorks design, FDM manufacturing.',
    tech: ['SolidWorks', 'Flex Sensors', 'Servo', '3D Printing'],
    gradient: 'linear-gradient(135deg, #1a1a2e, #2d1a2e)',
  },
  {
    title: 'WEATHER STATION IoT',
    desc: 'Raspberry Pi weather monitoring with environmental sensors, cloud logging, real-time web dashboard.',
    tech: ['Raspberry Pi', 'Sensors', 'Python', 'Cloud'],
    gradient: 'linear-gradient(135deg, #0d1b2a, #1a2e1a)',
  },
];

const TOTAL_CARDS = projects.length + 1;

export default function Projects() {
  const [headerRef, headerRevealed] = useScrollReveal({ threshold: 0.15 });
  const [setCardRef, cardRevealed] = useMultiReveal(TOTAL_CARDS, {
    staggerDelay: 100,
  });

  return (
    <section id="projects" className="section proj">
      <div className="section__container">
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`proj__header reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <span className="section__label proj__label">SECTION 03</span>
          <h2 className="section__title proj__title">FEATURED PROJECTS</h2>
          <div className="section__divider proj__divider" />
        </div>

        {/* ── Grid ── */}
        <div className="proj__grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              ref={setCardRef(i)}
              className={`proj-card reveal-scale ${cardRevealed[i] ? 'revealed' : ''}`}
            >
              {/* Gradient Image Area */}
              <div
                className="proj-card__image"
                style={{ background: project.gradient }}
              >
                {overlayIcons[i]}
              </div>

              {/* Content */}
              <div className="proj-card__body">
                <span className="proj-card__number">
                  PROJECT {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="proj-card__title">{project.title}</h3>
                <p className="proj-card__desc">{project.desc}</p>
                <div className="proj-card__tags">
                  {project.tech.map((t) => (
                    <span key={t} className="proj-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* ── CTA Card ── */}
          <article
            ref={setCardRef(projects.length)}
            className={`proj-card proj-card--cta reveal-scale ${cardRevealed[projects.length] ? 'revealed' : ''}`}
          >
            <div className="proj-card__cta-inner">
              <h3 className="proj-card__cta-title">VIEW ALL PROJECTS →</h3>
              <p className="proj-card__cta-desc">
                Browse the complete engineering portfolio on GitHub.
              </p>
              <a
                href="https://github.com/Nityeh"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card__cta-link"
              >
                github.com/Nityeh →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
