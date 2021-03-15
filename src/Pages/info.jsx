import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function Informacion() {
    return (
        <>
        <Sidebar/>
        <Navbar/>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                flexDirection: 'column'
            }}
        >
            <h1>Información</h1>
            <p>Lorem ipsum  sit amet consectetur, adipisicing elit. Nihil excepturi commodi id asperiores saepe recusandae dolorem laboriosam, possimus, quis quas odit. Non deserunt quibusdam ullam soluta quasi, voluptas explicabo aliquid!</p>
            <p className="parrafo">hola</p>

        </div>
        </>
    )
}

export default Informacion
