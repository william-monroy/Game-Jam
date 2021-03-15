import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <MenuIcon
                style= {{ fontSize: 50, color: "white" }}
            />
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
