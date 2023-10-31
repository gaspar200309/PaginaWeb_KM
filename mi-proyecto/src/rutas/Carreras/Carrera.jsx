import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarreraApp from './CarreraApp'
import BuscadorCar from './BucadorCar'

const Carrera = () => {

  const areas = {};

  CarreraApp.forEach((carrera) => {
    if (!areas[carrera.area]) {
      areas[carrera.area] = [];
    }
    areas[carrera.area].push(carrera);
  });

  return (
    <>
    <BuscadorCar></BuscadorCar>
      <div>
        {Object.entries(areas).map(([area, carrerasEnArea]) => (
          <div key={area} className="areas">
            <h2>{area}</h2>
            <div className="container-card">
              {carrerasEnArea.map((carrera) => (
                <div className="card" key={carrera.idCar}>
                  <figure>
                    <img src={carrera.imgSrc} alt={carrera.descripcion} />
                  </figure>
                  <div className="contenido-card">
                    <h3>{carrera.titulo}</h3>
                    <p>{carrera.descripcion}</p>
                    <Link to={`/carrera/${carrera.idCar}`}>Leer Más</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrera;
