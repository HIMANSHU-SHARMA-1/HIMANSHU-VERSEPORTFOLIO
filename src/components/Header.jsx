import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Dynamic header styling on scroll
  const headerStyle = scrolled
    ? { transform: 'translate(2px, 2px)', boxShadow: '3px 3px 0 var(--clr-black)' }
    : { transform: 'translate(0, 0)', boxShadow: '5px 5px 0 var(--clr-black)' };

  return (
    <header className="main-header" style={headerStyle}>
      <div className="logo-box">
        <a href="#" className="logo-text" onClick={closeMenu}>
          HIMANSHU_DEV /*
        </a>
      </div>
      
      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="#about" className="nav-item" onClick={closeMenu}>ABOUT</a>
        <a href="#projects" className="nav-item" onClick={closeMenu}>PROJECTS</a>
        <a href="#skills" className="nav-item" onClick={closeMenu}>SKILLS</a>
        <a href="#contact" className="nav-item contact-nav" onClick={closeMenu}>GET IN TOUCH!</a>
      </nav>

      <button 
        className="mobile-menu-btn" 
        onClick={toggleMenu} 
        aria-label="Toggle Navigation Menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Header;
