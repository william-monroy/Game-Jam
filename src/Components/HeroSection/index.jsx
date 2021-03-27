import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Poster from '../../Images/Poster.jpg'

function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                
                <img src={Poster} alt='Game Jam SAITC' className='img-responsive' style={{width:'100%'}}/>
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
