import React, {Component} from 'react';
import FAQTitle from '../components/FAQTitle';
import QuestionsTitle from '../components/QuestionsTitle';
import Questions from '../components/Questions';
import RulesTitle from '../components/RulesTitle';
import Rules from '../components/Rules';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <FAQTitle />
                <QuestionsTitle />
                <Questions />
                <RulesTitle />
                <Rules />
            </div>
        );
    };
};

export default FAQ;