import styled from 'styled-components';
import storyImage from '../../images/asparagus.jpg';
import textBG from '../../images/leafy.jpg'

export const AboutSection = styled.div`
    display: grid;
    grid-template-columns:  2fr 3fr;
    grid-template-areas: 
        "aboutLeft aboutRight";

    @media(max-width: 1024px){
        grid-template-columns:  1fr 1fr;
    }

    @media(max-width: 771px){
        grid-template-columns:  1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "aboutTop"
        "aboutBottom";
    }
`;

export const OurStory = styled.div`
    grid-area: aboutLeft;
    background-image: url(${textBG});
    background-size: cover;
    padding: 3em 2em 2em 2em;
    font-size: 18px;
    line-height: 1.3;

    @media(max-width: 771px){
        grid-area: aboutTop;
        padding: 3em 2em 2em 2em;

    }
`;

export const StoryImage = styled.div`
    grid-area: aboutRight;
    background-image: url(${storyImage});
    background-size: cover;

    @media(max-width: 1024px){
        background-size: cover;
        background-position: top;   
    }

    @media(max-width: 771px){
        grid-area: aboutBottom;
        padding: 0 0;
    }
`;

export const AboutHeader1 = styled.h1`
    text-align: center;
    font-size: 38px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 0;
`;

export const Hr = styled.hr`
    display: block;
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 30%;
    margin-right: 30%;
    border-style: solid;
    border-width: 5px;
    color: #f74e78;
`;

export const AboutPara = styled.p`
    text-align: center;
`;

export const AboutParaDets = styled.p`
    text-align: center;
    font-weight: 600;
    color: #f74e78;
    font-family: 'Montserrat', sans-serif;
`