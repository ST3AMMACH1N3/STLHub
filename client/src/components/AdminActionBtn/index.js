import React from 'react';
import './style.css';

function AdminActionBtn(props) {
    return(
        <div className='admin-action'>
            <button 
                onClick={event => {
                    event.preventDefault();
                    props.handleSubmit(props.type, props.index);
                }}>
                {props.label}
            </button>
        </div>
    )
}

export default AdminActionBtn;