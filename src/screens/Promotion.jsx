import React from 'react';
import IntroText from '../components/IntroText';
import RenderCard from '../components/Cards/RenderCards';

const Promotion = () => {
    return (
        <div id='promociones' className='mx-4'>
        <IntroText name='promociones' />
        <RenderCard/>

        </div>
    );
};

export default Promotion;
