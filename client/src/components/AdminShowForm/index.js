import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
                <DatePicker
                    className='admin-input'
                    selected={props.show.date ? new Date(props.show.date) : null}
                    showTimeSelect
                    timeFormat="h:mmaa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    name='date'
                    placeholderText='Select a Show Date'
                    onChange={date => props.handleChange('Show', props.index, { target: { name: 'date', value: date } })}
                />
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