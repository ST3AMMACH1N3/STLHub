import React, {Component} from 'react';
import './style.css';

class AdminShowForm extends Component {
    state = {
        name: '',
        description: '',
        date: '',
        time: '',
        tuition: '',
        performance: false,
        performanceDate: '',
        performancePrice: '',
        extendedStay: false,
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
            name: '',
            description: '',
            date: '',
            time: '',
            tuition: '',
            performance: false,
            performanceDate: '',
            performancePrice: '',
            extendedStay: false,
        });

        console.log(this.state.name + ', ' + this.state.description + ', ' + this.state.date + ', ' + this.state.time + ', ' + this.state.tuition + ', ' + this.state.performance + ', ' + this.state.performanceDate + ', ' + this.state.performancePrice + ', ' + this.state.extendedStay)


    };

    render() {
        return(
            <div>
                <h4>Add a Camp:</h4>
                <form>
                    <input 
                    value={this.state.name}
                    name='name'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Name'
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
                    value={this.state.date}
                    name='date'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Dates'
                    />
                    <br />
                    <input 
                    value={this.state.time}
                    name='time'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Times'
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
                    value={this.state.performance}
                    name='performance'
                    onChange={this.handleInputChange}
                    type='radio'
                    placeholder='Enter Camp Name'
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Add</button>
                </form>
            </div>
        );
    };
};

export default AdminShowForm;