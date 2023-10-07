import React from 'react'
import  Carrera  from './Carreras/Carrera'
import { Contacto } from './Contacto'
import { Informacion } from './Componentes/Informacion'
import ImagenesApp from '../assets/ImagenesApp'

export const Inicio = () => {
  return (
    <>
      <img src = {ImagenesApp.imgFondo} className='fondo'></img>
      <Informacion></Informacion>
      <hr></hr>
      <Carrera></Carrera>
      <hr></hr>
      <Contacto></Contacto>
    </>
  )
}

