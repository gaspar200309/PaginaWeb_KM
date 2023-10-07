import React from 'react';
import { Link } from 'react-router-dom';
import servicios from './CarreraApp';
import ImagenesApp from '../../assets/ImagenesApp';

const Carrera = () => {

  return (

    <div>
      <div className="title-cards">
        <h2>Carreras</h2>
      </div>
      <div className="container-card">
        {servicios.map((servicio, index) => (
          <div className="card" key={index}>
            <figure>
              <img src={servicio.imgSrc} alt={servicio.titulo} />
            </figure>
            <div className="contenido-card">
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <Link to="/carrera/carrera1">Leer Más</Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default Carrera;
