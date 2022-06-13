import React from 'react';
import photos from '../images/photo-grid.png';

const Hero = () => {
    return (
        <div className='hero-sec' >
            <img src={photos} alt="hero layout" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities 
                led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero;