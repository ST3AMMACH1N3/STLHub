import React from 'react';
import './style.css';

function Camps(props) {
    let {title, ages, dates, tuition, performance} = props.campInfo;
    return (
        <div>
            <h2>{title}</h2>
            <span>{ages}</span>
            <br />
            <span>{dates}</span>
            <br />
            <span><strong>{tuition}</strong></span>
            <br />
            {(performance.length) ? <span>{performance}</span> : ''}
        </div>
    );
};

export default Camps;