import React, { Component } from 'react';
import MainImageCarousel from '../components/MainImageCarousel';
import MainShows from '../components/MainShows';
import MainSurvivor from '../components/MainSurvivor';
import MainCampsCarousel from '../components/MainCampsCarousel';
import Lessons from '../components/Lessons';
import Map from '../components/Map';
import API from '../utils/API';

class Main extends Component {
    state = {
        images: [{
            src: 'https://static.wixstatic.com/media/3c9dac_57b02779cd1a46a2823267f2c9008956~mv2_d_2048_1366_s_2.jpg/v1/fill/w_980,h_620,al_c,q_85,usm_0.66_1.00_0.01/3c9dac_57b02779cd1a46a2823267f2c9008956~mv2_d_2048_1366_s_2.webp'
        },
        {
            src: 'https://static.wixstatic.com/media/3c9dac_499325623dda49b7b93d469c1d9b2d04~mv2.jpg/v1/fill/w_960,h_607,al_c,q_85/3c9dac_499325623dda49b7b93d469c1d9b2d04~mv2.webp'
        },
        {
            src: 'https://static.wixstatic.com/media/3c9dac_19d5a038c4db4b8986c253f99960d69c~mv2.jpg/v1/fill/w_764,h_483,al_c,q_85/3c9dac_19d5a038c4db4b8986c253f99960d69c~mv2.webp'
        }],
        camps: [{
            title: 'Trollapalooza!',
            ages: 'A camp for ages 4-16',
            dates: 'June 11-15 9:00AM-12:00PM',
            tuition: 'Tuition for this camp: $90',
            performance: []
        },
        {
            title: 'Coco',
            ages: 'A musical play for ages 4-16',
            dates: 'June 18-29 9:00AM-12:00PM',
            tuition: 'Tuition for this camp: $180',
            performance: 'Performance June 29 at 7PM Tickets $3 at the door.'
        },
        {
            title: 'Pitched Perfect',
            ages: 'A vocal performance camp for ages 8-16',
            dates: 'July 2-13 9:00AM-12:00PM',
            tuition: 'Tuition for this camp: $180',
            performance: []
        }],
        currentShow: {
            title: 'Xanadu',
            date1: 'Fri Aug 3 - 7:00',
            date2: 'Fri Aug 3 - 7:00',
            date3: 'Fri Aug 3 - 7:00'
        },
        survivor: {
            theme: 'Asgard',
            dates: 'Jan 18, 19, 20'
        }
    };

    componentDidMount = () => {
        API.getContent().then(content => console.log(content));
    }

    render() {
        return (
            <div>
                <MainImageCarousel images={this.state.images}/>
                <MainShows currentShow={this.state.currentShow}/>
                <MainSurvivor survivor={this.state.survivor}/>
                <MainCampsCarousel camps={this.state.camps}/>
                <Lessons />
                <Map />
            </div>
        );
    };
};

export default Main;