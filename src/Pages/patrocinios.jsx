import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'

function Patrocinios() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    let patrocinadores = [
        {
            nombre: 'Microsoft',
            imagen: 'https://images.pexels.com/photos/4491606/pexels-photo-4491606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        },
        {
            nombre: 'Google',
            imagen: 'https://images.pexels.com/photos/4132534/pexels-photo-4132534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        },
        {
            nombre: 'Unity',
            imagen: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        },
        {
            nombre: 'Riot Games',
            imagen: 'https://images.pexels.com/photos/131616/pexels-photo-131616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        },
        {
            nombre: 'Nintendo',
            imagen: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        }
    ]

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className="col-xs-12">
                <Carousel items={patrocinadores}/>
            </div>
            <Footer/>
        </>
    )
}

export default Patrocinios
