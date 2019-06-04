import React, { Component } from 'react';
import CampsTitle from '../components/CampsTitle';
import CampsIntro from '../components/CampsIntro';
import Camp from '../components/Camp';
import API from '../utils/API';


class Camps extends Component {
    constructor(props){
        super(props);
        this.state = {
            camps: []
        };
    }
    
    componentDidMount = () => {
        API.getContent().then(content => {
            let camps = content.data.camps.map(camp => {
                camp.startDate = new Date(camp.startDate);
                camp.endDate = new Date(camp.endDate);
                camp.tuition = (parseInt(camp.tuition) / 100).toFixed(2)
                return camp
            })
            this.setState({
                camps: camps
            })
        })
    }

    render() {
        return(
            <div className='container'>
                <CampsTitle />
                <CampsIntro />
                {(this.state.camps.length) ? this.state.camps.map(camp => <Camp campInfo={camp}/>) : ''}
            </div>
        );
    };
}

export default Camps;