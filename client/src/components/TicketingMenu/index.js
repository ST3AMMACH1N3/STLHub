import React, {Component} from 'react';
import SeatingMap from '../SeatingMap';
import TicketingBtn from '../TicketingBtn';
import API from '../../utils/API';

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
                // let shows = [{ title: 'Xanadu', dates: [Date.now()] }]; //For testing the date drop down since there is only one show;
                let shows = [];
                let showData = [];
                response.data.forEach(showObj => {
                    let sameTitle = shows.findIndex(show => show.title === showObj.title);
                    if (sameTitle !== -1) {
                        shows[sameTitle].dates.push(showObj.date);
                        return
                    }
                    shows.push({ title: showObj.title, dates: [showObj.date] });
                    showData.push(showObj);
                });
                this.setState({ shows, showData }, () => {
                    this.handleShowSelection(this.props.title);
                });
            })
            .catch(err => console.log(err));

        if (this.props.credentials) {
            API
                .getReservations()
                .then(response => {
                    console.log(response.data);
                    this.setState({ reservations: response.data });
                })
        }
    }

    handleDateSelection = value => {
        let selectedShow = this.state.showData.find(show => {
            let date = new Date(show.date);
            let selectedDate = new Date(value);
            return (show.title === this.state.selectedTitle && date - selectedDate === 0);
        });

        let reservation = '';
        if (this.state.reservations.length) {
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
            this.setState({ selectedTitle: selectedShow.title });
        }
    }

    handleReserve = modifiedSeats => {
        console.log(modifiedSeats);
        console.log(this.state.reservation);
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
                <select onChange={event => this.handleDateSelection(event.target.value)} defaultValue='Please Select a Date'>
                    <option disabled>Please Select a Date</option>
                    {show.dates.map(date => {
                        date = new Date(date);
                        let options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
                        let readable = Intl.DateTimeFormat('en-US', options).format(date);
                        return <option key={date} value={date}>{readable}</option>
                    })}
                </select>
                : '' }
                {this.state.selectedShow ? <SeatingMap seats={this.state.selectedShow.seats} loggedIn={(this.props.credentials)} handleReserve={this.handleReserve}/> : ''}
            </div>
        );
    };
};

export default TicketingMenu;