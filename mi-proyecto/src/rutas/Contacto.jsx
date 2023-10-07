import React from 'react'


export const Contacto = () => {
  return (
    <>
      <section className="contacto" id="contacto">
        <h2>Contactanos</h2>
        <div className="contenido-contacto">
            <div className="informacion-contacto">
                <h3>Información de contacto</h3>
                <p>fundacion44@gmail.com</p>
                <p>+591 62982552</p>
            </div>
            <form className="formulario-contacto">
                <div className="input-contacto">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre"/>
                </div>
                <div className="input-contacto">
                    <label htmlFor="correo">Correo</label>
                    <input type="text" id="correo" placeholder="tucorreo@gmail.com"/>
                </div>
                <div className="input-contacto">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefono" placeholder="Ingrese su numero de telefono"/>
                </div>
                <div className="input-contacto">
                    <label htmlFor="telefono"  >Mensaje</label>
                    <textarea></textarea>
                </div>
                <div className="input-contacto">
                    <input type="submit" value="Enviar" className="btn azul"/>
                </div>
            </form>
        </div>
    </section>
   
    </>
  )
}
