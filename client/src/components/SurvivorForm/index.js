import React, {Component} from 'react';
import './style.css';

class SurvivorForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageSent: false,
            name:'',
            age:'',
            phone:'',
            email:'',
            emergencyName:'',
            emergencyNumber:'',
            allergies:''
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
            messageSent: true,
            name:'',
            age:'',
            phone:'',
            email:'',
            emergencyName:'',
            emergencyNumber:'',
            allergies:''
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        className='survivor-name survivor-form'
                        value={this.state.name}
                        name='name'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Name' 
                    />
                    <br />
                    <input 
                        className='survivor-age survivor-form'
                        value={this.state.age}
                        name='age'
                        onChange={this.handleInputChange}
                        type='number'
                        placeholder='Age'
                    />
                    <br />
                    <input 
                        className='survivor-phone survivor-form'
                        value={this.state.phone}
                        name='phone'
                        onChange={this.handleInputChange}
                        type='number'
                        placeholder='Phone'
                    />
                    <br />
                    <input 
                        className='survivor-email survivor-form'
                        value={this.state.email}
                        name='email'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Email'
                    />
                    <br />
                    <input 
                        className='survivor-emergency-name survivor-form'
                        value={this.state.emergencyName}
                        name='emergencyName'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Emergency Contact Name'
                    />
                    <br />
                    <input 
                        className='survivor-emergency-number survivor-form'
                        value={this.state.emergencyNumber}
                        name='emergencyNumber'
                        onChange={this.handleInputChange}
                        type='number'
                        placeholder='Emergency Contact Phone Number'
                    />
                    <br />
                    <input 
                        className='survivor-allergies survivor-form'
                        value={this.state.allergies}
                        name='allergies'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Allergies'
                    />
                </form>
                <button className='survivor-submit'>Reserve Your Spot!</button>
            </div>
        )
    };
};

export default SurvivorForm;