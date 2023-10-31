import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import { App2 } from './App';
import { PieDePagina } from './rutas/Componentes/PieDePagina';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App2></App2>
      <PieDePagina></PieDePagina>
      
    </React.StrictMode>
  </BrowserRouter>
);

