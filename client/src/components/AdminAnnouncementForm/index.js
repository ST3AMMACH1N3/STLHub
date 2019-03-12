import React, { Component } from 'react';
import AdminActionBtn from '../AdminActionBtn';
import './style.css';

class AdminAnnouncementForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            _id: props.announcement._id || '',
            title: props.announcement.title,
            description: props.announcement.description
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return(
            <div>
                <form>
                    <input className='admin-input'
                    value={this.props.announcement.title}
                    name='title'
                    onChange={event => this.props.handleChange('Announcement', this.props.index, event)}
                    type='text'
                    placeholder='Enter Announcement Title'
                    />
                    <br />
                    <textarea className='admin-input'
                    value={this.props.announcement.description}
                    name='description'
                    onChange={event => this.props.handleChange('Announcement', this.props.index, event)}
                    type='text'
                    placeholder='Enter a Description'
                    />
                    <br />
                </form>
            </div>
        );
    };
};

export default AdminAnnouncementForm;