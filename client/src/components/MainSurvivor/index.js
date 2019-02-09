import React from 'react';
import './style.css';

function Survivor(props) {
    let {theme, dates, tuition} = props.survivor;
    return (
        <div className='mainSurvivor' id='survivor'>
            <h1>Survivor</h1>
            <h2>{theme}</h2>
            <h2>{dates}</h2>
            <h2>{tuition}</h2>
            <h2>Outwit, Outplay, Outlast.</h2>
            <button>Reserve Your Spot!</button>
        </div>
    );
};

export default Survivor;