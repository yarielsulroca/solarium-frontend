import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css'; // Importamos el archivo de estilos CSS

        const Slide = () => {
        const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
        if (activeIndex < 2) {
                setActiveIndex(activeIndex + 1);
        } else {
                setActiveIndex(0);
        }
        }, 3000);
        return () => clearInterval(interval);
        }, [activeIndex]);

return (
        <Carousel activeIndex={activeIndex}>
        <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/slider/sl1.jpg"
                alt="First slide"
                style={{ objectFit: 'cover', maxHeight: '583px', maxWidth: '1320px' }}
                />
                <Carousel.Caption>
                <div className={activeIndex === 0 ? 'slide-caption active' : 'slide-caption'}>
                <h3>MiamiSum</h3>
                <p>Tu mejor opción...</p>
                </div>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/slider/sl2.jpg"
                alt="Second slide"
                style={{ objectFit: 'cover', maxHeight: '583px', maxWidth: '1320px' }}
                />
                <Carousel.Caption>
                <div className={activeIndex === 1 ? 'slide-caption active' : 'slide-caption'}>
                <h3>MiamiSum</h3>
                <p>Calidad y Conford...</p>
                </div>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                className="d-block w-100"
                src="/img/slider/sl3.jpg"
                alt="Third slide"
                style={{ objectFit: 'cover', maxHeight: '583px', maxWidth: '1320px' }}
                />
                <Carousel.Caption>
                <div className={activeIndex === 2 ? 'slide-caption active' : 'slide-caption'}>
                <h3>MiamiSum</h3>
                <p>Donde el Cliente siempre es bien atendido...</p>
                </div>
                </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        );
        };
export default Slide;
