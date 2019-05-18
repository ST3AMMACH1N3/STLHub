import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: ''
        }
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        API
            .changePassword(this.state)
            .then(() => {
                this.setState({newPassword: ''});
            })
            .catch(err => {
                console.log(err);
            })
    }

    showPage = () => {
        return (
            <div>
                <form>
                    <input type='password' name='newPassword' placeholder='Enter new password' onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Change Password</button>
                </form>
            </div>
        )
    }
    
    render() {
        return (this.props.credentials) ? this.showPage() : <Redirect to='/' />;
        
    }
};

export default ChangePassword;