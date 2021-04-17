import React from 'react'
import './Horario.css'
import Unity from '../../../src/Images/Unity.png'
import Lienzo from '../../../src/Images/Lienzo.png'
import TenderClaws from '../../../src/Images/Tender_Claws.png'
import Tec from '../../../src/Images/Tec.png'

const Horario = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div id="content">
                <ul className="dia">
                  <h2 className="title-dia">Sábado GMT-5</h2>
                </ul>
                <ul className="timeline">
                  <li className="event" data-time="8:00 - 11:00am" >
                    
                    <h3>Registro</h3>
                    <p>Los participantes deberán registrar a sus equipos según las idicaciones establecidas en el apartado de Información.</p>
                  </li>
                  <li className="event" data-time="11:00 - 12:00pm">
                    <h3>Inauguración</h3>
                    <p style={{textAlign:'justify'}}>Se dará inicio al Game Jam. Asimismo, daremos la bienvenida a todos los participantes y patrocinadores que nos apoyaron a organizar el evento. También podrás conocer información importante y revelaremos la temática del evento.</p>
                  </li>
                  <li className="event" data-time="1:00 - 2:00pm">
                    
                    <h3>Cómo manejar a un equipo creativo</h3>
                    <p style={{textAlign:'justify'}}>Impartido por Rubén Dominguez - Project Mananger de Lienzo</p>
                    <img className="img-desc" src={Lienzo} alt="Lienzo" srcset=""/>
                  </li>
                  <li className="event" data-time="2:00 - 4:00pm">
                    <h3>Gamification</h3>
                    <p style={{textAlign:'justify'}}>Impartido por Dra. Lorena Matínez</p>
                    
                  </li>
                  <li className="event" data-time="4:00 - 5:00pm">
                    <h3>Gamification</h3>
                    <p style={{textAlign:'justify'}}>Impartido por Hesiquio - Game Designer & Artist</p>
                    <img className="img-desc" src={TenderClaws} alt="TenderClaws" srcset=""/>
                  </li>
                  <li className="event" data-time="5:00 - 7:00pm">
                    <h3>Narrativa Hipertextual</h3>
                    <p style={{textAlign:'justify'}}>Impartido por Dra. Xitlally Romero y Dra. Susana Ruíz</p>
                    
                  </li>
                  <li className="event" data-time="7:00 - 9:00pm">
                    <h3>Making Games isn't all About Making Games </h3>
                    <p style={{textAlign:'justify'}}>Impartido por Luis Bazan - Developer Support Engineer</p>
                    <div className="img-dec">

                    <img className="img-desc" src={Unity} alt="Unity" srcset=""/>
                    </div>
                  </li>
                  <li className="event" data-time="10:00 - 6:00am">
                    <h3>Actividades</h3>
                    <p style={{textAlign:'justify'}}>Diversas actividades para interactuar con las personas que están participando en el evento.</p>
                  </li>
                </ul>
                <ul className="dia">
                  <h2 className="title-dia">Domingo GMT-5</h2>
                </ul>
                <ul className="abajo timeline">
                  <li className="event" data-time="8:00 - 10:00am">
                    
                    <h3>Algoritmos Genéticos para la generación de terrenos</h3>
                    <p style={{textAlign:'justify'}}>Doctor José Carlos Ortiz Bayliss</p>
                  </li>
                  <li className="event" data-time="12:00 - 1:00pm">
                    
                    <h3>Preparación de videojuegos</h3>
                    <p style={{textAlign:'justify'}}>Tendrás una hora para preparar un vídeo pitch de tu juego de máximo dos minutos de duración y subir un ejecutable (de preferencia web) a la página de <a href="http://itch.io" target="_blank">itch.io</a> del Game Jam.</p>
                  </li>
                  <li className="event" data-time="1:00 - 2:00pm">
                    
                    <h3>Introducción de Jueces y detalles de la Calificación</h3>
                    <p style={{textAlign:'justify'}}>Presentaremos a las personas que formarán parte del jurado junto a la rúbrica con la cual estarán caliicando sus juegos. Anunciaremos a los equipos ganadores el viernes 23 de abril.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Horario
