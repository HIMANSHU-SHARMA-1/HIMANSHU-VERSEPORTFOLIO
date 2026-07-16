import React from 'react';

function About() {
  return (
    <section className="section-container" id="about">
      <h2 className="section-heading">01 / ABOUT_ME</h2>
      
      <div className="about-grid">
        {/* Left Side: Professional Training & Internships */}
        <div className="card about-main-card bg-cream">
          <h3 style={{ marginBottom: '25px' }}>EXPERIENCE & PROFESSIONAL TRAINING ⚙️</h3>
          
          {/* Internship Card Content */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--clr-black)', margin: '10px 0 5px 0' }}>
              ✦ WEB DEVELOPMENT INTERN
            </h4>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', fontWeight: 700, opacity: 0.8 }}>
              CodeSoft | Remote | 06/2025 – 07/2025
            </p>
            <ul className="brutalist-list list-dark" style={{ marginTop: '10px', paddingLeft: '15px' }}>
              <li>Built highly responsive user interfaces using HTML5, CSS3, JavaScript, and React.js.</li>
              <li>Successfully converted complex Figma designs into reusable, component-based frontend interfaces.</li>
              <li>Collaborated using Git and GitHub within Agile workflows to manage versions.</li>
              <li>Debugged, profiled, and optimized rendering UI issues, improving layout responsiveness by 15%.</li>
            </ul>
          </div>

          {/* Training Content */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--clr-black)', margin: '10px 0 5px 0' }}>
              ✦ IITK MERN STACK TRAINING PROGRAM
            </h4>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', fontWeight: 700, opacity: 0.8 }}>
              IIT Kanpur (IITK) | Professional Training
            </p>
            <ul className="brutalist-list list-dark" style={{ marginTop: '10px', paddingLeft: '15px' }}>
              <li>Completed hands-on intensive training in React.js, Node.js, Express.js, and MongoDB.</li>
              <li>Built production-ready full-stack applications with REST APIs, authentication protocols, and database schema layouts.</li>
              <li>Gained solid practical experience in backend server architecture configuration and deployment workflows.</li>
            </ul>
          </div>

          {/* Certifications Block */}
          <div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--clr-black)', margin: '10px 0 10px 0' }}>
              ✦ CERTIFICATIONS
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '5px' }}>
              <span className="sticker-badge" style={{ backgroundColor: 'var(--clr-yellow)' }}>MERN STACK - IIT Kanpur</span>
              <span className="sticker-badge" style={{ backgroundColor: 'var(--clr-cyan)' }}>Skyscanner Front-End - Forage</span>
              <span className="sticker-badge" style={{ backgroundColor: 'var(--clr-purple)', color: 'white' }}>Claude Code In Action - Anthropic</span>
              <span className="sticker-badge" style={{ backgroundColor: 'var(--clr-pink)', color: 'white' }}>CSS - Oneroadmap</span>
              <span className="sticker-badge" style={{ backgroundColor: 'var(--clr-blue)', color: 'white' }}>Version Control with Git - Meta</span>
            </div>
          </div>
        </div>

        {/* Right Side: Education & Languages */}
        <div className="card about-details-card bg-orange" style={{ color: 'var(--clr-white)' }}>
          <h3>EDUCATION INTEL 🎓</h3>
          <ul className="brutalist-list">
            <li>
              <strong>Bachelor of Computer Application (BCA)</strong><br />
              IMS, Ghaziabad University Courses Campus<br />
              <span style={{ fontFamily: 'Space Mono', fontSize: '0.85rem', fontWeight: 700 }}>2023 - 2026</span>
            </li>
            <li>
              <strong>Intermediate (Class XII)</strong><br />
              Saraswati Bal Mandir Sr. Sec. School<br />
              <span style={{ fontFamily: 'Space Mono', fontSize: '0.85rem', fontWeight: 700 }}>2022 - 2023</span>
            </li>
            <li>
              <strong>Matriculation (Class X)</strong><br />
              Saraswati Bal Mandir Sr. Sec. School<br />
              <span style={{ fontFamily: 'Space Mono', fontSize: '0.85rem', fontWeight: 700 }}>2020 - 2021</span>
            </li>
          </ul>

          <h3 style={{ marginTop: '20px' }}>LANGUAGES 🗣️</h3>
          <ul className="brutalist-list" style={{ flexDirection: 'row', gap: '15px', borderBottom: 'none' }}>
            <li><strong>ENGLISH:</strong> Professional</li>
            <li><strong>HINDI:</strong> Native / Bilingual</li>
          </ul>

          <div className="card-footer-decorative">
            <span>SYS STATUS: ACTIVE</span>
            <span>[100% OK]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
