import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function MainShows(props) {
    let { title, dates } = props.currentShow;

    return (
        <div className='mainShow mainSection' id='mainShow'>
            <div className='container'>
                <h4 className='currentShow'>Current Show:</h4>
                <h1 className='showTitle'>{title}</h1>
                {dates.map((date, index) => {
                    return (<h4 className='showDate' key={date}>{date}</h4>)
                })}
                <Link to={{ pathname: '/ticketing', state: {title}}}><button className='showReserveBtn'>Reserve Seats!</button></Link>
            </div>
        </div>
    );
};

export default MainShows;