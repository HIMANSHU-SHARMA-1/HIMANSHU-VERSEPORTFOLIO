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
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundProfile, setSoundProfile] = useState('bell'); // Default to soft chime!

  // Soft melodious click sound synthesis using Web Audio API
  const playClickSound = (profileName = soundProfile) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const playTone = (freq, duration, type = 'sine', volume = 0.035, slideFreq = null) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        if (slideFreq) {
          osc.frequency.exponentialRampToValueAtTime(slideFreq, ctx.currentTime + duration);
        }
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      };

      if (profileName === 'bell') {
        // Melodious soft chime chord (C5 + E5)
        playTone(523.25, 0.18, 'sine', 0.02);
        setTimeout(() => playTone(659.25, 0.16, 'sine', 0.015), 15);
      } else if (profileName === 'bubble') {
        // Upward water drop bubble sound
        playTone(300, 0.06, 'sine', 0.03, 1400);
      } else if (profileName === 'arcade') {
        // Retro triangle wave blip
        playTone(180, 0.08, 'triangle', 0.025, 900);
      } else if (profileName === 'pop') {
        // Mechanical switch click
        playTone(650, 0.07, 'sine', 0.035, 320);
      } else if (profileName === 'cosmic') {
        // High frequency twinkle
        playTone(1500, 0.1, 'sine', 0.012, 2400);
      }
    } catch (e) {
      // Audio context blocked or not supported
    }
  };

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

  // Global click listener to play soft switch blips
  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (!soundEnabled) return;
      
      const target = e.target.closest('button, a, .color-dot, .skill-sticker, .coordinate-item');
      if (target) {
        playClickSound(soundProfile);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [soundEnabled, soundProfile]);

  return (
    <>
      {/* Palette Changer Widget */}
      <ThemeBar 
        currentTheme={theme} 
        onChangeTheme={setTheme} 
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          setSoundEnabled(!soundEnabled);
          // Play a feed blip to give immediate feedback when unmuting
          if (!soundEnabled) {
            setTimeout(() => playClickSound(soundProfile), 20);
          }
        }}
        soundProfile={soundProfile}
        onChangeSoundProfile={(profile) => {
          setSoundProfile(profile);
          // Play immediately so the user can test the sound
          setTimeout(() => playClickSound(profile), 20);
        }}
      />

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
