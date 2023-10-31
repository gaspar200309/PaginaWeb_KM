import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false); 
  }, [location]);

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo">
          AV
        </a>
        <div className={`nav-links ${menuOpen ? 'mobile-menu' : ''}`}>
          <ul>
            <li>
              <NavLink to="/inicio" activeclassname="active">Inicio</NavLink>
            </li>
            <li className='subMenu'>
              <NavLink to="/carrera" activeclassname="active">Carreras</NavLink>
            </li>
            <li>
              <NavLink to="/facultad" activeclassname="active">Universidades</NavLink>
            </li>
            <li>
              <NavLink to="/becas" activeclassname="active">Becas</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeclassname="active">Contacto</NavLink>
            </li>
          </ul>
        </div>
        <span className="menu-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </nav>
    </header>
  );
};
