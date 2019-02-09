import React, {Component} from 'react'
import './style.css'

class AdminSurvivorForm extends Component {
    
    state = {
        theme: '',
        dates: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            theme: '',
            dates: ''
        });

        console.log(this.state.theme + ', ' + this.state.dates)


    };

    render() {
        return (
            <div>
                <h4>New Survivor:</h4>
                <form>
                    <input 
                    value={this.state.theme}
                    name='theme'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Theme'
                    />
                    <br />
                    <input 
                    value={this.state.dates}
                    name='dates'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Dates'
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Add</button>
                </form>
            </div>
        ) 
    }
}

export default AdminSurvivorForm