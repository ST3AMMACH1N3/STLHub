import React, {Component} from 'react';
import AdminActionBtn from '../AdminActionBtn';
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

    render() {
        return(
            <div>
                <form>
                    <input className='admin-input'
                    value={this.state.title}
                    name='title'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter Announcement Title'
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
                    <AdminActionBtn label='Save' type='Announcement' _id={this.props.announcements._id} content={this.state} handleSubmit={this.props.handleSave} />
                    <AdminActionBtn label='Delete' type='Announcement' _id={this.props.announcements._id} content={this.state} handleSubmit={this.props.handleDelete} />
                </form>
            </div>
        );
    };
};

export default AdminAnnouncementForm;