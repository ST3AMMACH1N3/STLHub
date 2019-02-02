import React, { Component } from 'react';
import './style.css';
import Thanks from '../Thanks';

class Lessons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageSent: false,
            Name:'',
            Email:'',
            Phone:'',
            Message:''
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
            email:'',
            phone:'',
            message:''
        });
    };

    showLessons = () => {
        return (
            <div className='mainLessons'>
                <h1>Private Lessons</h1>
                <p>Skye's the Limit Studio offers private instruction and coaching in voice, acting, and dance at a rate of $20 per half hour.  Lessons may be ongoing or one-time.</p>
                <p>Please contact us for availability and scheduling.</p>
                <form>
                    <input 
                        value={this.state.name}
                        name='name'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Name'
                    />
                    <br />
                    <input 
                        value={this.state.email}
                        name='email'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Email'
                    />
                    <br />
                    <input 
                        value={this.state.phone}
                        name='phone'
                        onChange={this.handleInputChange}
                        type='number'
                        placeholder='Phone'
                    />
                    <br />
                    <textarea
                        value={this.state.message}
                        name='message'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Message'
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Send</button>
                </form>
            </div>
        );
    }

    render() {
        return ((this.state.messageSent) ? <Thanks /> : this.showLessons())
    }
        
};

export default Lessons;