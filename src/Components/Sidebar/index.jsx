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
                    <SidebarLink to="info">
                        Información
                    </SidebarLink>
                    <SidebarLink to="categorias">
                        Categorías
                    </SidebarLink>
                    <SidebarLink to="patrocinios">
                        Patrocinios
                    </SidebarLink>
                    <SidebarLink to="contacto">
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
