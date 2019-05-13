import React, { Component } from 'react';
import AboutTitle from '../components/AboutTitle';
import AboutMission from '../components/AboutMission';
import AboutStaffCard from '../components/AboutStaffCard';

class About extends Component {
    state = {
        skye: {
            image: 'https://static.wixstatic.com/media/3c9dac_d18e00b4a71946308e97fea11aa7b439~mv2.jpg/v1/fill/w_155,h_305,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_d18e00b4a71946308e97fea11aa7b439~mv2.webp',
            alt: 'Skye Dumoulin',
            name: 'Skye Dumoulin',
            roles: 'Owner, Creative Director, Voice/Acting Coach'
        },
        giana: {
            image: 'https://static.wixstatic.com/media/3c9dac_d9f6d6074e7e4afdafc9a4a51fd395de~mv2.jpg/v1/fill/w_155,h_305,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_d9f6d6074e7e4afdafc9a4a51fd395de~mv2.webp',
            alt: 'Giana Blazquez',
            name: 'Giana Blazquez',
            roles: 'Choreographer, Teaching Artist'
        },
        aria: {
            image: 'https://static.wixstatic.com/media/3c9dac_c34c38282e96466bac3b4dcf19ac6d62~mv2.jpg/v1/fill/w_155,h_305,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_c34c38282e96466bac3b4dcf19ac6d62~mv2.webp',
            alt: 'Aria Houston',
            name: 'Aria Houston',
            roles: 'Intern, Choreographer, Assistant Teaching Artist'
        },
        caroline: {
            image: 'https://static.wixstatic.com/media/3c9dac_aea80369204c4638b371315661bcc89a~mv2.jpg/v1/fill/w_155,h_305,al_c,q_80,usm_0.66_1.00_0.01/3c9dac_aea80369204c4638b371315661bcc89a~mv2.webp',
            alt: 'Caroline Lebreche',
            name: 'Caroline Lebreche',
            roles: 'Dance Choreographer, Visiting Teaching Artist'
        }
    };

    render(){
        return(
            <div className='container'>
                <AboutTitle />
                <AboutMission />
                <div className='staff-section'>
                    <AboutStaffCard staff={this.state.skye} side='about-left' />
                    <AboutStaffCard staff={this.state.giana} side='about-right' />
                    <AboutStaffCard staff={this.state.aria} side='about-left' />
                    <AboutStaffCard staff={this.state.caroline} side='about-right' />
                </div>
            </div>
        );
    };
};

export default About;