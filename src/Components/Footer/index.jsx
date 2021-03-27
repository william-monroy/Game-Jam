import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRigths,SocialIcons,SocialIconLink} from './FooterElements'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'

function Footer() {
    return (
        <FooterContainer>
                <SocialMedia className="pb-5">
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            SAITC
                        </SocialLogo>
                        <WebsiteRigths>SAITC &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRigths>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
