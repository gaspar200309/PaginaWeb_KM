import React from 'react';
import './EstilosInfor.css';

function Carrera({ nombre, descripcion, lugaresDeTrabajo, areasDeTrabajo, materias, universidades, imagen }) {
  return (
    <>
      <header>
        <div className="header">
          <div className="image-container">
            <img src={imagen} alt={nombre} />
          </div>
        </div>
      </header>

      <div className="hola">
        <div className="container">
          <section>
            <div className="content">
                <h1>Información de la Carrera: {nombre}</h1>
                <div className="contenido">
                  <h2>¿Qué es la Carrera?</h2>
                  <p>{descripcion}</p>
                </div>

                <div className="contenido">
                  <h2>¿Dónde Trabajan los {nombre}?</h2>
                  <ul>
                    {lugaresDeTrabajo.map((lugar, index) => (
                      <li key={index}>{lugar}</li>
                    ))}
                  </ul>
                </div>

                <div className="contenido">
                  <h2>Áreas de Trabajo</h2>
                  <ul>
                    {areasDeTrabajo.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>

                <div className="contenido">
                  <h2>Materias que se Deben Aprender</h2>
                  <ul>
                    {materias.map((materia, index) => (
                      <li key={index}>{materia}</li>
                    ))}
                  </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="sidebar">
          <h3>Universidades para Estudiar {nombre}</h3>
          <ul>
            {universidades.map((universidad, index) => (
              <li key={index}>{universidad}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Carrera;
