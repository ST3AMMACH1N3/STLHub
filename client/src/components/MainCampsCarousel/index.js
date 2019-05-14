import React from 'react';
import Slider from 'react-slick';
import Camp from '../Camp';
import './style.css';

function MainCampsCarousel(props) {

    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear'
    };

    return (
        <div className='mainSummerCamps mainSection' id='mainCamps'>
            <div className='container'>
                <h1>Summer Camps</h1>
                <div className='container'>
                    <Slider {...settings}>
                        {props.camps.map((camp) =>{
                            return <Camp key={camp} campInfo={camp} />
                        })}
                    </Slider>
                </div>
                <button>Sign Up!</button>
            </div>
        </div>
    );
};

export default MainCampsCarousel;

/* <div>
<h2>'Trollapalooza!'</h2>
<span>A camp for ages 4-16</span>
<br></br>
<span>June 11-15 9:00AM-12:00PM</span>
<br></br>
<span><strong>Tuition for this camp: $90</strong></span>
</div>
<div>
<h2>'Coco'</h2>
<span>A musical play for ages 4-16</span>
<br></br>
<span>June 18-29 9:00AM-12:00PM</span>
<br></br>
<span><strong>Tuition for this camp: $180</strong></span>
<br></br>
<span>Performance June 29 at 7PM Tickets $3 at the door.</span>
</div>
<div>
<h2>'Pitched Perfect'</h2>
<span>A vocal performance camp for ages 8-16</span>
<br></br>
<span>July 2-13 9:00AM-12:00PM</span>
<br></br>
<span><strong>Tuition for this camp: $180</strong></span>
<br></br>
<span>Performance July 13 7PM Tickets $3 at the door.</span>
</div>
<div>
<h2>'The Greatest Show'</h2>
<span>A musical performance camp based on the music of 'The Greatest Showman' for ages 12-18</span>
<br></br>
<span>July 23 - August 3 9:00AM-2:00PM</span>
<br></br>
<span><strong>Tuition for this camp: $200</strong></span>
<br></br>
<span>Performance August 3 at 7PM Tickets $5 at the door.</span>
</div> */