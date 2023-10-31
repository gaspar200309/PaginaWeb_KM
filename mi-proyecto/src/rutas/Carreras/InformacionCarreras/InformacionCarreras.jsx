import React from "react";
import { useParams } from "react-router-dom";
import CarreraApp from "../CarreraApp";
import "./InformacionesCarrera.css";
import { Link } from "react-router-dom";

const InformacionCarreras = () => {
    let { idCar } = useParams();

    let carreraSelect = CarreraApp.find((carrera) => carrera.idCar == idCar);

    if (!carreraSelect) {
        return (
            <div>
                <p>Carrera no encontrada</p>
            </div>
        );
    }

    return (
        <>
            <header>
                <div className="headerC">
                    <div className="image-containerC">
                        <img
                            src={carreraSelect.imgSrc}
                            alt="Título de la Carrera"
                        />
                        <div className="image-textC">
                            <h1>
                                {carreraSelect.titulo} <span>{carreraSelect.duracion}</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="navigation-barC">
                    <Link to="/">Inicio /</Link>
                    <Link to="/carrera">Carreras /</Link>
                    <Link to="#">{carreraSelect.titulo}</Link>
                </div>
            </header>

            <div className="containerC">
                <div className="content">
                    <h1>Información de la Carrera: {carreraSelect.titulo} </h1>
                    <div className="contenidoC">
                        <h2>¿Qué es la Carrera?</h2>
                        <p>{carreraSelect.descripcion}</p>
                    </div>

                    <div className="contenidoC">
                        <h2>Áreas de trabajo de los {carreraSelect.titulo}s</h2>
                        <ul>
                            {carreraSelect.lugaresDeTrabajo.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="contenidoC">
                        <h2>Materias que te sirven de base</h2>
                        <ul>
                            {carreraSelect.materias.map((materia, index) => (
                                <li key={index}>{materia}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="enlacesC">
                        <h2>Universidades para Estudiar {carreraSelect.titulo}</h2>
                        {carreraSelect.universidades.map((universidad, index) => (
                            <a
                                key={index}
                                href={universidad.enlace}>
                                {universidad.nombre}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformacionCarreras;
