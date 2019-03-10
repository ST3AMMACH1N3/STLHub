import React from 'react';
import './style.css';

function AdminAddBtn(props) {
    return(
        <button 
            onClick={event => {
                event.preventDefault();
                props.handleSubmit(props.label);
            }}>
            Add {props.label}
        </button>
    )
}

export default AdminAddBtn;