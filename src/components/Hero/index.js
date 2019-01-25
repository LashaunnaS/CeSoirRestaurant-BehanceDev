import React from 'react';
import { HeroSection, HeroMain } from './heroStyle';
import heroLogo from '../../images/deerhead.png';

const Hero = () => {
    return (
        <HeroSection id="home">
            <HeroMain>
                {window.innerWidth < 771 ? (
                    <img src={heroLogo} height="400" width="325" />
                ) : (
                        <img src={heroLogo} height="450" width="400" />
                    )}
            </HeroMain>
        </HeroSection>
    )
}

export default Hero;

