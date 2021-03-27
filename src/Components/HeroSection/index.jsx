import React, { useState } from 'react'
import Video from '../../Videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Poster from '../../Images/Poster.jpg'
import './HeroSection.css'

function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer className='contenido'>
            <HeroBg
                style={{ backgroundImage: `url(${Poster})`,
                         backgroundPosition: 'center center',
                         backgroundAttachment: 'fixed',
                         backgroundSize: 'cover'
                     }}

            >
                
            </HeroBg>
            <HeroContent>
                <HeroBtnWrapper>
                    <Button
                        to="/info"
                        onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
