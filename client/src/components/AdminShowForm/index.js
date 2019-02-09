import React, {Component} from 'react';
import './style.css';

class AdminShowForm extends Component {
    state = {
        newShowTitle: '',
        newShowDate: '',
        newShowTime: '',
        newShowPrice: ''
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
            newShowTitle: '',
            newShowDate: '',
            newShowTime: '',
            newShowPrice: ''
        });

        console.log(this.state.newShowTitle + ', ' + this.state.newShowDate + ', ' + this.state.newShowTime + ', ' + this.state.newShowPrice)


    };

    render() {
        return(
            <div>
                <h4>Add a Show:</h4>
                <form>
                    <input 
                    value={this.state.newShowTitle}
                    name='newShowTitle'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Title'
                    />
                    <br />
                    <input 
                    value={this.state.newShowDate}
                    name='newShowDate'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Date'
                    />
                    <br />
                    <input 
                    value={this.state.newShowTime}
                    name='newShowTime'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Time'
                    />
                    <br />
                    <input 
                    value={this.state.newShowPrice}
                    name='newShowPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Price'
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Add</button>
                </form>
            </div>
        );
    };
};

export default AdminShowForm;