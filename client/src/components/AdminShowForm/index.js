import React, {Component} from 'react';
import AdminActionBtn from '../AdminActionBtn';
import './style.css';

class AdminShowForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.show.title || '',
            date: props.show.date || '',
            ticketPrice: props.show.ticketPrice || ''
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return(
            <div>
                <form>
                    <input className='admin-input'
                    value={this.state.title}
                    name='title'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Title'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.date}
                    name='date'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Date'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.ticketPrice}
                    name='ticketPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Price'
                    />
                    <br />
                    <AdminActionBtn label='Save' type='Show' _id={this.props.show._id} content={this.state} handleSubmit={this.props.handleSave} />
                    <AdminActionBtn label='Delete' type='Show' _id={this.props.show._id} content={this.state} handleSubmit={this.props.handleDelete} />
                </form>
            </div>
        );
    };
};

export default AdminShowForm;