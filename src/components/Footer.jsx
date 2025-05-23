import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul className="footer-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/about">Sobre Mí</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://github.com/JTocarruncho07" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/juan-pablo-tocarruncho-9234082a3/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} JPBYTES. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 