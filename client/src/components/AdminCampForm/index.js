import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class AdminCampForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date,
            endDate: new Date,
            start: true
        }
    }

    handleChange = date => {
        let changeStart = this.state.start || date < this.state.startDate;
        let changeEnd = !changeStart;
        this.setState({
            startDate: changeStart ? date : this.state.startDate,
            endDate: changeEnd ? date : this.state.endDate,
            start: !changeStart
        })
    }

    formatDate = date => {
        let options = { weekday: 'short', month: 'short', day: 'numeric'};
        let readable = Intl.DateTimeFormat('en-US', options).format(date);
        return readable;
    }

    render() {
        return(
            <div>
                <form>
                    <input className='admin-input'
                    value={this.props.camp.title}
                    name='title'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Camp Name'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.props.camp.dates}
                    name='dates'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Camp Dates'
                    />
                    <br />
                    <textarea className='admin-input'
                    value={this.props.camp.description}
                    name='description'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Description'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.props.camp.tuition}
                    name='tuition'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Camp Tuition Price'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.props.camp.showDate}
                    name='showDate'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Camp Show Date'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.props.camp.ticketPrice}
                    name='ticketPrice'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Camp Show Ticket Price'
                    />
                    <br />
                    <label className='extended-day-label'>Extended Day</label>
                    <input 
                    checked={this.props.camp.extendedDay}
                    name='extendedDay'
                    onChange={event => this.props.handleCheck('Camp', this.props.index, event)}
                    type='checkbox' />
                    <br />
                    <input className='admin-input'
                    value={this.props.camp.extendedDayPrice}
                    name='extendedDayPrice'
                    onChange={event => this.props.handleChange('Camp', this.props.index, event)}
                    type='text'
                    placeholder='Camp Extended Day Price'
                    />
                    <br />
                    <DatePicker
                        // selected={this.state.startDate}
                        className='admin-input'
                        value={`${this.formatDate(this.state.startDate)} - ${this.formatDate(this.state.endDate)}`}
                        shouldCloseOnSelect={false}
                        selectsStart
                        startDate={this.state.startDate}
                        selectsEnd
                        endDate={this.state.endDate}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
};

export default AdminCampForm;