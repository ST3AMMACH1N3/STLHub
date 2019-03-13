import React from 'react';
import './style.css';

function AdminSurvivorForm(props) {
    return (
        <div>
            <form>
                <input className='admin-input'
                value={props.survivor.title}
                name='title'
                onChange={event => props.handleChange('Survivor', props.index, event)}
                type='text'
                placeholder='Theme'
                />
                <br />
                <input className='admin-input'
                value={props.survivor.dates}
                name='dates'
                onChange={event => props.handleChange('Survivor', props.index, event)}
                type='text'
                placeholder='Dates'
                />
                <br />
                <textarea className='admin-input'
                value={props.survivor.description}
                name='description'
                onChange={event => props.handleChange('Survivor', props.index, event)}
                type='text'
                placeholder='Description'
                />
                <br />
                <input className='admin-input'
                value={props.survivor.tuition}
                name='tuition'
                onChange={event => props.handleChange('Survivor', props.index, event)}
                type='text'
                placeholder='Tuition Price'
                />
                <br />
                <input className='admin-input'
                value={props.survivor.image}
                name='image'
                onChange={event => props.handleChange('Survivor', props.index, event)}
                type='text'
                placeholder='Image URL'
                />
                <br />
            </form>
        </div>
    ) 
}

export default AdminSurvivorForm