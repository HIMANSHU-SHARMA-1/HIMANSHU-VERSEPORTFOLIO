import React, { useState } from 'react';
import { Mail, Send, CheckSquare, Loader } from 'lucide-react';

// Custom inline SVG for Github to bypass brand icon deprecation in Lucide-react
const GithubIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Custom inline SVG for Linkedin to bypass brand icon deprecation in Lucide-react
const LinkedinIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleChange = (e) => {
    const { id, value } = e.target;
    const stateKey = id.replace('form-', '');
    setFormData(prev => ({ ...prev, [stateKey]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 8000);
    }, 1200);
  };

  return (
    <section className="section-container" id="contact">
      <h2 className="section-heading">04 / TALK_TO_ME</h2>
      
      <div className="contact-layout">
        {/* Contact Form Card */}
        <div className="contact-card bg-cream">
          <div className="contact-card-header">
            <h3>SEND AN INTERACTIVE ENVELOPE 📨</h3>
            <p>Got a MERN stack project idea or looking to hire? Slide into my inbox.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="form-name">YOUR NAME:</label>
              <input 
                type="text" 
                id="form-name" 
                required 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="form-email">YOUR EMAIL:</label>
              <input 
                type="email" 
                id="form-email" 
                required 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="form-message">TELL ME EVERYTHING:</label>
              <textarea 
                id="form-message" 
                rows="5" 
                required 
                placeholder="Let's make something awesome together..." 
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary form-submit-btn ${status === 'submitting' ? 'spinning' : ''}`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>TRANSMITTING... <Loader /></>
              ) : (
                <>SEND MESSAGE <Send /></>
              )}
            </button>
          </form>

          {/* Success Banner */}
          {status === 'success' && (
            <div className="brutalist-alert bg-green">
              <div className="alert-icon"><CheckSquare /></div>
              <div className="alert-content">
                <strong>SUCCESS:</strong> Your message has bypassed security and is on its way to Himanshu's inbox!
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar Contacts */}
        <div className="connect-sidebar bg-red" style={{ color: 'var(--clr-white)' }}>
          <h3>DIRECT CHANNEL 🌐</h3>
          <p className="connect-subtext">Skip the forms and hit me up on the coordinates below:</p>
          
          <div className="coordinates-list">
            <a href="mailto:himanshusharma20969@gmail.com" className="coordinate-item">
              <Mail /> himanshusharma20969@gmail.com
            </a>
            
            <a href="https://www.linkedin.com/in/himanshu-939765298/" target="_blank" rel="noopener noreferrer" className="coordinate-item">
              <LinkedinIcon /> linkedin.com/in/himanshu
            </a>
            
            <a href="#" className="coordinate-item">
              <GithubIcon /> github.com/himanshufeb-26
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
