import React, {Component} from 'react';
import SeasonTitle from '../components/SeasonTitle';
import SeasonCard from '../components/SeasonCard';
import FactsTitle from '../components/FactsTitle';
import Facts from '../components/Facts';

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <SeasonTitle />
                <SeasonCard />
                <FactsTitle />
                <Facts />
            </div>
        );
    };
};

export default Trivia;