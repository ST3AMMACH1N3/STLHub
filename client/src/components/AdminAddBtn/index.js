import React from 'react';
import './style.css';

function AdminAddBtn(props) {
    return(
        <div className='admin-add'>
            <button
                onClick={event => {
                    event.preventDefault();
                    props.handleSubmit(props.label);
                }}>
                Add {props.label}
            </button>
        </div>
    )
}

export default AdminAddBtn;