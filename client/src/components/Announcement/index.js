import React from 'react';
import './style.css';

function Announcement(props) {
    let {title, description} = props.announcement;
    return (
        <div>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    );
};

export default Announcement;