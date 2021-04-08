import './Sidebar.css'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import {SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <IconButton onClick={toggle}>
                <CloseIcon 
                    id="closeIcon"
                    style={{fontSize:'50'}}
                /> 
            </IconButton>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/info" onClick={toggle}>
                        Información
                    </SidebarLink>
                    <SidebarLink to="/categorias" onClick={toggle}>
                        Categorías
                    </SidebarLink>
                    <SidebarLink to="/patrocinios" onClick={toggle}>
                        Patrocinios
                    </SidebarLink>
                    <SidebarLink to="/agenda" onClick={toggle}>
                        Agenda
                    </SidebarLink>
                    <SidebarLink to="/contacto" onClick={toggle}>
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
