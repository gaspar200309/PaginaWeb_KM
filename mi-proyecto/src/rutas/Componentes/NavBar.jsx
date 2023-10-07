import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ImagenesApp from '../../assets/ImagenesApp';

export const NavBar = () => {
  useEffect(() => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');

    menuHamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-menu');
    });

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      menuHamburger.removeEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
      });
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo">
          AVENTURAS
        </a>
        <div className="nav-links">
          <ul>
            <li className="active">
              <NavLink to="/inicio">Inicio</NavLink>
            </li>
            <li className="active">
              <NavLink to="/carrera">Carreras</NavLink>
            </li>
            <li className="active">
              <NavLink to="/facultad">Universidades</NavLink>
            </li>
            <li className="active">
              <NavLink to="/becas">Becas</NavLink>
            </li>
            <li className="active">
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
        <img src={ImagenesApp.imgHamburguesa} alt="/" className="menu-hamburger" />
      </nav>
    </header>
  );
};
