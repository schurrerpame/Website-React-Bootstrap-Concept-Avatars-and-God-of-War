import React from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';
import { ima01, ima02, ima03, ima04, ima05 } from '../../assets';

const images = [ima01, ima02, ima03, ima04,  ima05 ];
const Carousel = () => {

    return (
        <div className='p-5 text-center'>
            <BootstrapCarousel>
                {images.map((ima, index) => (
                    <BootstrapCarousel.Item key={index}>
                        <img style={{ maxHeight: "100vh" }}
                            className="d-block w-100"
                            src={ima}
                            alt={ima}
                        />
                        <BootstrapCarousel.Caption>
                        </BootstrapCarousel.Caption>
                    </BootstrapCarousel.Item>
                ))}
            </BootstrapCarousel>
        </div>
    )
}

export default Carousel;