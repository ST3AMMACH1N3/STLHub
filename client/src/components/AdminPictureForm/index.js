import React, {Component} from 'react'
import './style.css'

class AdminPictureForm extends Component {
    
    state = {
        addedImage: ''
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
            addedImage: ''
        });

        console.log(this.state.addedImage + ', ' + this.state.newShowTitle + ', ' + this.state.newShowDate + ', ' + this.state.newShowTime + ', ' + this.state.newShowPrice)


    };

    render() {
        return (
            <div>
                <h4>Add an Image:</h4>
                <form>
                    <input className='admin-input'
                    value={this.state.addedImage}
                    name='addedImage'
                    onChange={this.handleInputChange}
                    type='text'
                    />
                    <br />
                    <button>Save</button>
                    <button>Delete</button>
                </form>
            </div>
        ) 
    }
}

export default AdminPictureForm