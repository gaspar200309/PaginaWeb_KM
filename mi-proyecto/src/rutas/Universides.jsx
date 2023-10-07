import React from 'react'
import './universidades.css';
import ImagenesApp from '../assets/ImagenesApp';


export const Facultad = () => {
    return (
        <>
            <div className="contenedorU">
                <div className="encabezadoU">
                    <div className="imgUniversidades">
                        <img src={ImagenesApp.imgFondo} height="200px" width="100%" alt="" />
                    </div>
                    <div className="universidades">
                        <h2>Universidades en Cochabamba</h2>

                    </div>
                </div>
                <div>
                    <p className='textoU'>¿Terminaste la secundaria y quieres estudiar una carrera universitaria? ¡Felicidades! Ahora necesitas conocer todas las opciones de universidades en Bolivia. Estudiar en la universidad una licenciatura o ingeniería, es una excelente decisión ya que te ofrecerá muchos beneficios, tanto económicos como personales.

                        Universidades-bo.com fue creada para difundir información sobre todas las universidades públicas y privadas de Bolivia. Además podrás encontrar todas las carreras, diplomados, maestrías y doctorados que se pueden estudiar en las diferentes universidades de Santa Cruz, La Paz, Cochabamba, Oruro, Sucre, Tarija y de otras ciudades.</p>
                </div>

                <div className="containerU">


                    <a href="https://www.umss.edu.bo/" target="_blank" className="cardU">
                        <img src={ImagenesApp.imgEscudo} height="100px" width="80px" alt="Universidad 1" />
                        <h2>Universidad Mayor de San simon</h2>
                        <p className='textoU'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis, nisi esse voluptatibus eveniet adipisci consequatur totam nemo id enim repellendus a facilis, eaque asperiores minus veniam molestiae quam suscipit.Una breve descripción de la Universidad 1.</p>
                    </a>

                    <a href="https://www.universidad2.com" target="_blank" className="cardU">
                        <img src="https://via.placeholder.com/150" alt="Universidad 2" />
                        <h2>Universidad Catolica Boliviana</h2>
                        <p className='textoU'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam et earum aspernatur consectetur expedita accusamus a illo odit temporibus, debitis eligendi eos dolorem? Ullam beatae itaque error quibusdam, quam amet?Una breve descripción de la Universidad 2.</p>
                    </a>

                    <a href="https://www.universidad2.com" target="_blank" className="cardU">
                        <img src="https://via.placeholder.com/150" alt="Universidad 2" />
                        <h2>Universidad 2</h2>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam et earum aspernatur consectetur expedita accusamus a illo odit temporibus, debitis eligendi eos dolorem? Ullam beatae itaque error quibusdam, quam amet?Una breve descripción de la Universidad 2.</p>
                    </a>

                    <a href="https://www.universidad2.com" target="_blank" className="cardU">
                        <img src="https://via.placeholder.com/150" alt="Universidad 2" />
                        <h2>Universidad 2</h2>
                        <p className='textoU'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam et earum aspernatur consectetur expedita accusamus a illo odit temporibus, debitis eligendi eos dolorem? Ullam beatae itaque error quibusdam, quam amet?Una breve descripción de la Universidad 2.</p>
                    </a>

                    <a href="https://www.universidad2.com" target="_blank" className="cardU">
                        <img src="https://via.placeholder.com/150" alt="Universidad 2" />
                        <h2>Universidad 2</h2>
                        <p className='textoU'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam et earum aspernatur consectetur expedita accusamus a illo odit temporibus, debitis eligendi eos dolorem? Ullam beatae itaque error quibusdam, quam amet?Una breve descripción de la Universidad 2.</p>
                    </a>

                </div>
            </div>

        </>

    )
}
