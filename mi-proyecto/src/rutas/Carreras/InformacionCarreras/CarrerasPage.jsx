import React from 'react';
import Carrera from './InformacionCarrera';
import carrerasData from './DatodCar'; // Importa los datos de las carreras

function CarrerasPage() {
  return (
    <div>
      <h1>Carreras Universitarias</h1>
      {carrerasData.map((carrera) => (
        <Carrera key={carrera.id} {...carrera} />
      ))}
    </div>
  );
}

export default CarrerasPage;
