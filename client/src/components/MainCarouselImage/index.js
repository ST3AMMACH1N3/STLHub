import React from 'react';
import './style.css';

function MainCarouselImage(props){
    let src = props.src;
    return(
        <div>
            <img className='carouselImg' src={src} alt='STL Carousel'/>
        </div>
    );
};

export default MainCarouselImage;