import React, { Component } from 'react';
import Seat from '../Seat';
import './style.css';

class SeatingMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: [],
            size: 16,
            seatsInMiddle: 5,
            soundTable: (5 + 2) * 16
        }
    }

    breakArray = array => {

    }

    componentDidMount = () => {

    }

    render() {
        return null;
    }
};

export default SeatingMap;