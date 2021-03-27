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
