import React from 'react';
import './style.css';

function SurvivorCarouselImage(props){
    let src = props.src;
    return(
        <div>
            <img className='survivorImg' src={src} alt='Survivor Carousel'/>
        </div>
    );
};

export default SurvivorCarouselImage;