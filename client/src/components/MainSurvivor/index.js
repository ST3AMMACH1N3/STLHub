import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function MainSurvivor(props) {
    let {theme, dates, tuition} = props.survivor;
    return (
        <div className='mainSurvivor' id='survivor'>
            <h1>Survivor</h1>
            <h2>{theme}</h2>
            <h2>{dates}</h2>
            <h2>{tuition}</h2>
            <h2>Outwit, Outplay, Outlast.</h2>
            <Link to={{ pathname: '/survivor' }}><button>Reserve Your Spot!</button></Link>
        </div>
    );
};

export default MainSurvivor;