import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages'
import Informacion from './Pages/info';
import Categorias from './Pages/categorias';
import Patrocinios from './Pages/patrocinios';
import Contacto from './Pages/contacto';
import NotFound from './Pages/notfound';
import Registro from './Pages/registro';
import Agenda from './Pages/agenda';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Informacion} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/registro" component={Registro} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
