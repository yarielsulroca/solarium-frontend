import React from 'react';
import { MyForm } from '../components';
import IntroText from '../components/IntroText';

const Contactanos = () => {
    return (
        <div id='contactanos' className='mx-4'>
            <IntroText name='contactanos' />
            <MyForm />
        </div>
    );
};

export default Contactanos;
