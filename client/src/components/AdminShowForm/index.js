import React, {Component} from 'react';
import './style.css';

class AdminShowForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            newShowTitle: props.shows.title,
            newShowDate: props.shows.date,
            newShowPrice: props.shows.ticketPrice
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
            newShowTitle: '',
            newShowDate: '',
            newShowPrice: ''
        });

        console.log(this.state.newShowTitle + ', ' + this.state.newShowDate + ', ' + this.state.newShowPrice)


    };

    render() {
        return(
            <div>
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
                    value={this.state.newShowPrice}
                    name='newShowPrice'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Show Price'
                    />
                    <br />
                    <button>Save</button>
                    <button>Delete</button>
                </form>
            </div>
        );
    };
};

export default AdminShowForm;