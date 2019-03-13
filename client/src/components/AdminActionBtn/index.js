import React from 'react';
import './style.css';

function AdminActionBtn(props) {
    return(
        <button 
            onClick={event => {
                event.preventDefault();
                props.handleSubmit(props.type, props.index);
            }}>
            {props.label}
        </button>
    )
}

export default AdminActionBtn;