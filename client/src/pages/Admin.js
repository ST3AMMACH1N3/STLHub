import React, {Component} from 'react'
import API from '../utils/API'
import AdminPictureTitle from '../components/AdminPictureTitle'
import AdminShowTitle from '../components/AdminShowTitle'
import AdminSurvivorTitle from '../components/AdminSurvivorTitle'
import AdminCampTitle from '../components/AdminCampTitle'
import AdminAnnouncementTitle from '../components/AdminAnnouncementTitle'
import AdminPictureForm from '../components/AdminPictureForm'
import AdminShowForm from '../components/AdminShowForm'
import AdminSurvivorForm from '../components/AdminSurvivorForm'
import AdminCampForm from '../components/AdminCampForm'
import AdminAnnouncementForm from '../components/AdminAnnouncementForm'
import AdminAddBtn from '../components/AdminAddBtn'

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
    
    render() {
        return (
            <div>
                <AdminPictureTitle />
                {this.state.images.map(images =>{
                    return <AdminPictureForm key={images} images={images} />
                })}
                <AdminAddBtn label='Picture'/>
                <AdminShowTitle />
                {this.state.shows.map(shows =>{
                    return <AdminShowForm key={shows} shows={shows} />
                })}
                <AdminAddBtn label='Show' />
                <AdminSurvivorTitle />
                {this.state.survivors.map(survivors =>{
                    return <AdminSurvivorForm key={survivors} survivors={survivors} />
                })}
                <AdminAddBtn label='Survivor' />
                <AdminCampTitle />
                {this.state.camps.map(camps =>{
                    return <AdminCampForm key={camps} camps={camps} />
                })}
                <AdminAddBtn label='Camp' />
                <AdminAnnouncementTitle />
                {this.state.announcements.map(announcements =>{
                    return <AdminAnnouncementForm key={announcements} announcements={announcements} />
                })}
                <AdminAddBtn label='Announcment' />
            </div>
        )
    }
}

export default Admin