import React from 'react';
import './style.css';

function AdminCampForm(props) {
    return(
        <div>
            <form>
                <input className='admin-input'
                value={props.camp.title}
                name='title'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Camp Name'
                />
                <br />
                <input className='admin-input'
                value={props.camp.dates}
                name='dates'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Camp Dates'
                />
                <br />
                <textarea className='admin-input'
                value={props.camp.description}
                name='description'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Description'
                />
                <br />
                <input className='admin-input'
                value={props.camp.tuition}
                name='tuition'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Camp Tuition Price'
                />
                <br />
                <input className='admin-input'
                value={props.camp.showDate}
                name='showDate'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Camp Show Date'
                />
                <br />
                <input className='admin-input'
                value={props.camp.ticketPrice}
                name='ticketPrice'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Camp Show Ticket Price'
                />
                <br />
                <label className='extended-day-label'>Extended Day</label>
                <input 
                checked={props.camp.extendedDay}
                name='extendedDay'
                onChange={event => props.handleCheck('Camp', props.index, event)}
                type='checkbox' />
                <br />
                <input className='admin-input'
                value={props.camp.extendedDayPrice}
                name='extendedDayPrice'
                onChange={event => props.handleChange('Camp', props.index, event)}
                type='text'
                placeholder='Camp Extended Day Price'
                />
                <br />
            </form>
        </div>
    );
};

export default AdminCampForm;