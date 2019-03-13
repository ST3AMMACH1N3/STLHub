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
    }

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
            console.log(type);
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
        let category = type.toLowerCase() + 's';
        let content = this.state[category].slice(index, index + 1)[0];
        let func = (content._id ? 'edit' : 'create') + (type === 'Show' ? 'Show' : 'Content');
        console.log(content);
        if (content.date) {
            content.date = new Date(content.date);
            if (JSON.stringify(content.date) === 'Invalid Date') {
                console.log('Invalide date format');
                return;
            }
        }
        API[func]({ type, content })
            .then(res => {
                
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    showPage = () => {
        return (
            <div>
                {/* <AdminPictureTitle />
                {this.state.images.map((image, index) =>{
                    return (<div>
                                <AdminPictureForm key={`image${index}`} index={index} image={image} />
                                <AdminActionBtn key={`imageSave${index}`} handleSubmit={this.handleSave}  type='Image' index={index} />
                                <AdminActionBtn key={`imageDelete${index}`} handleSubmit={this.handleDelete} type='Image' index={index} />
                            </div>)
                })}
                <AdminAddBtn label='Image' handleSubmit={this.handleAddForm}/>
                <AdminShowTitle />
                {this.state.shows.map((show, index) =>{
                    return <AdminShowForm key={`show${index}`} index={index} show={show} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Show' handleSubmit={this.handleAddForm}/>
                <AdminSurvivorTitle />
                {this.state.survivors.map((survivor, index) =>{
                    return <AdminSurvivorForm key={`survivor${index}`} index={index} survivor={survivor} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Survivor' handleSubmit={this.handleAddForm}/>
                <AdminCampTitle />
                {this.state.camps.map((camp, index) =>{
                    return <AdminCampForm key={`camp${index}`} index={index} camp={camp} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Camp' handleSubmit={this.handleAddForm}/>
                <AdminAnnouncementTitle />
                {this.state.announcements.map((announcement, index) =>{
                    return <AdminAnnouncementForm key={`announcement${index}`} index={index} announcement={announcement} handleChange={this.handleChange} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                })}
                <AdminAddBtn label='Announcement' handleSubmit={this.handleAddForm}/> */}
                <AdminPictureTitle />
                {this.state.images.map((image, index) =>{
                    return (<div>
                                <AdminPictureForm key={`image${index}`} index={index} image={image} handleChange={this.handleChange}/>
                                <AdminActionBtn key={`imageSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Image' index={index} />
                                <AdminActionBtn key={`imageDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Image' index={index} />
                            </div>)
                })}
                <AdminAddBtn label='Image' handleSubmit={this.handleAddForm}/>
                <AdminShowTitle />
                {this.state.shows.map((show, index) =>{
                    return (<div>
                                <AdminShowForm key={`show${index}`} index={index} show={show} handleChange={this.handleChange}/>
                                <AdminActionBtn key={`showSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Show' index={index} />
                                <AdminActionBtn key={`showDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Show' index={index} />
                            </div>)
                })}
                <AdminAddBtn label='Show' handleSubmit={this.handleAddForm}/>
                <AdminSurvivorTitle />
                {this.state.survivors.map((survivor, index) =>{
                    return (<div>
                                <AdminSurvivorForm key={`survivor${index}`} index={index} survivor={survivor} handleChange={this.handleChange}/>
                                <AdminActionBtn key={`survivorSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Survivor' index={index} />
                                <AdminActionBtn key={`survivorDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Survivor' index={index} />
                            </div>)
                })}
                <AdminAddBtn label='Survivor' handleSubmit={this.handleAddForm}/>
                <AdminCampTitle />
                {this.state.camps.map((camp, index) =>{
                    return (<div>
                                <AdminCampForm key={`camp${index}`} index={index} camp={camp} handleChange={this.handleChange}/>
                                <AdminActionBtn key={`campSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Camp' index={index} />
                                <AdminActionBtn key={`campDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Camp' index={index} />
                            </div>)
                })}
                <AdminAddBtn label='Camp' handleSubmit={this.handleAddForm}/>
                <AdminAnnouncementTitle />
                {this.state.announcements.map((announcement, index) =>{
                    return (<div>
                                <AdminAnnouncementForm key={`announcement${index}`} index={index} announcement={announcement} handleChange={this.handleChange}/>
                                <AdminActionBtn key={`announcementSave${index}`} handleSubmit={this.handleSave}  label='Save' type='Announcement' index={index} />
                                <AdminActionBtn key={`announcementDelete${index}`} handleSubmit={this.handleDelete} label='Delete' type='Announcement' index={index} />
                            </div>)
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