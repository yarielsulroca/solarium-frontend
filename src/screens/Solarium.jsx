import React from 'react';
import RenderAccordions from '../components/Acordion/RenderAccordions';
import TextHeader from '../components/TextHeader';

const Solarium = () => {
    return (
        <div>
        <TextHeader text="Establecimientos"/>
        <div id='solarium' className='mx-4'  style={{ marginTop:'100px !important' }}>
            <RenderAccordions/>
        </div>
        </div>
    );
};

export default Solarium;