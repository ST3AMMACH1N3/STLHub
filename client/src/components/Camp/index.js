import React from 'react';
import './style.css';

function Camps(props) {
    let {title, startDate, endDate, description, tuition, extendedDay} = props.campInfo;
    return (
        <div>
            <h2>{title}</h2>
            <span>{`${startDate} - ${endDate}`}</span>
            <br />
            <span>{description}</span>
            <br />
            <span><strong>${tuition}</strong></span>
            <br />
            {(extendedDay) ? <span>Extended Day care is available for this camp.</span> : ''}
        </div>
    );
};

export default Camps;

// {(performance.length) ? <span>{performance}</span> : ''}