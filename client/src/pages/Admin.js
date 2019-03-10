import React, {Component} from 'react';
import API from '../utils/API';
import AdminPictureTitle from '../components/AdminPictureTitle';
import AdminShowTitle from '../components/AdminShowTitle';
import AdminSurvivorTitle from '../components/AdminSurvivorTitle';
import AdminCampTitle from '../components/AdminCampTitle';
import AdminAnnouncementTitle from '../components/AdminAnnouncementTitle';
import AdminPictureForm from '../components/AdminPictureForm';
import AdminShowForm from '../components/AdminShowForm';
import AdminSurvivorForm from '../components/AdminSurvivorForm';
import AdminCampForm from '../components/AdminCampForm';
import AdminAnnouncementForm from '../components/AdminAnnouncementForm';
import AdminAddBtn from '../components/AdminAddBtn';
import { Redirect } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
            shows: [],
            survivors: [],
            camps: [],
            announcements: []
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount = () => {
        API.getContent().then(content => {
            console.log(content);
            this.setState({
                shows: content.data.shows,
                survivors: content.data.survivors,
                camps: content.data.camps,
                announcements: content.data.announcements
            })
        });
    }

    handleAddForm = type => {
        type = type.toLowerCase() + 's';
        let newArray = this.state[type];
        newArray.push({});
        this.setState({
            [type]: newArray
        });
    }

    handleDelete = (type, id, content) => {

    }

    handleEdit = (type, content) => {
        if (type === 'Show') {
            API
                .editShow(content)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            return;
        }
        API
            .editContent(content)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    handleSave = (type, id, content) => {
        console.log(content);
    }

    showPage = () => {
        return (
            <div>
                <AdminPictureTitle />
                {this.state.images.map(images =>{
                    return <AdminPictureForm key={images} images={images} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Image' handleSubmit={this.handleAddForm}/>
                <AdminShowTitle />
                {this.state.shows.map(shows =>{
                    return <AdminShowForm key={shows} shows={shows} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Show' handleSubmit={this.handleAddForm}/>
                <AdminSurvivorTitle />
                {this.state.survivors.map(survivors =>{
                    return <AdminSurvivorForm key={survivors} survivors={survivors} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Survivor' handleSubmit={this.handleAddForm}/>
                <AdminCampTitle />
                {this.state.camps.map(camps =>{
                    return <AdminCampForm key={camps} camps={camps} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Camp' handleSubmit={this.handleAddForm}/>
                <AdminAnnouncementTitle />
                {this.state.announcements.map(announcements =>{
                    return <AdminAnnouncementForm key={announcements} announcements={announcements} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Announcement' handleSubmit={this.handleAddForm}/>
            </div>
        )
    }
    
    render() {
        return (this.props.credentials && this.props.credentials.admin) ? this.showPage() : <Redirect to='/' />
    }
}

export default Admin