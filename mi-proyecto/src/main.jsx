import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import { App2 } from './App2';
import { PieDePagina } from './rutas/Componentes/PieDePagina';




// Utiliza unstable_createRoot en lugar de createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App2></App2>
      <PieDePagina></PieDePagina>
      
    </React.StrictMode>
  </BrowserRouter>
);

