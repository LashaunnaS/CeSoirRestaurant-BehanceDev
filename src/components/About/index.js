import React from 'react';
import { AboutSection, OurStory, StoryImage, AboutHeader1, Hr, AboutPara, AboutParaDets } from './aboutStyles';



const About = () => {
    return (
        <AboutSection id="about">
            <OurStory>
                <AboutHeader1>OUR STORY</AboutHeader1>
                <Hr />
                <AboutPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mauris quis est interdum pharetra et quis elit. In rutrum lectus a tellus condimentum, malesuada hendrerit elit feugiat. Pellentesque feugiat, elit id mattis consectetur, erat leo volutpat tortor, vel ultricies quam sapien vitae sapien. Maecenas porttitor faucibus massa, at tempor purus euismod ac. Integer vel neque tempus, accumsan odio nec, feugiat est. Vivamus ac lorem erat.
                </AboutPara>
                <AboutParaDets>EST. 2004</AboutParaDets>
            </OurStory>
            <StoryImage />
        </AboutSection>
    )
}

export default About;