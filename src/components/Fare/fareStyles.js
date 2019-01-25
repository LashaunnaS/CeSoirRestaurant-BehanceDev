import styled from 'styled-components';
import storyImage from '../../images/chicken.jpg';
import textBG from '../../images/leafy.jpg'

export const FareSection = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-areas: 
        "fareLeft fareRight";

    @media(max-width: 1024px){
        grid-template-columns:  1fr 1fr;
    }

    @media(max-width: 771px){
        grid-template-columns:  1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "fareTop"
        "fareBottom";
    }
`;

export const FareImage = styled.div`
    grid-area: fareLeft;
    background-image: url(${storyImage});
    background-size: cover;

    @media(max-width: 1024px){
        background-size: cover;
        background-position: top;   
    }

    @media(max-width: 771px){
        grid-area: fareBottom;
        padding: 0 0;
    }
`;

export const FareStory = styled.div`
    grid-area: fareRight;
    background-image: url(${textBG});
    background-size: cover;
    padding: 3em 2em 2em 2em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
        " headerImg ";
    font-size: 18px;
    line-height: 1.3;

    @media(max-width: 771px){
        grid-area: fareTop;
        padding: 3em 2em 2em 2em;
    }
`;

export const FareHeaderImg = styled.div`
    grid-area: headerImg;
    padding-top: 2em;
    text-align: center;
`;

export const FareHeader1 = styled.h1`
    text-align: center;
    font-size: 38px;font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 0;
    font-family: 'Montserrat', sans-serif;
`;

export const Hr = styled.hr`
    display: block;
    margin-left: 30%;
    margin-right: 30%;
    height: 0;
    border-style: solid;
    border-width: 5px;
    color: #f74e78;
`;

export const FarePara = styled.p`
    text-align: center;
`;

export const FareParaDets = styled.p`
    text-align: center;
    font-weight: 600;
    color: #f74e78;
    font-family: 'Montserrat', sans-serif;
 `