import React, {Component} from 'react';
import API from '../utils/API';
import SurvivorTitle from '../components/SurvivorTitle';
import SurvivorCarousel from '../components/SurvivorCarousel';
import SurvivorInfo from '../components/SurvivorInfo';

class Survivor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [{
                src: 'https://static.wixstatic.com/media/3c9dac_14ea2c8eee1a47a7a6d335334a746eb0~mv2.png/v1/fill/w_321,h_465,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_14ea2c8eee1a47a7a6d335334a746eb0~mv2.webp'
            },
            {
                src: 'https://static.wixstatic.com/media/3c9dac_07b1dacfeba44f01a28039753234c265~mv2.png/v1/fill/w_321,h_465,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_07b1dacfeba44f01a28039753234c265~mv2.webp'
            },
            {
                src: 'https://static.wixstatic.com/media/3c9dac_bc9b307dd310497a9505617db8aedcdb~mv2.png/v1/fill/w_321,h_465,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_bc9b307dd310497a9505617db8aedcdb~mv2.webp'
            }],
            survivor: {
                theme: '',
                startDate: '',
                endDate: '',
                tuition: ''
            }
        };
    };

    getOrdinal = (num) => {
        let ordinals = ['th', 'st', 'nd', 'rd'];
        return (Math.floor(num / 10) === 1 || num % 10 > 3) ? ordinals[0] : ordinals[num % 10];
    }

    componentDidMount = () => {
        API.getContent().then(content => {
            console.log(content);
            let {title, startDate, endDate, tuition} = content.data.survivors[0];
            if (startDate && endDate) {
                startDate = new Date(startDate)
                endDate = new Date(endDate)
                console.log('Survivor loaded');
                let sameMonth = startDate.getMonth() === endDate.getMonth();
                startDate = Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' }).format(startDate) + this.getOrdinal(startDate.getDate());
                endDate = Intl.DateTimeFormat('en-us', sameMonth ? { day: 'numeric' } : { month: 'short', day: 'numeric' }).format(endDate) + this.getOrdinal(endDate.getDate());
            }
            this.setState({
                survivor: {
                    theme: title,
                    startDate: startDate,
                    endDate: endDate,
                    tuition: '$' + (tuition / 100).toFixed(2)
                }
            });
        });
    };

    render() {
        return (
            <div className='container'>
                <SurvivorTitle survivor={this.state.survivor}/>
                <SurvivorCarousel images={this.state.images}/>
                <SurvivorInfo />
            </div>
        )
    };

};

export default Survivor;