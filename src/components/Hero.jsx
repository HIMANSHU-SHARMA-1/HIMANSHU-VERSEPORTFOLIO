import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Sparkles, Terminal } from 'lucide-react';
import heroImage from '../assets/hero.png';

function Hero() {
  const [rotations, setRotations] = useState({ sticker1: -3, sticker2: 4 });

  // Compute stable random rotations on component mount
  useEffect(() => {
    setRotations({
      sticker1: (Math.random() * 10 - 5).toFixed(1),
      sticker2: (Math.random() * 10 - 5).toFixed(1)
    });
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid">
        {/* Left Intro Text Card */}
        <div className="hero-text-card">
          <div 
            className="sticker-badge float-sticker-1"
            style={{ transform: `rotate(${rotations.sticker1}deg)` }}
          >
            MERN DEVELOPER 💻
          </div>
          <h1 className="hero-title">
            HI, I'M <span className="highlight">HIMANSHU</span>.
          </h1>
          <p className="hero-subtitle">
            I craft full-stack web applications with robust backends and premium frontends.
          </p>
          <p className="brutalist-text" style={{ marginBottom: '30px', color: '#333' }}>
            Completed intensive MERN Stack training from IIT Kanpur and Web Development internship at CodeSoft. Specialized in React.js, Node.js, Express.js, and MongoDB.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              VIEW PROJECTS <ArrowDownRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              GET IN TOUCH <Sparkles />
            </a>
          </div>
        </div>

        {/* Right Retro Visual Window */}
        <div className="hero-visual-card">
          <div className="retro-window">
            <div className="window-titlebar">
              <div className="window-controls">
                <span className="dot dot-close"></span>
                <span className="dot dot-minimize"></span>
                <span className="dot dot-maximize"></span>
              </div>
              <span className="window-title" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Terminal size={12} /> profile_summary.sh
              </span>
            </div>
            <div className="window-body">
              <div className="avatar-container">
                <div className="avatar-frame">
                  <div className="pixel-avatar" style={{ overflow: 'hidden' }}>
                    <img 
                      src={heroImage} 
                      alt="Himanshu's Neobrutalist Avatar" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              </div>
              <div className="status-tags">
                <span className="status-tag tag-cyan">📍 Hapur, 245101</span>
                <span className="status-tag tag-pink">🔥 CodeSoft Alumnus</span>
                <span className="status-tag tag-purple">🚀 Available for Projects</span>
              </div>
            </div>
          </div>
          <div 
            className="sticker-badge float-sticker-2"
            style={{ transform: `rotate(${rotations.sticker2}deg)` }}
          >
            NO TEMPLATES! 🚫
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
