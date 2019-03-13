import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

class RegisterFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
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

        API
            .createAccount(this.state)
            .then(response => {
                window.location.href = '/login';
            })
            .catch(err => console.log(err));

        this.setState({
            name: '',
            email: '',
            password: ''
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
