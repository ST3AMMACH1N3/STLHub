import React, {Component} from 'react';
import './style.css';

class AdminAnnouncementForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.announcements.title,
            description: props.announcements.description
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
            title: [],
            description: [],
        });


    };

    render() {
        return(
            <div>
                <form>
                    <input className='admin-input'
                    value={this.state.title}
                    name='title'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Camp Name'
                    />
                    <br />
                    <textarea className='admin-input'
                    value={this.state.description}
                    name='description'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter a Description'
                    />
                    <br />
                    <button>Save</button>
                    <button>Delete</button>
                </form>
            </div>
        );
    };
};

export default AdminAnnouncementForm;