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
            <a href="mailto:biosalud108@gmail.com">biosalud108@gmail.com</a>
            <p>Tel: 618 299 2750</p>
            <p>Av Calle Teotihuacan 108 interior 4<br/>CP 34116, Durango Dgo</p>
          </div>
          <div className="footer-column">
            <h4>Enlaces Rápidos</h4>
            <Link to="/">Inicio</Link>
            <Link to="/sobre-mi">Sobre Mí</Link>
            <Link to="/metodologia">Mi Método</Link>
            <Link to="/agendar">Agendar Cita</Link>
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
