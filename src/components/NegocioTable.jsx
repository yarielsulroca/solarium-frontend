import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const NegocioTable = () => {
    const [negocios, setNegocios] = useState([]);

    useEffect(() => {
        axios.get('https://sulroca.getthost.com/api/negocio')
            .then(response => {
                setNegocios(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://sulroca.getthost.com/api/negocio/${id}`)
            .then(response => {
                setNegocios(negocios.filter(negocio => negocio.id !== id));
            })
            .catch(error => {
                console.error('Error deleting data: ', error);
            });
    };

    const handleAddOrEdit = () => {
        // Add or edit functionality goes here
    };

    return (
        <>
            <Button variant="primary" onClick={handleAddOrEdit}>Add/Edit Business</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {negocios.map(negocio => (
                        <tr key={negocio.id}>
                            <td>{negocio.name}</td>
                            <td>{negocio.address}</td>
                            <td>{negocio.phone}</td>
                            <td>{negocio.status}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(negocio.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default NegocioTable;