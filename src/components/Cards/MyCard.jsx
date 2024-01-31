import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";


const MyCard = ({titulo, descripcion }) => {
  return (
    <Card border='warning' className="border border-3" style={{ width: '14rem' }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
      <Card.Img variant="top" src="/img/promociones/Promo2.jpeg" />
      </motion.div>
        <Card.Body>
          <Card.Title>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              Card {titulo}
            </motion.div>
          </Card.Title>
          <Card.Text>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              {descripcion}
            </motion.div>
          </Card.Text>
        </Card.Body>
    </Card>
);
}

export default MyCard;

