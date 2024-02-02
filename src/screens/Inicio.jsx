import React from 'react';
import IntroText from '../components/IntroText';
import { Slide } from '../components';
import {Container} from 'react-bootstrap';


const Inicio = () => {
    return (
        <Container  style={{ marginTop:'100px !important' }}>
            <IntroText name='inicio' />
            <Slide/>
        </Container>
    );
};

export default Inicio;
