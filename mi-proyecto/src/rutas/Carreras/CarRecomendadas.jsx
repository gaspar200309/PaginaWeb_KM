import React from "react";
import { Link } from "react-router-dom";
import CarreraApp from "./CarreraApp";

const Carrera = () => {
  const areas = {};
  const carrerasToShow = [];
  
  // Agrupar carreras por área
  CarreraApp.forEach((carrera) => {
    if (!areas[carrera.area]) {
      areas[carrera.area] = [];
    }
    areas[carrera.area].push(carrera);
  });

  // Agregar una carrera de cada área
  for (const area in areas) {
    if (areas[area].length > 0) {
      carrerasToShow.push(areas[area].shift());
    }
  }

  // Agregar carreras adicionales hasta llegar a 9
  while (carrerasToShow.length < 9) {
    for (const area in areas) {
      if (areas[area].length > 0 && carrerasToShow.length < 9) {
        carrerasToShow.push(areas[area].shift());
      }
    }
  }

  return (
    <>
      <div className=".recomendadas">
        <div className="areas">
          <h2>Carreras Recomendadas</h2>
          <div className="container-card">
            {carrerasToShow.map((carrera) => (
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
        <Link to =  '/carrera'>Mas carreras</Link>
      </div>
    </>
  );
};

export default Carrera;
