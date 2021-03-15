import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function Patrocinios() {
    return (
        <>
        <Sidebar/>
        <Navbar/>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1>Patrocinios</h1>
        </div>
        </>
    )
}

export default Patrocinios
