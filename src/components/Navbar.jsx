import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Si estamos cerca del final de la página (footer)
      if (currentScrollY + windowHeight >= documentHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="/img/Logos/logoNavbar.png" alt="logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-link' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
              Servicios
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
              Sobre Mí
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
              Proyectos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link' onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
