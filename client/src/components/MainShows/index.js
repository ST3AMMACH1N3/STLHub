import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function MainShows(props) {
    let {title, date1, date2, date3} = props.currentShow;

    return (
        <div className='mainShow'>
            <h4 className='currentShow'>Current Show:</h4>
            <h1 className='showTitle'>{title}</h1>
            <h4 className='showDate'>{date1}</h4>
            <h4 className='showDate'>{date2}</h4>
            <h4 className='showDate'>{date3}</h4>
            <Link to={{ pathname: '/ticketing', state: {title}}}><button className='showReserveBtn'>Reserve Seats!</button></Link>
        </div>
    );
};

export default MainShows;