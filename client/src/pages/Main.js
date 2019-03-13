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
            images: [],
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
                images: content.data.images || [],
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