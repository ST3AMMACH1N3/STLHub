import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class AdminSurvivorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true
        }
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
        if (!date) {
            return;
        }
        date = new Date(date);
        let options = { weekday: 'short', month: 'short', day: 'numeric'};
        let readable = Intl.DateTimeFormat('en-US', options).format(date);
        return readable;
    }

    render() {
        return (
            <div>
                <form>
                    <input className='admin-input'
                    value={this.props.survivor.title}
                    name='title'
                    onChange={event => this.props.handleChange('Survivor', this.props.index, event)}
                    type='text'
                    placeholder='Theme'
                    />
                    <br />
                    <DatePicker
                        className='admin-input'
                        value={`${this.formatDate(this.props.survivor.startDate)} - ${this.formatDate(this.props.survivor.endDate)}`}
                        shouldCloseOnSelect={false}
                        selectsStart
                        startDate={this.props.survivor.startDate}
                        selectsEnd
                        endDate={this.props.survivor.endDate}
                        onChange={this.handleChange}
                    />
                    <br />
                    <textarea className='admin-input'
                    value={this.props.survivor.description}
                    name='description'
                    onChange={event => this.props.handleChange('Survivor', this.props.index, event)}
                    type='text'
                    placeholder='Description'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.props.survivor.tuition}
                    name='tuition'
                    onChange={event => this.props.handleChange('Survivor', this.props.index, event)}
                    type='text'
                    placeholder='Tuition Price'
                    />
                    <br />
                    <input className='admin-input'
                    value={this.props.survivor.image}
                    name='image'
                    onChange={event => this.props.handleChange('Survivor', this.props.index, event)}
                    type='text'
                    placeholder='Image URL'
                    />
                    <br />
                </form>
            </div>
        )
    } 
}

export default AdminSurvivorForm