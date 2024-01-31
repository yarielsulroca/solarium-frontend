import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al back-end utilizando fetch u otra librería para hacer peticiones HTTP
  };

  return (
    <div className="mg-4">
        <h2 className='bg-primary'>Formulario Para Encio de Correos</h2>
        <br /><br />
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Dirección de Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Label>Asunto: </Form.Label>
        <Form.Control type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send Email
      </Button>
    </Form>
    </div>
  );
};

export default MyForm;