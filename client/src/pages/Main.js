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
            let { images, announcements, shows, camps, survivors } = content.data;
            
            let currentShow;
            let nearestDate = Infinity;
            let today = Date.now();
            shows.forEach(show => {
                let showDate = new Date(show.date);
                if (showDate - today < nearestDate && showDate - today > 1) {
                    currentShow = show;
                    nearestDate = showDate - today;
                }
            })
            
            let showDates = [];
            if (currentShow) {
                let showingList = shows.filter(show => show.title === currentShow.title);
                showDates = showingList.map(show => {
                    let date = new Date(show.date);
                    let options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
                    let readable = Intl.DateTimeFormat('en-US', options).format(date);
                    return readable;
                });
            }
            console.log(currentShow)

            camps.map(camp => {
                camp.startDate = new Date(camp.startDate);
                camp.endDate = new Date(camp.endDate);
                camp.tuition = (parseInt(camp.tuition) / 100).toFixed(2)
                return camp
            })
            console.log(camps);

            console.log(survivors);
            let currentSurvivor;
            nearestDate = Infinity;
            survivors.forEach(survivor => {
                let survivorDate = new Date(survivor.startDate);
                if (survivorDate - today < nearestDate && survivorDate - today > 1) {
                    currentSurvivor = survivor;
                    nearestDate = survivorDate - today;
                }
            })
            console.log(currentSurvivor);
            
            this.setState({
                images: images || [],
                currentShow: {
                    title: currentShow ? currentShow.title : 'No Announced Shows',
                    dates: showDates
                },
                survivor: {
                    title: currentSurvivor ? currentSurvivor.title : null,
                    startDate: currentSurvivor ? new Date(currentSurvivor.startDate) : null,
                    endDate: currentSurvivor ? new Date(currentSurvivor.endDate) : null,
                    tuition: currentSurvivor ? '$' + (currentSurvivor.tuition / 100).toFixed(2) : null
                },
                camps: camps,
                announcements: announcements
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.images.length ? <MainImageCarousel images={this.state.images}/> : ''}
                {this.state.announcements.length ? <Announcements announcements={this.state.announcements}/> : ''}
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