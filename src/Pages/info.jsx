import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import TextField from '@material-ui/core/TextField'

function Informacion() {
    return (
        <>
            <Sidebar />
            <Navbar />
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
                <p className="parrafo">Lorem ipsum dolor sit amet.</p>
                <p className="parrafo">hola</p>

                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>

            </div>
        </>
    )
}

export default Informacion
