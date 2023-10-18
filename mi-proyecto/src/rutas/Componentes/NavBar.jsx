import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ImagenesApp from '../../assets/ImagenesApp';

export const NavBar = () => {
  const menuHamburger = useRef(null);
  const navLinks = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    navLinks.current.classList.toggle('mobile-menu');
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    menuHamburger.current.addEventListener('click', toggleMobileMenu);

    // Limpieza de eventos cuando el componente se desmonta
    return () => {
      menuHamburger.current.removeEventListener('click', toggleMobileMenu);
    };
  }, [isMobileMenuOpen]);

  // Cerrar el menú cuando se hace clic en un enlace
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      navLinks.current.classList.remove('mobile-menu');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">AVENTURAS</NavLink>
        </div>
        <div className="nav-links" ref={navLinks}>
          <ul>
            <li className="active">
              <NavLink to="/inicio" onClick={closeMobileMenu}>
                Inicio
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/carrera" onClick={closeMobileMenu}>
                Carreras
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/facultad" onClick={closeMobileMenu}>
                Universidades
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/becas" onClick={closeMobileMenu}>
                Becas
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/contacto" onClick={closeMobileMenu}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <img
          src={ImagenesApp.imgHamburguesa}
          alt="/"
          className="menu-hamburger"
          ref={menuHamburger}
        />
      </nav>
    </header>
  );
};
