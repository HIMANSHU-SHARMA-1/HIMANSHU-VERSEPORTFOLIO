import React, { useState, useEffect } from 'react';

const SKILLS_BARS = [
  { name: 'Frontend (React.js, Material UI, Tailwind CSS, HTML5, CSS3, JS)', pct: 94, bg: 'bg-red' },
  { name: 'Backend & APIs (Node.js, Express.js, Socket.io, REST APIs, JWT, Multer)', pct: 90, bg: 'bg-blue' },
  { name: 'Databases & Testing (MongoDB, Mongoose, Jest, Supertest, In-memory DB)', pct: 87, bg: 'bg-purple' },
  { name: 'Tools & Practices (Git, GitHub, Postman, Vite, Vercel, Render, Sentry, Agile)', pct: 92, bg: 'bg-green' }
];

const STICKERS = [
  { name: 'REACT.JS', bg: 'bg-pink' },
  { name: 'NODE.JS', bg: 'bg-cyan' },
  { name: 'EXPRESS.JS', bg: 'bg-green' },
  { name: 'MONGODB', bg: 'bg-purple' },
  { name: 'MONGOOSE', bg: 'bg-orange' },
  { name: 'TAILWIND CSS', bg: 'bg-blue' },
  { name: 'MATERIAL UI', bg: 'bg-pink' },
  { name: 'FIREBASE', bg: 'bg-red' },
  { name: 'OAUTH', bg: 'bg-blue' },
  { name: 'JEST', bg: 'bg-purple' },
  { name: 'SUPERTEST', bg: 'bg-green' },
  { name: 'OPENROUTER AI', bg: 'bg-yellow' },
  { name: 'RECHARTS', bg: 'bg-orange' },
  { name: 'JSPDF', bg: 'bg-cyan' },
  { name: 'SENTRY', bg: 'bg-red' },
  { name: 'MOTION', bg: 'bg-pink' },
  { name: 'VITE', bg: 'bg-yellow' },
  { name: 'VERCEL', bg: 'bg-blue' },
  { name: 'VIBE CODER', bg: 'bg-yellow' },
  { name: 'REST APIS', bg: 'bg-pink' },
  { name: 'GIT', bg: 'bg-red' },
  { name: 'GITHUB', bg: 'bg-blue' },
  { name: 'POSTMAN', bg: 'bg-green' }
];

function Skills() {
  const [rotations, setRotations] = useState([]);

  // Generate stable random rotations on mount
  useEffect(() => {
    const rots = STICKERS.map(() => (Math.random() * 10 - 5).toFixed(1));
    setRotations(rots);
  }, []);

  return (
    <section className="section-container" id="skills">
      <h2 className="section-heading">03 / ARSENAL_&_SKILLS</h2>
      
      <div className="skills-layout">
        {/* Progress Bars Card */}
        <div className="skills-card bg-yellow">
          <h3>TECHNICAL STACK 🛠️</h3>
          <div className="skills-progress-group">
            {SKILLS_BARS.map((skill, idx) => (
              <div key={idx} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <div className="brutalist-progress-bar">
                  <div 
                    className={`progress-fill ${skill.bg}`} 
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticker Cloud Card */}
        <div className="skills-stickers bg-cream">
          <h3>STICKERS & TOOLBOX 🎨</h3>
          <div className="sticker-cloud">
            {STICKERS.map((st, idx) => {
              const rot = rotations[idx] || 0;
              return (
                <span 
                  key={idx} 
                  className={`skill-sticker ${st.bg}`}
                  style={{ 
                    transform: `rotate(${rot}deg)`,
                    transition: 'transform 0.15s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    const r = parseFloat(rot);
                    const scaleRot = r > 0 ? r + 3 : r - 3;
                    e.currentTarget.style.transform = `scale(1.1) rotate(${scaleRot}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${rot}deg)`;
                  }}
                >
                  {st.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
