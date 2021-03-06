import React from 'react';
import './style.css';

function Thanks() {
    return (
        <div className='mainThanks' id='mainLessons'>
            <h1>Thank You!</h1>
            <p>Thank you for your inquiry into private lessons. We will get back to you as soon as we are able, using the email/phone number provided.</p>
            <p>While you wait, why not follow us on our social media?</p>
            <a href='https://www.facebook.com/Skyes-the-Limit-Performing-Arts-Studio-157107094280/?epa=SEARCH_BOX' target='_blank' rel='noopener noreferrer'><img id='facebookLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png' alt='STL Facebook Page'></img></a>
            <a href='https://www.instagram.com/stlsurvivor/'><img id='instagramLogo' src='https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg' alt='STL Instagram Page'/></a>
        </div>
    );
};

export default Thanks;