import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Registro = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            style={{ background: '#0c1e49' }}
        >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTfUR_RLN1LQu-T6O3wVfZJpF-gLQDtorNJzhGk02BQI-DYw/viewform?embedded=true" width="640" height="2050" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

            </div>
            <Footer />
        </div>
    )
}

export default Registro
