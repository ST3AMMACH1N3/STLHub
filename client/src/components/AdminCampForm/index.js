import React, {Component} from 'react';
import AdminActionBtn from '../AdminActionBtn';
import './style.css';

class AdminCampForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.camp.title,
            dates: props.camp.dates,
            description: props.camp.description,
            tuition: props.camp.tuition,
            showDate: props.camp.showDate,
            ticketPrice: props.camp.ticketPrice,
            extendedDay: props.camp.extendedDay,
            extendedDayPrice: props.camp.extendedDayPrice
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCheck = event => {
        this.setState({ extendedDay: event.target.checked });
    }

    render() {
        return(
            <div>
                <form>
                    <input className='admin-input'
                    value={this.state.title}
                    name='title'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Camp Name'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.dates}
                    name='dates'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Camp Dates'
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
                    placeholder='Camp Tuition Price'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.showDate}
                    name='showDate'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Camp Show Date'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.state.ticketPrice}
                    name='ticketPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Camp Show Ticket Price'
                    />
                    <br />
                    <label className='extended-day-label'>Extended Day</label>
                    <input 
                    checked={this.state.extendedDay}
                    name='extendedDay'
                    onChange={this.handleCheck}
                    type='checkbox' />
                    <br />
                    <input className='admin-input'
                    value={this.state.extendedDayPrice}
                    name='extendedDayPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Camp Extended Day Price'
                    />
                    <br />
                    <AdminActionBtn label='Save' type='Camp' _id={this.props.camp._id} content={this.state} handleSubmit={this.props.handleSave} />
                    <AdminActionBtn label='Delete' type='Camp' _id={this.props.camp._id} content={this.state} handleSubmit={this.props.handleDelete} />
                </form>
            </div>
        );
    };
};

export default AdminCampForm;