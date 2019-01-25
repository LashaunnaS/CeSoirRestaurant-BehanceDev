import styled from 'styled-components';
import Hero from '../../images/whiteWood.jpg';


export const HeroSection = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-areas: 
        ".  mainTop .";
    background-image: url(${Hero});
    height: 85vh;

    @media(max-width: 771px){
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas: 
        ".  mainTop .";
    }

`;

export const HeroMain = styled.div`
    grid-area: mainTop;
    display: flex;
    justify-content: space-around; 
    align-self: center;


    @media(max-width: 771px){
         align-self: baseline;
    }
   
`;
