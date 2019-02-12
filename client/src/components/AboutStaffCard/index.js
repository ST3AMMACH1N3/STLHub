import React from 'react';
import './style.css';

function AboutStaffCard(props){
    return(
        <div>
            <img className='staff-image' src={props.staff.image} alt={props.staff.alt} />
            <p className='staff-name' >{props.staff.name}</p>
            <span className='satff-roles' >{props.staff.roles}</span>
        </div>
    );
};

export default AboutStaffCard;