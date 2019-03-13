import React, {Component} from 'react';
import './style.css';

class FAQTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <h1 className='FAQ-title'>Survivor Official Rules and FAQs</h1>
                <p className='FAQ-title-intro'>So you've decided to accept the challenge and embark on the great adventure that is Survivor!  But naturally you have questions.   Hopefully we can answer most of them right here.  You should definitely take the time to read everything, because there will be a quiz.  (No, not really, but the info is important for you to know.)  If you still have questions call Skye on her cell at 321-387-3804.</p>
            </div>
        );
    };
};

export default FAQTitle;