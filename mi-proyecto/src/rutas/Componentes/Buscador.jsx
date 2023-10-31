import React, { useState } from 'react';
import servicios from '../Carreras/CarreraApp'; 

const Buscador = ({ updateFilteredCarreras }) => {
  const [search, setSearch] = useState('');

  const normalizeString = (str) => {
    return str
      .normalize("NFD") // Normaliza los caracteres con diacríticos
      .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos
      .toLowerCase(); // Convierte a minúsculas
  };

  const showData = () => {
    const normalizedSearch = normalizeString(search);
    const filteredCarreras = servicios.filter((carrera) =>
      normalizeString(carrera.titulo).includes(normalizedSearch)
    );

    updateFilteredCarreras(filteredCarreras);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    showData();
  };

  return (
    <div className="search-container">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar Carreras"
        className="search-input"
      ></input>
      <button onClick={handleSearch} className="search-button">Buscar</button>
    </div>
  );
};

export default Buscador;
