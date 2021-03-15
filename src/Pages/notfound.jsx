import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function NotFound() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '91.1vh',
                    background: '#05323D',
                    color: '#ffff',
                    flexDirection: 'column'
                }}
            >
                <h1>404</h1>
                <br />
                <h3>Lo sentimos, no encontramos esta página</h3>
            </div>
        </>
    )
}

export default NotFound
