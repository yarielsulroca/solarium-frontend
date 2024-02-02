import React from 'react';
import { MyForm } from '../components';
import IntroText from '../components/IntroText';

const Contactanos = () => {
    return (
        <div id='contactanos' className='mx-4'  style={{ marginBottom:'0px'}}>
            <IntroText name='contactanos' />
            <MyForm />
        </div>
    );
};

export default Contactanos;
