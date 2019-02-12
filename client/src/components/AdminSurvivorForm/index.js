import React, {Component} from 'react'
import './style.css'

class AdminSurvivorForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.survivors.title,
            dates: props.survivors.dates,
            description: props.survivors.description,
            tuition: props.survivors.tuition,
            image: props.survivors.image
        }
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
            title: '',
            dates: '',
            description: '',
            tuition: '',
            image: ''
        });


    };

    render() {
        return (
            <div>
                <form>
                    <input 
                    value={this.state.title}
                    name='title'
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
                    <input 
                    value={this.state.description}
                    name='description'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Description'
                    />
                    <br />
                    <input 
                    value={this.state.tuition}
                    name='tuition'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Tuition Price'
                    />
                    <br />
                    <input 
                    value={this.state.image}
                    name='image'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Image'
                    />
                    <br />
                    <button>Save</button>
                    <button>Delete</button>
                </form>
            </div>
        ) 
    }
}

export default AdminSurvivorForm