import React, {Component} from 'react';
import TicketingMenu from '../components/TicketingMenu';
import API from '../utils/API';

class Ticketing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            selectedShow: {
                dates: []
            }
        };
    };

    componentDidMount = () => {
        API
            .getShows()
            .then(response => {
                // let shows = [{ title: 'Xanadu', dates: [Date.now()] }]; //For testing the date drop down since there is only one show;
                let shows = [];
                response.data.forEach(({ title, date, seats, _id, ticketPrice }) => {
                    let sameTitle = shows.findIndex(show => show.title === title);
                    if (sameTitle !== -1) {
                        shows[sameTitle].dates.push(date);
                        return
                    }
                    shows.push({ title, dates: [date], ticketPrice, _id, seats });
                });
                this.setState({ shows });
            })
            .catch(err => console.log(err));
    }

    handleSelection = value => {
        let selectedShow = this.state.shows.find(show => show.title === value);
        this.setState({ selectedShow });
    }

    render() {
        return(
            <div>
                <TicketingMenu shows={this.state.shows} selectedShow={this.state.selectedShow} handleSelection={this.handleSelection}/>
            </div>
        );
    };
};

export default Ticketing;