import React, {Component} from 'react'
import AdminPictureForm from '../components/AdminPictureForm'
import AdminShowForm from '../components/AdminShowForm'
import AdminSurvivorForm from '../components/AdminSurvivorForm'
// import AdminCampForm from '../components/AdminCampForm'

class Admin extends Component {

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            addedImage: '',
            newShowTitle: '',
            newShowDate: [],
            newShowTime: [],
            newShowPrice: ''
        });

        console.log(this.state.addedImage + ', ' + this.state.newShowTitle + ', ' + this.state.newShowDate + ', ' + this.state.newShowTime + ', ' + this.state.newShowPrice)


    };

    render() {
        return (
            <div>
                <AdminPictureForm />
                <AdminShowForm />
                <AdminSurvivorForm />
                {/* <AdminCampForm /> */}
            </div>
        )
    }
}

export default Admin