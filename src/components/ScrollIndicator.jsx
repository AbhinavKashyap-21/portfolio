import { useState, useEffect } from 'react';
import './ScrollIndicator.css';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${visible ? '' : 'scroll-indicator--hidden'}`}>
      <span className="scroll-indicator__text">Scroll to explore</span>
      <span className="scroll-indicator__line" />
    </div>
  );
}
