import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BackImg from '../Images/hacker.jpg'
import './Styles/Categorias.css'
import {Link} from 'react-router-dom'

function Categorias() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            style={{ backgroundImage: `url(${BackImg})` }}
        >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className="container mt-3">

                <div className="p-4 p-md-5 mb-4 text-white rounded card-init">
                    <div className="col-md-12 px-0">
                        <h1 className="display-4 fst-italic">Conoce nuestras categorías</h1>
                        <p className="lead my-3 txt-init">Puedes participar en una de las siguientes categorías, que se evaluarán independientemente.</p>

                    </div>
                </div>

                <div className="row mb-2 card-init">
                    <div className="col-md-6">
                        <div
                            className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            style={{ background: "#262D31" }}
                        >
                            <div className="col p-4 d-flex flex-column position-static">


                                <h3
                                    className="mb-0"
                                    style={{ color: "#5a4dc0" }}
                                >
                                    Categoría Cerrada
                                </h3>
                                <div className="mb-1 text-muted">Experimented</div>
                                <br />
                                <p
                                    className="card-text mb-auto txt-init"
                                >
                                    Tendrán 24 horas para crear todo el contenido que incluya su videojuego, no podrán usar nada que esté en internet aún si este material tenga licencia de Creative Commons.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            style={{ background: "#262D31" }}
                        >
                            <div className="col p-4 d-flex flex-column position-static">

                                <h3
                                    className="mb-0"
                                    style={{ color: "#58bce7" }}
                                >
                                    Categoría Abierta
                                </h3>
                                <div className="mb-1 text-muted">Newbie</div>
                                <br />
                                <p
                                    className="card-text mb-auto txt-init"
                                >
                                    Podrán usar material creado previamente por ustedes u otros autores durante el Game Jam, siempre y cuando tenga licencia de Creative Commons.
                                </p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 p-md-5 mb-4 text-white rounded card-init">
                    <div className="col-md-12 px-0">
                        <h1 className="display-4 fst-italic">Regístrate</h1>
                        <p className="lead my-3 txt-init">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci unde quasi repellat! Temporibus, magnam tempora ex aliquid sequi iusto dignissimos!</p>
                        <div class="d-grid gap-2 col-6 mx-auto mt-5 mb-5">

                            <button class="btn btn-dark" type="button">
                                <Link to="/registro" style={{textDecoration:'none', color:'white'}}>Formulario de Registro</Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Categorias
