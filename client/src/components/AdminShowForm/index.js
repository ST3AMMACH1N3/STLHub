import React from 'react';
import './style.css';

function AdminShowForm(props) {
    return(
        <div>
            <form>
                <input className='admin-input'
                value={props.show.title}
                name='title'
                onChange={event => props.handleChange('Show', props.index, event)}
                type='text'
                placeholder='Enter Show Title'
                />
                <br />
                <input className='admin-input'
                value={props.show.date}
                name='date'
                onChange={event => props.handleChange('Show', props.index, event)}
                type='text'
                placeholder='Enter Show Date'
                />
                <br />
                <input className='admin-input'
                value={props.show.ticketPrice}
                name='ticketPrice'
                onChange={event => props.handleChange('Show', props.index, event)}
                type='text'
                placeholder='Enter Show Price'
                />
                <br />
            </form>
        </div>
    );
};
export default AdminShowForm;