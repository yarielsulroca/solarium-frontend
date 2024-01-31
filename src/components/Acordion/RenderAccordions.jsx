import { useState, useEffect } from 'react';
import {Accordion,Container, Row, Col} from 'react-bootstrap';
import MyAccordion from './MyAccordion';
import axios from 'axios';
import '../../App.css';

const RenderAccordions = () => {
    const [ data, setData ] = useState( [] );

    useEffect( () => {

        axios.get( 'https://127.0.0.1/solarium-app/api-app/public/api/negocio' )
            .then( response => {
                setData( response.data );
            } )
            .catch( error => {
                console.error( 'There was an error!', error );
            } );
    }, [] );

    return (
        <Container className='border'>
        <Row>
        <Col xs={12}>
            <h2 style={{ textAlign: 'center', color: 'blue' }}>Información Sobre los Establecimientos</h2>
        </Col>
        </Row>
        <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
            <Accordion defaultActiveKey="0" flush>
            {data.map((item) => (
                <MyAccordion 
                key={item.id}
                eventKey={(item.id - 1).toString()}
                name={item.name}
                adresse={item.adresse}
                phone={item.phone}
                />
            ))}
            </Accordion>
        </Col>
        </Row>
    </Container>
    );
};

export default RenderAccordions;
