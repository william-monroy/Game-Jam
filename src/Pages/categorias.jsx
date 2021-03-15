import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function Categorias() {
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
            <h1>Categorias</h1>
        </div>
        </>
        
    )
}

export default Categorias
