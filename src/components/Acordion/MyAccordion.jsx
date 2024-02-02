import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import MyWhatsApp from './WhatsApp';
import { motion } from "framer-motion";
import GoogleMapRedirect from './GoogleMapRedirect';

const MyAccordion = ({ eventKey, name, adresse, phone }) => {
const [isActive, setIsActive] = useState("false");

const toggleAccordion = () => {
    setIsActive(!isActive);
};

return (

    <Accordion.Item
    eventKey={eventKey}
    onClick={toggleAccordion}
    active={isActive}
    className={`accordion-item ${isActive ? 'active' : ''}`}
    >
    <Accordion.Header>
        {name}
    </Accordion.Header>
    <Accordion.Body>
    <Card border='danger border-4' style={{ width: '25rem' }}>
    <motion.div>
    <Card.Img variant="top" src="/img/solatium_icono.png" style={{ width: '40%', height: 'auto' }}
/>
    </motion.div>
        <Card.Body>
        <Card.Text>
            <motion.div
            style={{ textAlign: 'center', color: 'var(--color-third)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
                <GoogleMapRedirect address={adresse} />
                {adresse}
            </motion.div>
        </Card.Text>
        <Card.Text>
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <MyWhatsApp phoneNumber={phone} />
        </motion.div>
        </Card.Text>
        </Card.Body>
    </Card>
    </Accordion.Body>
    </Accordion.Item>
);};
export default MyAccordion;
