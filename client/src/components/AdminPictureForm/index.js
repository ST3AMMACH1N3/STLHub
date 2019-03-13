import React from 'react';
import './style.css';

function AdminPictureForm(props) {
    return (
        <div>
            <h4>Add an Image:</h4>
            <form>
                <input className='admin-input'
                value={props.image.url}
                name='url'
                onChange={event => props.handleChange('Image', props.index, event)}
                type='text'
                placeholder='Enter Image Url'
                />
                <br />
                <input className='admin-input'
                value={props.image.alt}
                name='alt'
                onChange={event => props.handleChange('Image', props.index, event)}
                type='text'
                placeholder='Enter Image Description'
                />
            </form>
        </div>
    ) 
}

export default AdminPictureForm