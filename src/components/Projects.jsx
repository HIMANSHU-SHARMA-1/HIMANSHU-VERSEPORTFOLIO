import React from 'react';
import { ExternalLink } from 'lucide-react';

// Custom inline SVG for Github to bypass brand icon deprecation in Lucide-react
const GithubIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="16" 
    height="16" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const PROJECTS = [
  {
    number: '[01]',
    tag: 'MERN & SOCKETS',
    title: 'CollabSpace',
    subtitle: 'Real-time Collaboration Hub',
    desc: 'Designed a team workspace platform supporting dynamic project workflows. Employs JWT authentication, Join Request flows (leader approvals with notifications), real-time chat rooms via Socket.io, and an AI recommendation algorithm to suggest projects matching user skillsets.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'AI Matching'],
    bgClass: 'bg-orange',
    links: { github: 'https://github.com/HIMANSHU-SHARMA-1/collabspace.git' }
  },
  {
    number: '[02]',
    tag: 'FLAGSHIP AI MERN',
    title: 'InterviewIQ.ai',
    subtitle: 'AI-Powered Mock Interview Platform',
    desc: 'An AI-driven mock interview system helping job seekers prepare for tech & HR rounds. Users upload resumes (analyzed by GPT-4o-mini) to dynamically generate progressive difficulty questions. Features voice-based question/answers via Web Speech API avatar, real-time confidence/communication/correctness evaluation, comprehensive performance reports, PDF downloads, and Razorpay credit billing.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'OpenRouter AI', 'Web Speech API', 'Razorpay'],
    bgClass: 'bg-yellow',
    links: { 
      github: 'https://github.com/HIMANSHU-SHARMA-1/InterviewIQ-frontend',
      githubBackend: 'https://github.com/HIMANSHU-SHARMA-1/InterviewIQ-Backend',
      live: 'https://interviewiq-frontend-4vmt.onrender.com/'
    }
  },
  {
    number: '[03]',
    tag: 'FULL STACK MERN',
    title: 'MedEase',
    subtitle: 'Medical Report Analysis System',
    desc: 'Developed a MERN web application to analyze medical lab reports and extract key health parameters. Structured backend APIs, stored and managed report data, and focused on presenting clear insights through a user-friendly interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'MVC Architecture'],
    bgClass: 'bg-blue',
    links: { 
      github: 'https://github.com/HIMANSHU-SHARMA-1/MedEase-AI-frontend',
      githubBackend: 'https://github.com/HIMANSHU-SHARMA-1/MedEase-AI-backend',
      live: 'https://med-ease-ai-frontend.vercel.app/'
    }
  },
  {
    number: '[04]',
    tag: 'API ENGINE',
    title: 'ShareSpace',
    subtitle: 'Secure Cloud Uploads',
    desc: 'Engineered a drag-and-drop secure hosting manager featuring file-expiration rules, custom token authentication pipelines, and AWS bucket integration to capture binary assets.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'],
    bgClass: 'bg-pink',
    links: { github: '#' }
  },
  {
    number: '[05]',
    tag: 'REAL-TIME',
    title: 'DevConnect',
    subtitle: 'Developer Community Center',
    desc: 'Programmed an interactive developer portal facilitating technical blogging and direct chat channels utilizing secure WebSockets for real-time engagement updates.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'WebSockets', 'Tailwind CSS'],
    bgClass: 'bg-green',
    links: { github: '#' }
  },
  {
    number: '[06]',
    tag: 'FRONTEND UI',
    title: 'TaskForge',
    subtitle: 'Kanban Task Manager',
    desc: 'Created a component-based interactive Kanban planner with card drag behaviors, checklist summaries, subtask breakdowns, and local storage state persistence.',
    tech: ['React.js', 'Redux Toolkit', 'CSS Grid', 'Node.js', 'Mongoose'],
    bgClass: 'bg-purple',
    links: { github: '#' }
  }
];

function Projects() {
  return (
    <section className="section-container" id="projects">
      <h2 className="section-heading">02 / CRAZY_PROJECTS</h2>
      <p className="section-subheading">A handpicked showcase of full-stack implementations and system experiments.</p>

      <div className="projects-grid">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className={`project-card ${proj.bgClass}`}>
            <div className="project-header">
              <span className="project-number">{proj.number}</span>
              <span className="project-tag">{proj.tag}</span>
            </div>
            
            <h3 className="project-title" style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>{proj.title}</h3>
            <h4 style={{ 
              fontFamily: 'Space Mono, monospace', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              marginBottom: '15px',
              textTransform: 'uppercase',
              opacity: 0.9 
            }}>
              // {proj.subtitle}
            </h4>
            
            <p className="project-desc" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{proj.desc}</p>
            
            <div className="project-tech-stack" style={{ margin: '20px 0' }}>
              {proj.tech.map((tag, tIdx) => (
                <span key={tIdx} className="tech-tag">{tag}</span>
              ))}
            </div>

            <div className="project-links" style={{ marginTop: 'auto' }}>
              {proj.links.github && (
                <a 
                  href={proj.links.github} 
                  className="project-link-btn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`View frontend code for ${proj.title}`}
                >
                  <GithubIcon /> {proj.links.githubBackend ? 'FRONTEND CODE' : 'CODE'}
                </a>
              )}
              {proj.links.githubBackend && (
                <a 
                  href={proj.links.githubBackend} 
                  className="project-link-btn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`View backend code for ${proj.title}`}
                >
                  <GithubIcon /> BACKEND CODE
                </a>
              )}
              {proj.links.live && proj.links.live !== '#' && (
                <a 
                  href={proj.links.live} 
                  className="project-link-btn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`View live demo of ${proj.title}`}
                >
                  <ExternalLink /> LIVE DEMO
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
