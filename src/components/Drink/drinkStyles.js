import styled from 'styled-components';
import storyImage from '../../images/clam.jpg';
import textBG from '../../images/leafy.jpg'

export const DrinkSection = styled.div`
    grid-area: drink;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 
        "drinkLeft drinkRight";

    @media(max-width: 1024px){
        grid-template-columns:  1fr 1fr;
    }

    @media(max-width: 771px){
        grid-template-columns:  1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "drinkTop"
        "drinkBottom";
    }
`;

export const DrinkStory = styled.div`
    grid-area: drinkLeft;
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
        grid-area: drinkTop;
        padding: 3em 2em 2em 2em;
    }
`;

export const DrinkHeaderImg = styled.div`
    grid-area: headerImg;
    padding-top: 2em;
    text-align: center;
`;

export const DrinkImage = styled.div`
    grid-area: drinkRight;
    background-image: url(${storyImage});
    background-size: cover;

    @media(max-width: 1024px){
        background-size: cover;
        background-position: top;   
    }

    @media(max-width: 771px){
        grid-area: drinkBottom;
        padding: 0 0;
    }
`;

export const DrinkHeader1 = styled.h1`
    text-align: center;
    font-size: 38px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 0;
`;

export const Hr = styled.hr`
    display: block;
    height: 0px;
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 30%;
    margin-right: 30%;
    border-style: solid;
    border-width: 5px;
    color: #f74e78;
`;

export const DrinkPara = styled.p`
    text-align: center;
`;

export const DrinkParaDets = styled.p`
    text-align: center;
    font-weight: 600;
    color: #f74e78;
    font-family: 'Montserrat', sans-serif;
`

