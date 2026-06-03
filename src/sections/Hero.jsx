import { useTypingEffect } from '../hooks/useTypingEffect';
import './Hero.css';

const ROLES = [
  'MECHATRONICS ENGINEER',
  'VEHICLE DYNAMICS SPECIALIST',
  'ADAS DEVELOPER',
  'SAE BAJA CAPTAIN',
  'EMBEDDED SYSTEMS DESIGNER',
];

function Hero() {
  const { displayText } = useTypingEffect(ROLES, {
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseDuration: 2200,
    startDelay: 1400,
  });

  return (
    <section className="hero" id="hero">
      {/* Blueprint background */}
      <div className="hero__blueprint" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid crosshair center */}
          <line x1="720" y1="380" x2="720" y2="520" stroke="white" strokeWidth="0.5" opacity="0.04" />
          <line x1="650" y1="450" x2="790" y2="450" stroke="white" strokeWidth="0.5" opacity="0.04" />
          <circle cx="720" cy="450" r="40" stroke="white" strokeWidth="0.5" opacity="0.03" fill="none" />
          <circle cx="720" cy="450" r="80" stroke="white" strokeWidth="0.3" opacity="0.025" fill="none" />

          {/* Suspension schematic — top-right */}
          <g opacity="0.04" stroke="white" strokeWidth="0.6" fill="none">
            <path d="M1100 120 L1140 180 L1180 120" />
            <line x1="1140" y1="180" x2="1140" y2="240" />
            <path d="M1120 240 L1160 240" />
            <path d="M1125 250 L1155 250" />
            <path d="M1130 260 L1150 260" />
            {/* Damper zigzag */}
            <polyline points="1100,280 1110,290 1090,310 1110,330 1090,350 1100,360" />
            {/* A-arm geometry */}
            <path d="M1050 180 L1100 120 L1150 180" />
            <line x1="1100" y1="120" x2="1100" y2="80" />
          </g>

          {/* Corner markers — top-left */}
          <g opacity="0.05" stroke="white" strokeWidth="0.5">
            <line x1="60" y1="60" x2="100" y2="60" />
            <line x1="60" y1="60" x2="60" y2="100" />
          </g>

          {/* Corner markers — bottom-right */}
          <g opacity="0.05" stroke="white" strokeWidth="0.5">
            <line x1="1380" y1="840" x2="1340" y2="840" />
            <line x1="1380" y1="840" x2="1380" y2="800" />
          </g>

          {/* Horizontal reference lines */}
          <line x1="0" y1="450" x2="1440" y2="450" stroke="white" strokeWidth="0.3" opacity="0.02" />
          <line x1="0" y1="300" x2="1440" y2="300" stroke="white" strokeWidth="0.3" opacity="0.015" />
          <line x1="0" y1="600" x2="1440" y2="600" stroke="white" strokeWidth="0.3" opacity="0.015" />

          {/* Vertical reference lines */}
          <line x1="360" y1="0" x2="360" y2="900" stroke="white" strokeWidth="0.3" opacity="0.015" />
          <line x1="1080" y1="0" x2="1080" y2="900" stroke="white" strokeWidth="0.3" opacity="0.015" />

          {/* Dimension callout — bottom-left */}
          <g opacity="0.035" stroke="white" strokeWidth="0.5" fill="none">
            <line x1="100" y1="750" x2="350" y2="750" />
            <line x1="100" y1="740" x2="100" y2="760" />
            <line x1="350" y1="740" x2="350" y2="760" />
          </g>
        </svg>
      </div>

      {/* Grid overlay */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Motion streaks */}
      <div className="hero__streak" aria-hidden="true" />
      <div className="hero__streak hero__streak--secondary" aria-hidden="true" />

      {/* Top-left spec block */}
      <div className="hero__spec-block" aria-hidden="true">
        <div>PROGRAM <span>//</span> PORTFOLIO_2025</div>
        <div>CLASS &nbsp;&nbsp;<span>//</span> MECHATRONICS</div>
        <div>STATUS &nbsp;<span>//</span> ACTIVE</div>
      </div>

      {/* Main content */}
      <div className="hero__content">
        <p className="hero__tagline">Engineering the Future of Mobility</p>

        <h1 className="hero__name">
          <span className="hero__name-line">Nityeh</span>
          <span className="hero__name-line">Aggarwal</span>
        </h1>

        <div className="hero__role">
          <span>{displayText}</span>
          <span className="hero__cursor" aria-hidden="true" />
        </div>

        <div className="hero__divider" aria-hidden="true" />

        <p className="hero__description">
          B.Tech Mechatronics Engineering. Specializing in vehicle dynamics, ADAS
          systems, embedded control, and robotics. Building the next generation of
          intelligent mobility systems.
        </p>

        <a href="#about" className="hero__cta">
          View Engineering Dossier →
        </a>
      </div>

      {/* Bottom-right coord block */}
      <div className="hero__coord-block" aria-hidden="true">
        <div>LAT &nbsp;18.5204° N</div>
        <div>LON &nbsp;73.8567° E</div>
        <div>REV &nbsp;<span>v2025.06</span></div>
      </div>
    </section>
  );
}

export default Hero;
