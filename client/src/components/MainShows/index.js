import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function MainShows(props) {
    let { title, dates } = props.currentShow;

    return (
        <div className='mainShow' id='mainShow'>
            <h4 className='currentShow'>Current Show:</h4>
            <h1 className='showTitle'>{title}</h1>
            {dates.map((date, index) => {
                return (<h4 className='showDate'>{date}</h4>)
            })}
            <Link to={{ pathname: '/ticketing', state: {title}}}><button className='showReserveBtn'>Reserve Seats!</button></Link>
        </div>
    );
};

export default MainShows;