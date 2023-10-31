import React from 'react'


export const Contacto = () => {
  return (
    <>
      <section className="contacto" id="contacto">
        <h2>Contactanos</h2>
        <p>En caso de requerir mayor información sobre admisiones, fechas, entre otros, no dudes en consultar.</p>
        <div className="contenido-contacto">
            <div className="informacion-contacto">
                <h3>Información de contacto</h3>
                <p>fundacion44@gmail.com</p>
                <p>+591 62982552</p>
            </div>
            <form className="formulario-contacto"  action="https://formsubmit.co/gaspararmando44@gmail.com" method="POST" >
                <div className="input-contacto">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre" name="Nombre:"/>
                </div>
                <div className="input-contacto">
                    <label htmlFor="correo">Correo</label>
                    <input type="text" id="correo" placeholder="tucorreo@gmail.com" name="correo: "/>
                </div>
                <div className="input-contacto">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="number" id="telefono" placeholder="Ingrese su numero de telefono" name="Numero"/>
                </div>
                <div className="input-contacto">
                    <label htmlFor="telefono"  >Mensaje</label>
                    <textarea name="Texto"></textarea>
                </div>
                <div className="input-contacto">
                    <input type="submit" value="Enviar" className="btnC"/>
                </div>
            </form>
        </div>
    </section>
   
    </>
  )
}
