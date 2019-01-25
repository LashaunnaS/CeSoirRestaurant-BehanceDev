import React from 'react';
import { DrinkSection, DrinkStory, DrinkImage, DrinkHeader1, Hr, DrinkPara, DrinkParaDets, DrinkHeaderImg } from './drinkStyles';
import Spice from '../../images/spices.png'


const Drink = () => {
    return (
        <DrinkSection id="drink">
            <DrinkStory>
                <DrinkHeaderImg>
                    <img src={Spice} width='100' height='100' />
                </DrinkHeaderImg>
                <DrinkHeader1>LOCAL DISTILLATION</DrinkHeader1>
                <Hr />
                <DrinkPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mauris quis est interdum pharetra et quis elit. In rutrum lectus a tellus condimentum, malesuada hendrerit elit feugiat. Pellentesque feugiat, elit id mattis consectetur, erat leo volutpat tortor, vel ultricies quam sapien vitae sapien. Maecenas porttitor faucibus massa, at tempor purus euismod ac. Integer vel neque tempus, accumsan odio nec, feugiat est. Vivamus ac lorem erat.
                </DrinkPara>
                <DrinkParaDets>CRAFT LIQUOR</DrinkParaDets>
            </DrinkStory>
            <DrinkImage />
        </DrinkSection>
    )
}

export default Drink;