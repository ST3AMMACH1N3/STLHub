import React, {Component} from 'react';
import SeatingMap from '../SeatingMap';
import TicketingBtn from '../TicketingBtn';

class TicketingMenu extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: this.props.title,
            dates: [],
            show1: 'Xanadu',
            Xanadu: ['July 20', 'July 21', 'July 22'],
            show2: 'Coco',
            Coco: ['June 29'],
            show3: 'Pitched Perfect',
            'Pitched Perfect': ['July 13'],
            show4: 'The Greatest Show',
            'The Greatest Show': ['August 3'],
        };
    };
    
    componentDidMount = () => {
        this.setState({
            dates: this.state.title ? this.state[this.state.title] : []
        });
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
                <h1 className='ticketingTitle'>{this.state.title}</h1>
                <select onChange={this.showSelection} defaultValue={this.state.title || 'Please Select a Show'}>
                    <option disabled>Please Select a Show</option>
                    <option value={this.state.show1}>{this.state.show1}</option>
                    <option value={this.state.show2}>{this.state.show2}</option>
                    <option value={this.state.show3}>{this.state.show3}</option>
                    <option value={this.state.show4}>{this.state.show4}</option>
                </select>
                {(this.state.dates.length) ? 
                <select>
                    {this.state.dates.map(date => {
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