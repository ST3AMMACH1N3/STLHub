import React from 'react';
import './style.css';

function Thanks() {
    return (
        <div className='mainThanks'>
            <h1>Thank You!</h1>
            <p>Thank you for your inquiry into private lessons. We will get back to you as soon as we are able, using the email/phone number provided.</p>
            <p>While you wait, why not follow us on Facebook?</p>
            <a href='https://www.facebook.com/Skyes-the-Limit-Performing-Arts-Studio-157107094280/?epa=SEARCH_BOX'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png'></img></a>
        </div>
    );
};

export default Thanks;