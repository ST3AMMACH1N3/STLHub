import React from 'react';
import './style.css';
import Announcement from '../Announcement'

function Announcements(props) {
    if (props.announcements.length < 1) {
        return null;
    }
    
    return (
        <div className='announcements' id='announcements'>
            <h2>Announcements:</h2>
            {props.announcements.map(announcement => {
                return <Announcement key={announcement} announcement={announcement}/>
            })}
        </div>
    );
};

export default Announcements;