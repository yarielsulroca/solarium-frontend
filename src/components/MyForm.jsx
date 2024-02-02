import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    const data = {
      email: email,
      subject: subject,
      text: message
    };

    try {
      const response = axios.post('https://127.0.0.1/api/contactanos', data);

      if (response.status === 200) {
        // El correo se envió correctamente
        console.log('Correo enviado exitosamente');
      } else {
        // Hubo un error al enviar el correo
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
      <div className='' style={{ marginTop:'100px' }}>
        <Row>
        <Col xs={12}>
            <h2 style={{ textAlign: 'center', color: 'blue' }}>Contactanos!!</h2>
        </Col>
        </Row>
        <Row >
          <Col className='border border-primary'xs={12} lg={{ span: 6, offset: 3 }} >
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Dirección de Correo</Form.Label>
        <Form.Control type="email" placeholder="Su direccion de correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Label>Asunto: </Form.Label>
        <Form.Control type="text" placeholder="Asunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar Mensaje
      </Button>
    </Form>
          </Col>
        </Row>
    </div>
  );
};

export default MyForm;