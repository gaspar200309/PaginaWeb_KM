import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./rutas/Componentes/NavBar"
import { Inicio } from "./rutas/Inicio"
import { Facultad } from "./rutas/Universides"
import  Carrera  from "./rutas/Carreras/Carrera"
import { Contacto } from "./rutas/Contacto"
import { Becas } from "./rutas/Becas"
import CarrerasPage from "./rutas/Carreras/InformacionCarreras/CarrerasPage"

export const App2 = () => {
    return (
        <>
          <NavBar /> {/* Incluye el componente de la barra de navegación */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/facultad" element={<Facultad />} />
            <Route path="/carrera" element={<Carrera />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/becas" element={<Becas />} />
            <Route path="/carrera/:id" element={<CarrerasPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      );
}
