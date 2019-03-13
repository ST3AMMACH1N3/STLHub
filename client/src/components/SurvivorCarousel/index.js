import React from 'react';
import Slider from 'react-slick';
import './style.css';
import SurvivorCarouselImage from '../SurvivorCarouselImage';

function SurvivorCarousel(props) {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  };
  return (
    <div className='container'>
      <Slider {...settings}>
        {props.images.map((image) => {
          return <SurvivorCarouselImage key={image.src} src={image.src} />
        })}
      </Slider>
    </div>
  );
};

export default SurvivorCarousel;