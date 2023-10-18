import React, { useState } from 'react';

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/enviar-correo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, telefono, mensaje }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Puedes manejar la respuesta del servidor aquí, como mostrar un mensaje de confirmación al usuario.
      })
      .catch((error) => {
        console.error(error);
        // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario.
      });
  };

  return (
    <section className="contacto" id="contacto">
      <h2>Contactanos</h2>
      <div className="contenido-contacto">
        <div className="informacion-contacto">
          <h3>Información de contacto</h3>
          <p>fundacion44@gmail.com</p>
          <p>+591 62982552</p>
        </div>
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          <div className="input-contacto">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="input-contacto">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              placeholder="tucorreo@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="input-contacto">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              placeholder="Ingrese su numero de telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="input-contacto">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="input-contacto">
            <input type="submit" value="Enviar" className="btn azul" />
          </div>
        </form>
      </div>
    </section>
  );
};
