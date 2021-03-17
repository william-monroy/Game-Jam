import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>GAME JAM SAITC 2021</HeroH1>
                <HeroP>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem commodi voluptates suscipit ex similique ratione.
                </HeroP>
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
