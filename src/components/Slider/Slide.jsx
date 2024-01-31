import React from 'react'
import { Carousel } from 'react-bootstrap';


const Slide = () => {
        return (
        <Carousel>
                <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="/img/slider/sl1.jpg"
                                alt="First slide"
                                style={{ objectFit: 'cover', maxHeight: '583px', maxWidth: '1320px' }}
                        />
                </Carousel.Item>
                <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/img/slider/sl2.jpg"
                                alt="Second slide"
                                style={{ objectFit: 'cover', maxHeight: '583px', maxWidth: '1320px' }}
                                />
                </Carousel.Item>
                <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/img/slider/sl3.jpg"
                                alt="Third slide"
                                style={{ objectFit: 'cover', maxHeight: '583px', maxWidth: '1320px' }}
                                />
                </Carousel.Item>
        </Carousel>
        );
};
export default Slide;