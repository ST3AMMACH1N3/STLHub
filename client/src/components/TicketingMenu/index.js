import React, {Component} from 'react';
import SeatingMap from '../SeatingMap';
import TicketingBtn from '../TicketingBtn';

class TicketingMenu extends Component {
    constructor(props){
        super(props)

    };
    
    componentDidMount = () => {
    };

    showSelection = event => {
        this.setState({
            title: event.target.value,
            dates: this.state[event.target.value]
        });
    };

    render() {
        return (
            <div className='ticketing'>
                <h1 className='ticketingTitle'>{this.props.selectedShow.title}</h1>
                <select onChange={event => this.props.handleSelection(event.target.value)} defaultValue='Please Select a Show'>
                    <option disabled>Please Select a Show</option>
                    {this.props.shows.map(show => {
                        return <option key={show.title} value={show.title}>{show.title}</option>;
                    })}
                </select>
                {(this.props.selectedShow.dates.length) ? 
                <select>
                    {this.props.selectedShow.dates.map(date => {
                        date = new Date(date);
                        let options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
                        date = Intl.DateTimeFormat('en-US', options).format(date);
                        return <option key={date} value={date}>{date}</option>
                    })}
                </select>
                : '' }
                <SeatingMap />
                <TicketingBtn />
            </div>
        );
    };
};

export default TicketingMenu;