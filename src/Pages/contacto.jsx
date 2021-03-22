import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
{/*import BackImg from '../Images/contact1.jpeg'*/ }

function Contacto() {

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
            
            <div style={{ display:'flex', alignItems: 'center', justifyContent:'center' }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwZr8mF5d4UAdTU20550nCDx0GmqDAvMWizUmIqyBU8zp_Dg/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

            </div>
            <Footer />
        </div>
    )
}

export default Contacto
