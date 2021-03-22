import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BackImg from '../Images/hacker.jpg'

function Categorias() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            style={{backgroundImage: `url(${BackImg})`}}
        >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className="container mt-3">

                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">Conoce nuestras categorías</h1>
                        <p className="lead my-3">Puedes participar en una de las siguientes categorías, que se evaluarán independientemente.</p>
                        
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div 
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            style={{background:"#262D31"}}
                        >
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Categoría 1</strong>
                                <h3 
                                    className="mb-0"
                                    style={{color:"#09a2b9"}}
                                >
                                    Categoría Cerrada
                                </h3>
                                <div className="mb-1 text-muted">no experience</div>
                                <p 
                                    className="card-text mb-auto"
                                    style={{color:"#fff"}}
                                >
                                    Tendrán 24 horas para crear todo el contenido que incluya su videojuego, no podrán usar nada que esté en internet aún si este material tenga licencia de Creative Commons.

                                </p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div 
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            style={{background:"#262D31", height: '240px'}}
                        >
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Categoría 2</strong>
                                <h3 
                                    className="mb-0"
                                    style={{color:"#6854ff"}}
                                >
                                    Categoría Abierta
                                </h3>
                                <div className="mb-1 text-muted">Experimented</div>
                                <p 
                                    className="card-text mb-auto"
                                    style={{color:"#fff"}}
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
            </div>

            <Footer />
        </div>

    )
}

export default Categorias
