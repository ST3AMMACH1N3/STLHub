import React, {Component} from 'react';
import AdminActionBtn from '../AdminActionBtn';
import './style.css';

class AdminSurvivorForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.survivor.title,
            dates: props.survivor.dates,
            description: props.survivor.description,
            tuition: props.survivor.tuition,
            image: props.survivor.image
        }
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
                    placeholder='Image URL'
                    />
                    <br />
                    <AdminActionBtn label='Save' type='Survivor' _id={this.props.survivor._id} content={this.state} handleSubmit={this.props.handleSave} />
                    <AdminActionBtn label='Delete' type='Survivor' _id={this.props.survivor._id} content={this.state} handleSubmit={this.props.handleDelete} />
                </form>
            </div>
        ) 
    }
}

export default AdminSurvivorForm