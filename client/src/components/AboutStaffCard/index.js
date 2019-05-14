import React from 'react';
import './style.css';

function AboutStaffCard(props){
    return(
        <div className='staff-card' >
            <img className={'staff-image ' + props.side} src={props.staff.image} alt={props.staff.alt} />
            <div className='staff-about'>
                <p className={'staff-name ' + props.staff.name} >{props.staff.name}</p>
                <p className='staff-roles' >{props.staff.roles}</p>
            </div>
        </div>
    );
};

export default AboutStaffCard;