import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-container" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/logo-cropped.png" alt="BIOSALUD Logo" className="logo" />
        </Link>
        
        {/* Mobile menu toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
          <a href="#servicios" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
          <div className="nav-action" onClick={() => setIsMobileMenuOpen(false)}>
            <Button to="/agendar" variant="primary">Agendar Cita</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
