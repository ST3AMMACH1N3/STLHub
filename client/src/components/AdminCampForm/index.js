import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class AdminCampForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true
        }
    }

    handleChange = date => {
        let changeStart = this.state.start || (date < this.props.camp.startDate);
        let changeEnd = !this.state.start || date > this.props.camp.startDate;
        if (changeStart) {
            this.props.handleChange('Camp', this.props.index, { target: { name: 'startDate', value: date } })
        }
        if (changeEnd) {
            this.props.handleChange('Camp', this.props.index, { target: { name: 'endDate', value: date } })
        }
        this.setState({
            start: !changeStart
        })
    }

    formatDate = date => {
        if (!date) {
            return 'Select';
        }
        date = new Date(date);
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
                    <DatePicker
                        className='admin-input'
                        value={`${this.formatDate(this.props.camp.startDate)} - ${this.formatDate(this.props.camp.endDate)}`}
                        shouldCloseOnSelect={false}
                        selectsStart
                        startDate={this.props.camp.startDate}
                        selectsEnd
                        endDate={this.props.camp.endDate}
                        onChange={this.handleChange}
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
                    <DatePicker
                        className='admin-input'
                        selected={this.props.camp.showDate}
                        showTimeSelect
                        timeFormat="h:mmaa"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                        name='date'
                        placeholderText='Select a Show Date'
                        onChange={date => this.props.handleChange('Camp', this.props.index, { target: { name: 'showDate', value: date } })}
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
                    
                </form>
            </div>
        );
    }
};

export default AdminCampForm;