import React from 'react';
import './style.css';

function AdminActionBtn(props) {
    return(
        <button 
            onClick={event => {
                event.preventDefault();
                props.handleSubmit(props.type, props._id, props.content);
            }}>
            {props.label}
        </button>
    )
}

export default AdminActionBtn;