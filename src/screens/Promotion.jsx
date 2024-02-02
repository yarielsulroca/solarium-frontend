import React from 'react';
import { TextHeader } from '../components';
import RenderCard from '../components/Cards/RenderCards';

const Promotion = () => {
    return (
        <div id='promociones' className='mx-4' style={{ marginTop:'100px'}}>
        <TextHeader text="Promociones"/>
        <RenderCard/>

        </div>
    );
};

export default Promotion;
