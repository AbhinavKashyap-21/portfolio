import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import ScrollIndicator from './components/ScrollIndicator';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <SocialSidebar />
      <ScrollIndicator />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
