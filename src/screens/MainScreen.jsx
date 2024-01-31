import React from 'react';
import { Element } from 'react-scroll';
import { Promotion, Contactanos, Solarium, Inicio,} from '../screens';
/* import Solariums from './Solariums'; */

const MainScreen = () => {
    return (
        <div>

            <Element name="inicio">
                <Inicio />
            </Element>

            <Element name="promociones">
                <Promotion />
            </Element>

            <Element name="solariums">
                <Solarium />
            </Element>

            <Element name="contactanos">
                <Contactanos />
            </Element>
        </div>
    );
};

export default MainScreen;
