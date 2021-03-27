import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import TextField from '@material-ui/core/TextField'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import './Styles/Info.css'
import Logo from '../Images/SAITC_logo.png'

function Informacion() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    let slides = [
        {
            nombre: 'Un evento para todos',
            imagen: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        },
        {
            nombre: 'Hacking Time',
            imagen: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        }
    ]

    return (
        <div >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className="mb-5">

                <div className="slider" >


                </div>


                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 card-pri">
                            <img src="https://img.icons8.com/fluent/240/000000/air-raider.png" width="150px" />
                            <h2>Tiempo</h2>
                            <p>Tienes 24 horas para hacer un juego</p>

                        </div>
                        <div className="col-lg-4 card-pri">
                            <img src="https://img.icons8.com/fluent/240/000000/greek-helmet.png" width="150px" />
                            <h2>Equipos</h2>
                            <p>Cada equipo puede estar conformado por 5 integrantes</p>

                        </div>
                        <div className="col-lg-4 card-pri">
                            <img src="https://img.icons8.com/fluent/240/000000/conference-call.png" width="150px" />
                            <h2>Público</h2>
                            <p>Están invitados estudiantes de toda Latinoamérica</p>

                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette desc">
                        <div className="col-md-12">
                            <h2 className="featurette-heading txt-center">Acerca de</h2>
                            <br />
                            <p className="lead txt-center">Es un evento internacional en el cual se tienen 24 horas para desarrollar un videojuego. Del 17 al 18 de abril. Contaremos con speakers que trabajan en la industria y habrá premios para los equipos ganadores de cada categoría.</p>
                            <p className="lead txt-center">Durante esas 24 horas podrás crear un juego sobre una temática en específico que se revelará durante la inauguración del evento, asistir a conferencias de personas con mucha experiencia en la industria de los videojuegos y a talleres impartidos por profesionales que tienen un doctorado en su área.</p>
                            <p className="lead txt-center">Es un evento gratuito que busca conectar más a estudiantes que gusten de los videojuegos para que así puedan hacer networking y divertirse.</p>
                        </div>
                    </div>

                    <hr className="featurette-divider" />


                    <div className="row featurette desc">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Organizadores</h2>
                            <br />
                            <p className="lead">La SAITC es la Sociedad de Alumnos de la carrera de Ingeniería en Tecnologías Computacionales, un grupo de alumnos del Tecnológico de Monterrey, Campus Monterrey, que dedican su tiempo a organizar eventos a beneficio de la comunidad de ITC en su campus.</p>

                        </div>
                        <div className="col-md-5 order-md-1" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <img id="logo" src={Logo} alt="SAITC" style={{width: '200px', height:'200px'}} />

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Informacion
