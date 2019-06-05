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

    getOrdinal = (num) => {
        let ordinals = ['th', 'st', 'nd', 'rd'];
        return (Math.floor(num / 10) === 1 || num % 10 > 3) ? ordinals[0] : ordinals[num % 10];
    }
    
    componentDidMount = () => {
        API.getContent().then(content => {
            let camps = content.data.camps.map(camp => {
                camp.startDate = new Date(camp.startDate);
                camp.endDate = new Date(camp.endDate);
                let sameMonth = camp.startDate.getMonth() === camp.endDate.getMonth();
                camp.startDate = Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' }).format(camp.startDate) + this.getOrdinal(camp.startDate.getDate());
                camp.endDate = Intl.DateTimeFormat('en-us', sameMonth ? { day: 'numeric' } : { month: 'short', day: 'numeric' }).format(camp.endDate) + this.getOrdinal(camp.endDate.getDate());
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