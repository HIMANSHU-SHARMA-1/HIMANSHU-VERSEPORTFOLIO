import React, { useState, useEffect } from 'react';

const SKILLS_BARS = [
  { name: 'Frontend Development (HTML5, CSS3, React.js)', pct: 92, bg: 'bg-red' },
  { name: 'Backend Development (Node.js, Express.js, REST APIs)', pct: 88, bg: 'bg-blue' },
  { name: 'Database Systems (MongoDB, Mongoose, CRUD)', pct: 85, bg: 'bg-purple' },
  { name: 'Tools & Platforms (Git, GitHub, Netlify, Render, Postman)', pct: 90, bg: 'bg-green' }
];

const STICKERS = [
  { name: 'REACT.JS', bg: 'bg-pink' },
  { name: 'NODE.JS', bg: 'bg-cyan' },
  { name: 'EXPRESS.JS', bg: 'bg-green' },
  { name: 'MONGODB', bg: 'bg-purple' },
  { name: 'MONGOOSE', bg: 'bg-orange' },
  { name: 'FIREBASE', bg: 'bg-red' },
  { name: 'OAUTH', bg: 'bg-blue' },
  { name: 'VIBE CODER', bg: 'bg-yellow' },
  { name: 'REST APIS', bg: 'bg-pink' },
  { name: 'GIT', bg: 'bg-red' },
  { name: 'GITHUB', bg: 'bg-blue' },
  { name: 'POSTMAN', bg: 'bg-green' },
  { name: 'NETLIFY', bg: 'bg-pink' },
  { name: 'RENDER', bg: 'bg-cyan' },
  { name: 'BOOTSTRAP', bg: 'bg-yellow' },
  { name: 'FIGMA', bg: 'bg-purple' }
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
