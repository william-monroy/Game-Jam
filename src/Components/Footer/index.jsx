import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRigths,SocialIcons,SocialIconLink} from './FooterElements'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Navegación</FooterLinkTitle>
                            <FooterLink to="/">Inicio</FooterLink>
                            <FooterLink to="/info">Información</FooterLink>
                            <FooterLink to="/categorias">Categorías</FooterLink>
                            <FooterLink to="/patrocinios">Patrocinios</FooterLink>
                            <FooterLink to="/contacto">Contacto</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de</FooterLinkTitle>
                            <FooterLink to="/">Soporte</FooterLink>
                            <FooterLink to="/">Conócenos</FooterLink>
                            <FooterLink to="/">Colaboradores</FooterLink>
                            <FooterLink to="/">Código de Conducta</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Agenda</FooterLinkTitle>
                            <FooterLink to="/">Apertura</FooterLink>
                            <FooterLink to="/">Charlas Informativas</FooterLink>
                            <FooterLink to="/">Networking</FooterLink>
                            <FooterLink to="/">Talleres</FooterLink>
                            <FooterLink to="/">Clausura</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
                <SocialMedia className="pb-5">
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            SAITC
                        </SocialLogo>
                        <WebsiteRigths>SAITC &copy; {new Date().getFullYear()} All rigths reserved.</WebsiteRigths>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/' target='_blank' aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
