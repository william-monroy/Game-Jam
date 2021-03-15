import './Navbar.css'
import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";

function Navbar() {
    return (
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <IconButton>
                <MenuIcon 
                    id="icon"
                    style={{fontSize:'50'}}
                /> 
            </IconButton>
            <NavMenu>
                <NavLink to="/info" activeStyle>
                    Informacion
                </NavLink>
                        <NavLink to="/categorias" activeStyle>
                            Categorias
                </NavLink>
                        <NavLink to="/patrocinios" activeStyle>
                            Patrocinios
                </NavLink>
                        <NavLink to="/contacto" activeStyle>
                            Contacto
                </NavLink>
            </NavMenu>
        </Nav >

    );
};


export default Navbar;
