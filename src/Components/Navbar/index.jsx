import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Logo from '../../Images/icono.jpg'
import '../Navbar/Navbar.css'

function Navbar({ toggle }) {
    return (
        <Nav id="nav">
            <NavLink to="/">
                <img id="logo" src={Logo} alt="SAITC" />
            </NavLink>
            <Bars />
            <IconButton id="contIco" onClick={toggle}>
                <MenuIcon
                    id="icon"
                    style={{ fontSize: '50' }}
                />
            </IconButton>
            <NavMenu>
                <NavLink to="/info" activeStyle>
                    Información
                </NavLink>
                <NavLink to="/categorias" activeStyle>
                    Categorías
                </NavLink>
                <NavLink to="/agenda" activeStyle>
                    Agenda
                </NavLink>
                
                <NavLink to="/contacto" activeStyle>
                    Contacto
                </NavLink>
            </NavMenu>
        </Nav >

    );
};


export default Navbar;
