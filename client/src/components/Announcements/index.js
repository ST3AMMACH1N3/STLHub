import React from 'react';
import './style.css';
import Announcement from '../Announcement'

function Announcements(props) {
    if (props.announcements.length < 1) {
        return null;
    }
    
    return (
        <div className='announcements mainSection' id='announcements'>
            <div className='container'>
                <h2>Announcements:</h2>
                {props.announcements.map(announcement => {
                    return <Announcement key={announcement.title} announcement={announcement}/>
                })}
            </div>
        </div>
    );
};

export default Announcements;