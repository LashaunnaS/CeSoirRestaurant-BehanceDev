import React from 'react';
import { HeaderSection, Logo, NavList, A } from './headerStyles';
import logo from '../../images/cesoir.png';

const iconColor = { color: '#f74e78' }

const Header = () => {
    return (
        <HeaderSection>
            <Logo>
                <img src={logo} alt="Ce Soir" />
            </Logo>
            <NavList>
                <A href="#about"><li style={iconColor}>OUR STORY</li></A>
                <A href="#fare"><li style={iconColor}>FARE</li></A>
                <A href="#drink"><li style={iconColor}>DRINK</li></A>
            </NavList>
        </HeaderSection>
    )
}

export default Header;