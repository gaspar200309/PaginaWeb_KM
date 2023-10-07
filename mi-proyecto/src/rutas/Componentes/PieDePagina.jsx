import React from 'react'

export const PieDePagina = () => {
    return (
        <>
            <div className="pie-pagina ">
                <div className="contenedor-piepagina contenedor">
                    <div className="info">
                        <h3>Dirección</h3>
                        <p>23.Cochabamba Bolvia 75012</p>
                    </div>
                    <div className="info">
                        <h3>Días de atencion</h3>
                        <p>Lunes a Jueves 8am - 18pm</p>
                        <p>+591 62982552</p>
                    </div>
                    <div className="info">
                        <h3>Horarios</h3>
                        <p>Lunes - Domingo 7am - 11pm</p>
                        <div className ="redes-sociales redes-pie">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Noticias</h3>
                        <p>suscribete para recibir más noticias</p>
                        <input type="email" placeholder="Tu correo" />
                        <input type="submit" className="btn btn-verde" value="Suscribirse" />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="logo">
                    <h2>Por buen futuro</h2>
                </div>
                <p>Todos los derechos reservados <span className="fecha"></span>  &copy; Desarollo por gaspar123</p>
            </footer>
        </>
    )
}
