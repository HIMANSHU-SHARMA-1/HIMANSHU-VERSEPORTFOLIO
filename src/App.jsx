import React, { useState, useEffect } from 'react';
import ThemeBar from './components/ThemeBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('theme-yellow');
  const [scrolled, setScrolled] = useState(false);

  // Sync theme to body class
  useEffect(() => {
    // Remove previous theme classes
    document.body.className = document.body.className.replace(/\btheme-\S+/g, '');
    // Add current theme class
    document.body.classList.add(theme);
  }, [theme]);

  // Track page scroll depth to compress header depth shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Palette Changer Widget */}
      <ThemeBar currentTheme={theme} onChangeTheme={setTheme} />

      {/* Navigation Header */}
      <Header scrolled={scrolled} />

      {/* Main Layout Content */}
      <main className="main-layout">
        <div className="content-wrapper">
          <Hero />
        </div>
        
        {/* Ticker Banner */}
        <div className="stats-marquee">
          <div className="marquee-track">
            <span>✦ MERN STACK SPECIALIST </span>
            <span>✦ IIT KANPUR GRAD </span>
            <span>✦ RESPONSIVE FRONTENDS </span>
            <span>✦ CLEAN BACKEND REST APIS </span>
            <span>✦ DATABASE OPTIMIZATION </span>
            <span>✦ MERN STACK SPECIALIST </span>
            <span>✦ IIT KANPUR GRAD </span>
            <span>✦ RESPONSIVE FRONTENDS </span>
            <span>✦ CLEAN BACKEND REST APIS </span>
            <span>✦ DATABASE OPTIMIZATION </span>
          </div>
        </div>

        <div className="content-wrapper">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-left">
          <span className="footer-copyright">© 2026 HIMANSHU. BUILT WITH REACT & VANTAGE BLACK BORDERS.</span>
        </div>
        <div className="footer-right">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-link">
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
