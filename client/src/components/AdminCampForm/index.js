import React, {Component} from 'react';
import './style.css';

class AdminCampForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.camps.title,
            dates: props.camps.dates,
            description: props.camps.description,
            tuition: props.camps.tuition,
            showDate: props.camps.showDate,
            ticketPrice: props.camps.ticketPrice,
            extendedDay: props.camps.extendedDay,
            extendedDayPrice: props.camps.extendedDayPrice
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            title: [],
            dates: [],
            description: [],
            tuition: [],
            showDate: [],
            ticketPrice: [],
            extendedDay: false,
            extendedDayPrice: []
        });

        console.log(this.state.title + ', ' + this.state.description + ', ' + this.state.dates + ', ' + this.state.tuition + ', ' + this.state.showDate + ', ' + this.state.ticketPrice + ', ' + this.state.extendedDay + ', ' + this.state.extendedDayPrice)


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
                    value={this.state.extendedDay}
                    name='extendedDay'
                    onChange={this.handleInputChange}
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
                    <button>Save</button>
                    <button>Delete</button>
                </form>
            </div>
        );
    };
};

export default AdminCampForm;