import React, {Component} from 'react';
import AdminActionBtn from '../AdminActionBtn';
import './style.css';

class AdminPictureForm extends Component {
    
    state = {
        url: '',
        alt: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <h4>Add an Image:</h4>
                <form>
                    <input className='admin-input'
                    value={this.state.url}
                    name='url'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Image Url'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.alt}
                    name='alt'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Image Description'
                    />
                    <AdminActionBtn label='Save' type='Image' _id={this.props.image._id} content={this.state} handleSubmit={this.props.handleSave} />
                    <AdminActionBtn label='Delete' type='Image' _id={this.props.image._id} content={this.state} handleSubmit={this.props.handleDelete} />
                </form>
            </div>
        ) 
    }
}

export default AdminPictureForm