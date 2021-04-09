import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Horario from '../Components/Horario'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import BackImg from '../Images/Poster2.jpg'

const Agenda = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${BackImg})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}

        >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className="fondo" style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                paddingTop: '50px',
                paddingBottom: '50px'
            }}>

                <Horario />

            </div>
            <Footer />
        </div>
    )
}

export default Agenda
