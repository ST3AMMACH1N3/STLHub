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
import AdminActionBtn from '../components/AdminActionBtn';

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

        let saving = false;
    }

    componentDidMount = () => {
        this.getContent();
    }

    getContent = () => {
        API.getContent().then(content => {
            let { images, shows, survivors, camps, announcements } = content.data;
            shows = shows.map(show => {
                show.date = new Date(show.date);
                return show;
            })
            survivors = survivors.map(survivor => {
                survivor.startDate = new Date(survivor.startDate);
                survivor.endDate = new Date(survivor.endDate);
                return survivor;
            })
            camps = camps.map(camp => {
                camp.startDate = new Date(camp.startDate);
                camp.endDate = new Date(camp.endDate);
                camp.showDate = camp.showDate ? new Date(camp.showDate) : null;
                return camp;
            })
            this.setState({
                images: images,
                shows: shows,
                survivors: survivors,
                camps: camps,
                announcements: announcements
            })
        });
    }

    handleAddForm = type => {
        type = type.toLowerCase() + 's';
        let newArray = this.state[type].slice();
        newArray.push({});
        this.setState({
            [type]: newArray
        });
    }

    handleChange = (type, index, event) => {
        let { name, value } = event.target;
        type = type.toLowerCase() + 's';
        let newArray = this.state[type].slice();
        newArray[index][name] = value;
        this.setState({
            [type]: newArray
        });
    }

    handleCheck = (type, index, event) => {
        let { name, checked } = event.target;
        type = type.toLowerCase() + 's';
        let newArray = this.state[type].slice();
        newArray[index][name] = checked;
        this.setState({
            [type]: newArray
        });
    }

    handleDelete = (type, index) => {
        let category = type.toLowerCase() + 's';
        let item = this.state[category][index];
        if (item._id) {
            let func = `delete${type === 'Show' ? 'Show': 'Content'}`;
            API[func]({ type, _id: item._id })
                .then(response => console.log(response))
                .catch(err => console.log(err));
        }
        let newArray = this.state[category].slice();
        newArray.splice(index, 1);
        this.setState({
            [category]: newArray
        });
    }

    handleSave = (type, index) => {
        if (this.saving) return;
        this.saving = true;
        let category = type.toLowerCase() + 's';
        let content = this.state[category].slice(index, index + 1)[0];
        let func = (content._id ? 'edit' : 'create') + (type === 'Show' ? 'Show' : 'Content');
        for(let key in content) {
            if (key.indexOf(/date/i) !== -1) {
                content[key] = content[key] ? new Date(content[key]) : null;
            }
        }
        API[func]({ type, content })
            .then(res => {
                console.log(res);
                let newArray = this.state[category].slice();
                newArray[index] = res.data;
                for(let key in newArray[index]) {
                    if (key.indexOf(/date/i) !== -1) {
                        newArray[index][key] = newArray[index][key] ? new Date(newArray[index][key]) : null;
                    }
                }
                this.setState({
                    [category]: newArray
                }, function() {
                    this.saving = false;
                });
            })
            .catch(err => console.log(err));
    }

    showPage = () => {
        return (
            <div className='admin-form'>
                <div className='picture-section'>
                    <AdminPictureTitle />
                    {this.state.images.map((image, index) =>{
                        return (<div className='form-section'>
                                    <hr className='announcementHR' />
                                    <AdminPictureForm key={`image${index}`} index={index} image={image} handleChange={this.handleChange}/>
                                    <AdminActionBtn key={`imageSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Image' index={index} />
                                    <AdminActionBtn key={`imageDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Image' index={index} />
                                </div>)
                    })}
                    <AdminAddBtn label='Image' handleSubmit={this.handleAddForm}/>
                </div>
                <div className='announcement-section'>
                    <AdminAnnouncementTitle />
                    {this.state.announcements.map((announcement, index) =>{
                        return (<div className='form-section'>
                                    <hr className='announcementHR' />
                                    <AdminAnnouncementForm key={`announcement${index}`} index={index} announcement={announcement} handleChange={this.handleChange}/>
                                    <AdminActionBtn key={`announcementSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Announcement' index={index} />
                                    <AdminActionBtn key={`announcementDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Announcement' index={index} />
                                </div>)
                    })}
                    <AdminAddBtn label='Announcement' handleSubmit={this.handleAddForm}/>
                </div>
                <div className='show-section'>
                    <AdminShowTitle />
                    {this.state.shows.map((show, index) =>{
                        return (<div className='form-section'>
                                    <hr className='announcementHR' />
                                    <AdminShowForm key={`show${index}`} index={index} show={show} handleChange={this.handleChange}/>
                                    <AdminActionBtn key={`showSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Show' index={index} />
                                    <AdminActionBtn key={`showDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Show' index={index} />
                                </div>)
                    })}
                    <AdminAddBtn label='Show' handleSubmit={this.handleAddForm}/>
                </div>
                <div className='survivor-section'>
                    <AdminSurvivorTitle />
                    {this.state.survivors.map((survivor, index) =>{
                        return (<div className='form-section'>
                                    <hr className='announcementHR' />
                                    <AdminSurvivorForm key={`survivor${index}`} index={index} survivor={survivor} handleChange={this.handleChange}/>
                                    <AdminActionBtn key={`survivorSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Survivor' index={index} />
                                    <AdminActionBtn key={`survivorDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Survivor' index={index} />
                                </div>)
                    })}
                    <AdminAddBtn label='Survivor' handleSubmit={this.handleAddForm}/>
                </div>
                <div className='camp-section'>
                    <AdminCampTitle />
                    {this.state.camps.map((camp, index) =>{
                        return (<div className='form-section'>
                                    <hr className='announcementHR' />
                                    <AdminCampForm key={`camp${index}`} index={index} camp={camp} handleChange={this.handleChange} handleCheck={this.handleCheck}/>
                                    <AdminActionBtn key={`campSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Camp' index={index} />
                                    <AdminActionBtn key={`campDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Camp' index={index} />
                                </div>)
                    })}
                    <AdminAddBtn label='Camp' handleSubmit={this.handleAddForm}/>
                </div>
            </div>
        )
    }
    
    render() {
        return (this.props.credentials && this.props.credentials.admin) ? this.showPage() : <Redirect to='/' />
    }
}

export default Admin