import React from 'react'

export const Informacion = () => {
    const proqueEstudiar = "Porque estudiar"
  return (
    <>
       <section className="nosotros contenedor" id="nosotros">
        <h2>¿En que quieres trabajar?</h2>
        <div className="contenido-nosotros">

            <div className="texto-nosotros">
                <h3>¿Porque debo estudiar?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam laudantium sed minima consectetur!
                    Sint deleniti officia blanditiis omnis possimus temporibus nihil quos. Molestias a cumque libero
                    adipisci, voluptatum minus?</p>
                <a to ="/" className ="btn bordes"> saber más</a>
            </div>
        </div>
    </section>
    </>
  )
}
