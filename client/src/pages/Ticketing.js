import React, {Component} from 'react';
import TicketingMenu from '../components/TicketingMenu';

class Ticketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount = () => {
        console.log(this.props);
        this.setState({
            title: this.props[0].location.state ? this.props[0].location.state.title : ''
        })
    }

    render() {
        return <TicketingMenu title={this.state.title}/>;
    };
};

export default Ticketing;