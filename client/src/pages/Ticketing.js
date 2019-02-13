import React, {Component} from 'react';
import TicketingMenu from '../components/TicketingMenu';
import API from '../utils/API';

class Ticketing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.location.state ? this.props.location.state.title : '',
            shows: []
        };
    };

    componentDidMount = () => {
        API.getContent().then(response => {
            this.setState({ shows: response.data.shows });
        });
    }

    handleSelection = event => {
        
    }

    render() {
        return(
            <div>
                <TicketingMenu title={this.state.title} shows={this.state.shows}/>
            </div>
        );
    };
};

export default Ticketing;