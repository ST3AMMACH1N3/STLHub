import React from 'react';
import Slider from 'react-slick';
import './style.css';
// import MainCarouselImage from '../MainCarouselImage';

function MainImageCarousel(props) {
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
          return <img className='carouselImg' key={image.url} src={image.url} alt={image.alt}/>
        })}
      </Slider>
    </div>
  );
};

export default MainImageCarousel;
