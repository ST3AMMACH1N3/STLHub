import React, {Component} from 'react';
import './style.css';

class SeasonTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <h2 className='season-title'>Past Survivor Seasons</h2>
        );
    };
};

export default SeasonTitle;