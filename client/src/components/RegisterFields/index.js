import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class RegisterFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Email: '',
            Password: ''
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
            Name: '',
            Email: '',
            Password: ''
        });
    };

    render() {
        return (
            <div className='registerFields' id='registerFields'>
                <h1 className='registerTitle'>Register</h1>
                <form>
                <input className='registerName'
                        value={this.state.name}
                        name='name'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Name'
                    />
                    <br />
                    <input className='registerEmail'
                        value={this.state.email}
                        name='email'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Email'
                    />
                    <br />
                    <input className='registerPassword'
                        value={this.state.password}
                        name='password'
                        onChange={this.handleInputChange}
                        type='password'
                        placeholder='Password'
                    />
                    <br />
                    <button className='registerBtn' onClick={this.handleFormSubmit}>Register</button>

                </form>
                <Link className='loginLink' to='/login'>Log In</Link>
            </div>
        );
    };
};

export default RegisterFields;
