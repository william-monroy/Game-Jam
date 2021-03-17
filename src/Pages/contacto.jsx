import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
{/*import BackImg from '../Images/contact1.jpeg'*/}

function Contacto() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div 
            style={{background:'#0c1e49'}}
        >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Form/>
            <Footer/>
        </div>
    )
}

export default Contacto
