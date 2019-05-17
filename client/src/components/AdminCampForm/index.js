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
        this.props.handleChange('Camp', props.index, { target: { name: 'startDate', value: new Date(props.camp.startDate) } });
        this.props.handleChange('Camp', props.index, { target: { name: 'endDate', value: new Date(props.camp.endDate) } });
    }

    handleChange = date => {
        let changeStart = this.state.start || (date < this.props.survivor.startDate);
        let changeEnd = !this.state.start || date > this.props.survivor.startDate;
        if (changeStart) {
            this.props.handleChange('Survivor', this.props.index, { target: { name: 'startDate', value: date } })
        }
        if (changeEnd) {
            this.props.handleChange('Survivor', this.props.index, { target: { name: 'endDate', value: date } })
        }
        this.setState({
            start: !changeStart
        })
    }

    formatDate = date => {
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
                        className='admin-input'
                        value={`${this.formatDate(this.props.camp.startDate)} - ${this.formatDate(this.props.camp.endDate)}`}
                        shouldCloseOnSelect={false}
                        selectsStart
                        startDate={this.props.camp.startDate}
                        selectsEnd
                        endDate={this.props.camp.endDate}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
};

export default AdminCampForm;