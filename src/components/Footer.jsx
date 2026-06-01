import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-column">
            <h4>BIOSALUD</h4>
            <p>Clínica de Nutrición Especializada.</p>
            <p>L. N. Alejandra María Rivera</p>
          </div>
          <div className="footer-column">
            <h4>Contacto</h4>
            <a href="mailto:contacto@biosalud.com">contacto@biosalud.com</a>
            <p>Tel: (555) 123-4567</p>
            <p>Av. Principal 123, Consultorio 402</p>
          </div>
          <div className="footer-column">
            <h4>Enlaces Rápidos</h4>
            <Link to="/">Inicio</Link>
            <Link to="/agendar">Agendar Cita</Link>
            <a href="#servicios">Servicios</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BIOSALUD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
