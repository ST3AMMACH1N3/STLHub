import React from 'react';
import './style.css';

function Seat(props) {
    return (<div className={`seat ${props.status}`} style={{width: props.pos.width, height: props.pos.width, left: props.pos.left, top: props.pos.top }} onClick={() => { props.handleClick(props.id) }}>{props.number}</div>);
};

export default Seat;