import styled from 'styled-components';
import Hero from '../../images/whiteWood.jpg';


export const HeaderSection = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 0.5fr;
    grid-template-areas: 
        ". l n .";
    background-image: url(${Hero});
    font-family: 'Montserrat', sans-serif;


    @media(max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "l n";
        padding-left: 2em;
        padding-right: 2em;
    }

    @media(max-width: 771px){
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 0.5fr;
        grid-template-areas: 
            ". l ."
            ". n .";
    }
`;

export const Logo = styled.div`
    grid-area: l;
    align-self: center;

    @media(max-width: 771px){
        padding-top: 0.5em;
        text-align: center;
    }

`;

export const NavList = styled.ul`
    grid-area: n;
    font-weight: 600;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-self: center;
    color: #f74e78;
    padding-left: 0;

    @media(max-width: 771px){
        align-self: baseline;
    }
`;


export const A = styled.a`
    text-decoration: none;
`;

