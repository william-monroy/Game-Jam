import React, { useState } from 'react'
import Img1 from '../../Images/microsoft.jpeg'
import '../Carousel/Carousel.css'

const Carousel = ( props ) => {

    const [items, setItems] = useState(props.items);

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {items.map((item, i) => (

                    (i == 0) ?
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`}></button>
                        :
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} aria-label={`Slide ${i}`}></button>

                ))}
            </div>

            <div className="carousel-inner">
                {items.map((item, i) => (

                    (i == 0) ?
                        <div className="carousel-item active">
                            <img src={item.imagen} className="d-block w-100 capa" alt={item.nombre} />
                            <div className="carousel-caption d-none d-md-block mb-5">
                                <h1>{item.nombre}</h1>
                                <p>{item.descripcion}</p>
                            </div>
                        </div>
                        :
                        <div className="carousel-item">
                            <img src={item.imagen} className="d-block w-100 capa" alt={item.nombre} />
                            <div className="carousel-caption d-none d-md-block mb-5">
                                <h1>{item.nombre}</h1>
                                <p>{item.descripcion}</p>
                            </div>
                        </div>

                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
