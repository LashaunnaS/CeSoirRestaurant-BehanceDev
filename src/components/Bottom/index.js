import React from 'react';
import { SectionLeft, SectionRight, BottomSection } from './bottomStyles';
import logo from '../../images/cesoir.png';

const iconColor = { color: '#f74e78' }

const Bottom = () => {
    return (
        <BottomSection>
            <SectionLeft>
                <img src={logo} alt="Ce Soir" width="200" height="100" />
                <p>
                    3344 WEST BRO STREET<br />
                    MENSVILLE CA 77085
                </p>
                <p>
                    P: (345) 567-8766<br />
                    F: (345) 567-8766
                </p>
            </SectionLeft>
            <SectionRight>
                <a href="">
                    <i style={iconColor} class="fab fa-twitter"></i>
                </a>
                <a href="">
                    <i style={iconColor} class="fab fa-facebook-f"></i>
                </a>
                <a href="">
                    <i style={iconColor} class="fab fa-instagram"></i>
                </a>
                <a href="">
                    <i style={iconColor} class="fab fa-google-plus-g"></i>
                </a>
            </SectionRight>
        </BottomSection >
    )
}

export default Bottom;