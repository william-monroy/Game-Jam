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
                        <p className="lead my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sed deserunt mollitia repudiandae rem accusantium delectus praesentium, eligendi quod quam repellendus, eum ratione accusamus suscipit expedita eos animi officiis dicta!</p>
                        
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
                                    Amateur
                                </h3>
                                <div className="mb-1 text-muted">no experience</div>
                                <p 
                                    className="card-text mb-auto"
                                    style={{color:"#fff"}}
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, provident facere consectetur, debitis officiis fugiat rerum eaque quas voluptates tempora fuga aliquam numquam optio inventore id porro? Mollitia, ratione. Culpa aut amet laborum dolores cupiditate sapiente, voluptatem rem. Quod dolor aliquid cumque alias nobis vitae maiores suscipit assumenda voluptas reiciendis.
                                </p>
                                <p 
                                    className="card-text mb-auto"
                                    style={{color:"#fff"}}
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laudantium culpa voluptate pariatur, tempore sunt nobis illo repellendus iste dolores! Perspiciatis fugiat blanditiis quae alias? Culpa eveniet harum asperiores iusto?
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
                            style={{background:"#262D31"}}
                        >
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Categoría 2</strong>
                                <h3 
                                    className="mb-0"
                                    style={{color:"#6854ff"}}
                                >
                                    Advance
                                </h3>
                                <div className="mb-1 text-muted">Experimented</div>
                                <p 
                                    className="card-text mb-auto"
                                    style={{color:"#fff"}}
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, provident facere consectetur, debitis officiis fugiat rerum eaque quas voluptates tempora fuga aliquam numquam optio inventore id porro? Mollitia, ratione. Culpa aut amet laborum dolores cupiditate sapiente, voluptatem rem. Quod dolor aliquid cumque alias nobis vitae maiores suscipit assumenda voluptas reiciendis.
                                </p>
                                <p 
                                    className="card-text mb-auto"
                                    style={{color:"#fff"}}
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laudantium culpa voluptate pariatur, tempore sunt nobis illo repellendus iste dolores! Perspiciatis fugiat blanditiis quae alias? Culpa eveniet harum asperiores iusto?
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
