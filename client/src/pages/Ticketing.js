import React, {Component} from 'react';
import TicketingMenu from '../components/TicketingMenu';

class Ticketing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.location.state ? this.props.location.state.title : ''
        };
    };

    render() {
        return(
            <div>
                <TicketingMenu title={this.state.title}/>
            </div>
        );
    };
};

export default Ticketing;