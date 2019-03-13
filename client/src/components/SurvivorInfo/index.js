import React, {Component} from 'react';
import SurvivorForm from '../SurvivorForm'
import './style.css';

class SurvivorInfo extends Component {

    render() {
        return (
            <div>
                <h2 className='challenge'>Do you have what it takes to become the</h2>
                <h2 className='challenge ult'>Ultimate Survivor?</h2>
                <p className='survivor-info'>Come to Skye's the Limit Studio to find out.   Just like on the real Survivor, you'll be divided into tribes, compete in challenges for reward and Immunity, make alliances, and  go to Tribal Council and cast your vote!  At STL each "Season" of Survivor lasts three non-stop, action-filled days and nights.  You'll be tested physically and mentally.  Can you outwit, outplay, and outlast all your fellow castaways?  Join us for Survivor and find out.</p>
                <SurvivorForm />
                <p className='survivor-info'>Every June and December we hold a three-day lock-in event for ages 13 - up based on the television show Survivor. For young fans of the show, it's a dream come true. For kids who've never seen the show, it's a fun adventure. To date we've played over 25 "seasons" of Survivor at Skye's the Limit!</p>
                <p className='survivor-info'>Think you have what it takes to become the sole Survivor? You'll never know until you play! Each season has room for between 14-18 players. With such a small enrollment, spaces fill up quickly and are on a first-come- first-served basis.</p>
                <p className='survivor-info'>Tuition for the three-day event is $100 and each player is given a list of a few food items to bring with them.</p>
                <p className='survivor-info'>Players remain at the studio for the duration of Survivor and are supervised by a crew of adults. Parents, family, and friends can keep track of the game by followingus on Instagram. We'll be updating throughout the game with pictures and videos of challenges, voting, and tribal councils as well as "confessionals" from the players about their strategies and reactions to what's going on.</p>
                <p className='survivor-info'>Families and friends are invited to come to the final tribal council, at 8:30 on the last evening of Survivor, to watch the jury questions, voting, and crowning of the sole survivor. Cameras are welcome! In addition, you're always free to stop by at any time and get an up-close look at what's happening.</p>
                <p className='survivor-info'>Because we can't travel to exotic locales like they do on the televised Survivor, we theme our seasons on movies, TV shows, book series, and video games that we all like. Have a look at our Past Seasons of Survivor section to check out themes we've used.</p>
                <p className='survivor-info'>While it's not at all necessary to be familiar with the theme to succeed at the game, it's always extra fun for those who are. We include characters and a story line that adds to the experience.</p>
            </div>
        )
    };
};

export default SurvivorInfo;