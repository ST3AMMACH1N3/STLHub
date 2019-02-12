import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class LoginFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            Email: '',
            Password: ''
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
                        type='password'
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
