import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function MainSurvivor(props) {

    function getOrdinal(num) {
        let ordinals = ['th', 'st', 'nd', 'rd'];
        return (Math.floor(num / 10) === 1 || num % 10 > 3) ? ordinals[0] : ordinals[num % 10];
    }

    let {title, startDate, endDate, tuition} = props.survivor;
    if (startDate && endDate) {
        console.log('Survivor loaded');
        let sameMonth = startDate.getMonth() === endDate.getMonth();
        startDate = Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' }).format(startDate) + getOrdinal(startDate.getDate());
        endDate = Intl.DateTimeFormat('en-us', sameMonth ? { day: 'numeric' } : { month: 'short', day: 'numeric' }).format(endDate) + getOrdinal(endDate.getDate());
    }

    return (
        <div className='mainSurvivor mainSection' id='survivor'>
            <div className='container'>
                <h1>Survivor</h1>
                <h2>{title}</h2>
                <h2>{(startDate && endDate) ? `${startDate} - ${endDate}` : 'TBA'}</h2>
                <h2>{tuition}</h2>
                <h2>Outwit, Outplay, Outlast.</h2>
                <Link to={{ pathname: '/survivor' }}><button className='survivorReserveBtn'>Reserve Your Spot!</button></Link>
            </div>
        </div>
    );
};

export default MainSurvivor;