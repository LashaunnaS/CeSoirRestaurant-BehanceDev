import styled from 'styled-components';
import textBG from '../../images/leafy.jpg'

export const BottomSection = styled.footer`
    grid-area: bottom;
    background-color: pink;
    background-image: url(${textBG});
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-areas: 
        "bottomLeft . bottomRight";

    

    @media(max-width: 771px){
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 0.5fr 1fr;
        grid-template-areas: 
            ". bottomTop ."
            ". bottomBottom .";
    }
`;

export const SectionLeft = styled.div`
    grid-area: bottomLeft;
    padding-left: 2em;
    font-size: 13px;
    padding-left: 2em;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 771px){
        grid-area: bottomBottom;
        padding-bottom: 0.5em;
        text-align: center;
    }
`;


export const SectionRight = styled.div`
    grid-area: bottomRight;
    padding-top: 5em;
    display: flex;
    justify-content: space-evenly; 
    align-self: center;
    padding-right: 2em;

    @media(max-width: 771px){
        grid-area: bottomTop;
        padding-top: 0.5em;
        text-align: center;
    }
    
`;
