import React, {Component} from 'react';
import AdminActionBtn from '../AdminActionBtn';
import './style.css';

class AdminSurvivorForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.survivors.title,
            dates: props.survivors.dates,
            description: props.survivors.description,
            tuition: props.survivors.tuition,
            image: props.survivors.image
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            title: '',
            dates: '',
            description: '',
            tuition: '',
            image: ''
        });


    };

    render() {
        return (
            <div>
                <form>
                    <input className='admin-input'
                    value={this.state.title}
                    name='title'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Theme'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.dates}
                    name='dates'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Dates'
                    />
                    <br />
                    <textarea className='admin-input'
                    value={this.state.description}
                    name='description'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Description'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.tuition}
                    name='tuition'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Tuition Price'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.image}
                    name='image'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Image'
                    />
                    <br />
                    <AdminActionBtn label='Save' type='Survivor' _id={this.props.survivors._id} content={this.state} handleSubmit={this.props.handleSave} />
                    <AdminActionBtn label='Delete' type='Survivor' _id={this.props.survivors._id} content={this.state} handleSubmit={this.props.handleDelete} />
                </form>
            </div>
        ) 
    }
}

export default AdminSurvivorForm