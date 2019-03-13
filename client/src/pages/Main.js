import React, { Component } from 'react';
import MainImageCarousel from '../components/MainImageCarousel';
import MainShows from '../components/MainShows';
import MainSurvivor from '../components/MainSurvivor';
import MainCampsCarousel from '../components/MainCampsCarousel';
import Lessons from '../components/Lessons';
import Map from '../components/Map';
import API from '../utils/API';
import Announcements from '../components/Announcements';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [{
                src: 'https://static.wixstatic.com/media/3c9dac_57b02779cd1a46a2823267f2c9008956~mv2_d_2048_1366_s_2.jpg/v1/fill/w_980,h_620,al_c,q_85,usm_0.66_1.00_0.01/3c9dac_57b02779cd1a46a2823267f2c9008956~mv2_d_2048_1366_s_2.webp'
            },
            {
                src: 'https://static.wixstatic.com/media/3c9dac_499325623dda49b7b93d469c1d9b2d04~mv2.jpg/v1/fill/w_960,h_607,al_c,q_85/3c9dac_499325623dda49b7b93d469c1d9b2d04~mv2.webp'
            },
            {
                src: 'https://static.wixstatic.com/media/3c9dac_19d5a038c4db4b8986c253f99960d69c~mv2.jpg/v1/fill/w_764,h_483,al_c,q_85/3c9dac_19d5a038c4db4b8986c253f99960d69c~mv2.webp'
            }],
            camps: [],
            currentShow: {
                title: '',
                dates: []
            },
            survivor: {
                theme: '',
                dates: '',
                tuition: ''
            },
            announcements: []
        };
    }

    componentDidMount = () => {
        API.getContent().then(content => {
            console.log(content);
            if (content.data.shows.length < 1) {
                return;
            }
            let currentShow;
            let nearestDate = Infinity;
            let today = Date.now();
            content.data.shows.forEach(show => {
                let showDate = new Date(show.date);
                if (showDate - today < nearestDate && showDate - today > 1) {
                    currentShow = show;
                    nearestDate = showDate - today;
                }
            })

            
            let shows = [{}];
            let showDates = [];
            if (currentShow) {
                shows = content.data.shows.filter(show => show.title === currentShow.title);
                showDates = shows.map(show => {
                    let date = new Date(show.date);
                    let options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
                    let readable = Intl.DateTimeFormat('en-US', options).format(date);
                    return readable;
                });
            }

            let camps = content.data.camps.map(camp => {
                camp.tuition = (parseInt(camp.tuition) / 100).toFixed(2)
                return camp
            })
            this.setState({
                currentShow: {
                    title: shows[0].title || 'No Announced Shows',
                    dates: showDates
                },
                survivor: {
                    theme: content.data.survivors[0].title,
                    dates: content.data.survivors[0].dates,
                    tuition: '$' + (content.data.survivors[0].tuition / 100).toFixed(2)
                },
                camps: camps,
                announcements: content.data.announcements
            })
        });
    }

    render() {
        return (
            <div>
                <MainImageCarousel images={this.state.images}/>
                {(this.state.announcements) ? <Announcements announcements={this.state.announcements}/> : ''}
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