import React, {useState} from 'react'
import {store} from '../../firebaseconfig'

const Form = () => {

    const [nombres,setNombres] = useState('');
    const [apellidos,setApellidos] = useState('');
    const [email,setEmail] = useState('');
    const [asunto,setAsunto] = useState('');
    const [mensaje,setMensaje] = useState('');

    const Enviar = async (e) => {
        e.preventDefault()
        const form_data = {
            nombres:nombres,
            apellidos:apellidos,
            email:email,
            asunto:asunto,
            mensaje:mensaje
        }
        try {
            const data = await store.collection('contacto').add(form_data)
            setNombres('')
            setApellidos('')
            setEmail('')
            setAsunto('')
            setMensaje('')
            console.log('Formulario enviado');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div
            className="container mb-5"
            
        >
            <main>
                <div className="py-5 text-center">
                    
                    <h2 style={{color:"#fff"}}>Contacta con nosotros</h2>
                    <p className="lead" style={{color:"#c5c5c5"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus natus ut iste vel doloribus esse.</p>
                </div>

                <div className="row flex-center">
                    
                    <div 
                        className="col-md-12 col-lg-8"
                        style={{margin:'0 auto'}}
                    >
                        <h4 className="mb-3" style={{color:"#fff"}}>Datos de Contacto</h4>
                        <form className="needs-validation" novalidate onSubmit={Enviar}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="nombres" className="form-label" style={{color:"#c5c5c5"}}>Nombres</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" onChange={(e)=>setNombres(e.target.value)} value={nombres} required />
                                    <div className="invalid-feedback">
                                        Nombre no válido
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="apellidos" className="form-label" style={{color:"#c5c5c5"}}>Apellidos</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" onChange={(e)=>setApellidos(e.target.value)} value={apellidos} required />
                                    <div className="invalid-feedback">
                                        Apellidos no válidos
                                     </div>
                                </div>

                                <div className="col-12">
                                    <label for="email" className="form-label" style={{color:"#c5c5c5"}}>Email</label>
                                    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Por favor escriba un email válido
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="asunto" className="form-label" style={{color:"#c5c5c5"}}>Asunto</label>
                                    <input type="text" className="form-control" id="address" placeholder="Soporte, patrocinio, etc."  onChange={(e)=>setAsunto(e.target.value)} value={asunto}  required />
                                    <div className="invalid-feedback">
                                        Asunto no válido
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="mensaje" className="form-label" style={{color:"#c5c5c5"}}>Mensaje <span className="text-muted"></span></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={(e)=>setMensaje(e.target.value)} value={mensaje} required></textarea>
                                </div>    
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Enviar Formulario</button>
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Form
