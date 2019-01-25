import React from 'react';
import { FareSection, FareStory, FareImage, FareHeader1, Hr, FarePara, FareParaDets, FareHeaderImg } from './fareStyles';
import Egg from '../../images/egg.png'

const Fare = () => {
    return (
        <FareSection id="fare">
            <FareStory>
                <FareHeaderImg>
                    <img src={Egg} width='100' height='100' />
                </FareHeaderImg>
                <FareHeader1>FRESH FARE</FareHeader1>
                <Hr />
                <FarePara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mauris quis est interdum pharetra et quis elit. In rutrum lectus a tellus condimentum, malesuada hendrerit elit feugiat. Pellentesque feugiat, elit id mattis consectetur, erat leo volutpat tortor, vel ultricies quam sapien vitae sapien. Maecenas porttitor faucibus massa, at tempor purus euismod ac. Integer vel neque tempus, accumsan odio nec, feugiat est. Vivamus ac lorem erat.
                </FarePara>
                <FareParaDets>ALL NATURAL</FareParaDets>
            </FareStory>
            <FareImage />
        </FareSection>
    )
}

export default Fare;