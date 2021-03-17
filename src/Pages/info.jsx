import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import TextField from '@material-ui/core/TextField'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'


function Informacion() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    
    let slides = [
        {
            nombre: 'Un evento para todos',
            imagen: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        },
        {
            nombre: 'Hacking Time',
            imagen: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quibusdam optio esse voluptas illo sequi repudiandae quam laboriosam totam!'
        }
    ]

    return (
        <div >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className="mb-5">
                <div className="mb-5">

                    <Carousel items={slides}/>
                </div>

                <div className="container marketing">

                    <div className="row">
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo, ab corporis quis sapiente ratione eum aut distinctio animi enim provident alias, autem inventore. Cum eius quod perspiciatis nam iusto!</p>
                            <p><a className="btn btn-secondary" href="#">Lorem, ipsum dolor.</a></p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo, ab corporis quis sapiente ratione eum aut distinctio animi enim provident alias, autem inventore. Cum eius quod perspiciatis nam iusto!</p>
                            <p><a className="btn btn-secondary" href="#">Lorem, ipsum dolor.</a></p>
                        </div>
                        <div className="col-lg-4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo, ab corporis quis sapiente ratione eum aut distinctio animi enim provident alias, autem inventore. Cum eius quod perspiciatis nam iusto!</p>
                            <p><a className="btn btn-secondary" href="#">Lorem, ipsum dolor.</a></p>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="text-muted">Lorem, ipsum dolor.</span></h2>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quaerat, asperiores quibusdam adipisci dignissimos molestiae corporis ducimus amet tempore in ullam distinctio nobis dolorum exercitationem dicta consequatur eveniet. Accusamus exercitationem officia quaerat ipsa blanditiis quibusdam.</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat fuga amet debitis optio nisi nulla perspiciatis dolores temporibus, qui eum asperiores fugit laborum vitae sapiente? Maiores odio temporibus repellendus distinctio, architecto unde voluptatum similique laudantium accusantium quae dolore, optio est asperiores doloribus nisi accusamus corporis a excepturi illo voluptate soluta? Nemo nisi ut sunt necessitatibus perferendis reiciendis earum ipsa perspiciatis laboriosam exercitationem reprehenderit non, beatae eligendi labore maxime harum, neque repellat? Accusamus dolores inventore cum ut quasi autem quae!</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="text-muted"> Lorem, ipsum dolor. </span></h2>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quaerat, asperiores quibusdam adipisci dignissimos molestiae corporis ducimus amet tempore in ullam distinctio nobis dolorum exercitationem dicta consequatur eveniet. Accusamus exercitationem officia quaerat ipsa blanditiis quibusdam.</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum fuga autem minus earum id, repellendus minima deleniti assumenda voluptatem inventore at, illo tenetur facilis libero sunt ad totam error. Nisi, ducimus! Reprehenderit maxime velit rem quisquam quis iusto repudiandae iste dolorem ducimus vero, amet ad culpa consequatur beatae in.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Informacion
