import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SurvivorTitle(props) {
    let {theme, startDate, endDate, tuition} = props.survivor;
    return (
        <div>
            <h1 className='survivor-title'>Survivor</h1>
            <div className='survivor-links'>
                <Link className='survivor-trivia' to='/trivia'>Survivor Trivia</Link>
                <br />
                <Link className='survivor-faq' to='/faq'>Survivor FAQ</Link>
            </div>
            {theme ? (<div>
                <h2 className='survivor-theme'>{theme}</h2>
                <h2 className='survivor-dates'>{startDate} - {endDate}</h2>
                <h2 className='survivor-tuition'>Tuition: {tuition}</h2>
            </div>) : ''}
        </div>
    );
};

export default SurvivorTitle;