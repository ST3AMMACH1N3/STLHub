import React from 'react';
import './style.css';
import Announcement from '../Announcement'

function Announcements(props) {
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