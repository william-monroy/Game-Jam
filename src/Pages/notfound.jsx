import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function NotFound() {
    return (
        <>
        <Sidebar/>
        <Navbar/>
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
            <br/>
            <h3>Lo sentimos, no encontramos esta página</h3>
        </div>
        </>
    )
}

export default NotFound
