import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./rutas/Componentes/NavBar"
import { Inicio } from "./rutas/Inicio"
import Facultad  from "./rutas/Universides"
import  Carrera  from "./rutas/Carreras/Carrera"
import { Contacto } from "./rutas/Contacto"
import Becas  from "./rutas/Becas"
import InformacionCarrera  from "./rutas/Carreras/InformacionCarreras/InformacionCarreras"


export const App2 = () => {
    return (
        <>
          <NavBar /> 
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/facultad" element={<Facultad />} />
            <Route path="/carrera" element={<Carrera />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/becas" element={<Becas />} />

            <Route path="/carrera/:idCar" element={<InformacionCarrera />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      );
}
