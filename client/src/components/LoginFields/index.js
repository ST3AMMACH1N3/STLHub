import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import API from '../../utils/API';

class LoginFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            .login({ email: this.state.email, password: this.state.password })
            .then()
            .catch(err => console.log(err))
        this.setState({
            email: '',
            password: ''
        });
    };

    render() {
        return (
            <div className='loginFields' id='loginFields'>
                <h1>Log In</h1>
                <form>
                    <input 
                        value={this.state.email}
                        name='email'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Email'
                    />
                    <br />
                    <input 
                        value={this.state.password}
                        name='password'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Password'
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Log In</button>

                </form>
                <Link to='/register'>Register</Link>
            </div>
        );
    };
};

export default LoginFields;
