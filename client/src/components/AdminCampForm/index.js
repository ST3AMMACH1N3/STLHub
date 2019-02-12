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
                    <input 
                    value={this.state.title}
                    name='title'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Name'
                    />
                    <br />
                    <input 
                    value={this.state.dates}
                    name='dates'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Dates'
                    />
                    <br />
                    <input 
                    value={this.state.description}
                    name='description'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter a Description'
                    />
                    <br />
                    <input 
                    value={this.state.tuition}
                    name='tuition'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Tuition Price'
                    />
                    <br />
                    <input 
                    value={this.state.showDate}
                    name='showDate'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Show Date'
                    />
                    <br />
                    <input 
                    value={this.state.ticketPrice}
                    name='ticketPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Show Ticket Price'
                    />
                    <br />
                    <input 
                    value={this.state.extendedDay}
                    name='extendedDay'
                    onChange={this.handleInputChange}
                    type='checkbox' />
                    <label>Extended Day</label>
                    <br />
                    <input 
                    value={this.state.extendedDayPrice}
                    name='extendedDayPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Extended Day Price'
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