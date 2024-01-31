import React from 'react';
import IntroText from '../components/IntroText';
import RenderAccordions from '../components/Acordion/RenderAccordions';

const Solarium = () => {
    return (
        <div id='solarium' className='mx-4'>
            <IntroText name='solarium' />
            <RenderAccordions/>
        </div>
    );
};

export default Solarium;