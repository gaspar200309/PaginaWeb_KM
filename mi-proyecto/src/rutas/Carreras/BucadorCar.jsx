
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buscador from "../Componentes/Buscador";


const Carrera = () => {
  // Define el estado para almacenar las carreras filtradas
  const [filteredCarreras, setFilteredCarreras] = useState([]);

  // Función para actualizar las carreras filtradas
  const updateFilteredCarreras = (carreras) => {
    setFilteredCarreras(carreras);
  };

  // Supongo que cada carrera tiene un campo 'area' que indica su área.
  const areas = {};

  // Organiza las carreras en áreas.
  filteredCarreras.forEach((carrera) => {
    if (!areas[carrera.area]) {
      areas[carrera.area] = [];
    }
    areas[carrera.area].push(carrera);
  });

  return (
    <>
      <div>
        <div className="title-cards">
          <h2>Carreras</h2>
          <Buscador updateFilteredCarreras={updateFilteredCarreras} />
        </div>

        {Object.entries(areas).map(([area, carrerasEnArea]) => (
          <div
            key={area}
            className="areas">
            <h2>{area}</h2>
            <div className="container-card">
              {carrerasEnArea.map((carrera) => (
                <div
                  className="card"
                  key={carrera.idCar}>
                  <figure>
                    <img
                      src={carrera.imgSrc}
                      alt={carrera.descripcion}
                    />
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
