import React, {Component} from 'react';
import SeatingMap from '../SeatingMap';
import API from '../../utils/API';
import './style.css';

class TicketingMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            showData: [],
            selectedTitle: '',
            selectedShow: '',
            reservations: [],
            reservation: ''
        };
    };

    componentDidMount = () => {
        API
            .getShows()
            .then(response => {
                let shows = [];
                let showData = [];
                response.data.forEach(showObj => {
                    let date = new Date(showObj.date);
                    let options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
                    let readable = Intl.DateTimeFormat('en-US', options).format(date);
                    showObj.date = readable;
                    showData.push(showObj);
                    let sameTitle = shows.findIndex(show => show.title === showObj.title);
                    if (sameTitle !== -1) {
                        shows[sameTitle].dates.push(showObj.date);
                        return
                    }
                    shows.push({ title: showObj.title, dates: [showObj.date] });
                });
                this.setState({ shows, showData }, () => {
                    this.handleShowSelection(this.props.title);
                });
            })
            .catch(err => console.log(err));

        API
            .getReservations()
            .then(response => {
                if (Array.isArray(response.data)) {
                    this.setState({ reservations: response.data });
                }
            })
    }

    handleDateSelection = value => {
        let selectedShow = this.state.showData.find(show => {
            let date = new Date(show.date);
            let selectedDate = new Date(value);
            return (show.title === this.state.selectedTitle && date - selectedDate === 0);
        });

        if (!selectedShow) {
            console.log('Show not found');
            return;
        }

        let reservation = '';
        if (this.state.reservations.length > 0) {
            reservation = this.state.reservations.find(reservation => reservation.show === selectedShow._id);
            if (reservation) {
                selectedShow.seats.map(seat => {
                    if (reservation.seats.indexOf(seat._id) !== -1) {
                        seat.status = 'selected';
                    }
                    return seat;
                })
            }
        }
        
        if (selectedShow) {
            this.setState({ selectedShow, reservation });
        }
    }

    handleShowSelection = value => {
        let selectedShow = this.state.shows.find(show => show.title === value);
        if (selectedShow) {
            this.setState({ selectedTitle: selectedShow.title, selectedShow: '', reservation: '' });
        }
    }

    handleReserve = modifiedSeats => {
        if (this.state.reservation) {
            API.editReservation({ show: this.state.selectedShow._id, reservation: this.state.reservation._id, seats: modifiedSeats });
            return;
        }
        API.createReservation({ show: this.state.selectedShow._id, seats: modifiedSeats});
    }

    render() {
        let show = this.state.shows.find(show => show.title === this.state.selectedTitle) || { title: '', dates: [], seats:[] };
        return (
            <div className='ticketing'>
                <h1 className='ticketingTitle'>{this.state.selectedTitle || 'Select A Show'}</h1>
                <select onChange={event => this.handleShowSelection(event.target.value)} value={this.state.selectedTitle || 'Please Select a Show'}>
                    <option disabled>Please Select a Show</option>
                    {this.state.shows.map(show => {
                        return <option key={show.title} value={show.title}>{show.title}</option>;
                    })}
                </select>
                {(show.dates.length) ? 
                <select onChange={event => this.handleDateSelection(event.target.value)} test={console.log(this.state.selectedShow)} value={typeof this.state.selectedShow === 'object' ? this.state.selectedShow.date : 'Please Select a Date'}>
                    <option disabled>Please Select a Date</option>
                    {show.dates.map(date => {
                        return <option key={date} value={date}>{date}</option>
                    })}
                </select>
                : '' }
                {this.state.selectedShow ? <SeatingMap key={this.state.selectedShow.date} seats={this.state.selectedShow.seats} loggedIn={(this.props.credentials)} handleReserve={this.handleReserve}/> : ''}
            </div>
        );
    };
};

export default TicketingMenu;