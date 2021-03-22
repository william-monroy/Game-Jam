import React, {useState} from 'react'

const Form = () => {

    const [nombre,setNombre] = useState('');
    const [pais,setPais] = useState('');
    const [entidad,setEntidad] = useState('');
    const [asunto,setAsunto] = useState('');
    const [mensaje,setMensaje] = useState('');
    
    const Enviar = async (e) => {
        
        const form_data = {
            nombres:nombre,
            pais:pais,
            entidad:entidad,
            asunto:asunto,
            mensaje:mensaje
        }
        try {
            
            setNombre('')
            setPais('')
            setEntidad('')
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
                        <form className="needs-validation" novalidate onSubmit={Enviar} action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdwZr8mF5d4UAdTU20550nCDx0GmqDAvMWizUmIqyBU8zp_Dg/formResponse">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="nombres" className="form-label" style={{color:"#c5c5c5"}}>Nombre</label>
                                    <input name="entry.1488812182" type="text" className="form-control" id="firstName" placeholder="" onChange={(e)=>setNombre(e.target.value)} value={nombre} required />
                                    <div className="invalid-feedback">
                                        Nombre no válido
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="pais" className="form-label" style={{color:"#c5c5c5"}}>Pais</label>
                                    <input name="entry.711209219" type="text" className="form-control" id="lastName" placeholder="" onChange={(e)=>setPais(e.target.value)} value={pais} required />
                                    <div className="invalid-feedback">
                                        País no válido
                                     </div>
                                </div>

                                <div className="col-12">
                                    <label for="entidad" className="form-label" style={{color:"#c5c5c5"}}>Universidad o Empresa</label>
                                    <input name="entry.1408935934" type="entidad" className="form-control" id="entidad" onChange={(e)=>setEntidad(e.target.value)} value={entidad} />
                                    <div className="invalid-feedback">
                                        Por favor escriba un nombre de entidad válido
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="asunto" className="form-label" style={{color:"#c5c5c5"}}>Asunto</label>
                                    <input name="entry.1070031650" type="text" className="form-control" id="address" placeholder="Soporte, patrocinio, etc."  onChange={(e)=>setAsunto(e.target.value)} value={asunto}  required />
                                    <div className="invalid-feedback">
                                        Asunto no válido
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="mensaje" className="form-label" style={{color:"#c5c5c5"}}>Mensaje <span className="text-muted"></span></label>
                                    <textarea name="entry.1250646834" class="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={(e)=>setMensaje(e.target.value)} value={mensaje} required></textarea>
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
