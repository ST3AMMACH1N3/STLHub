import React, {Component} from 'react';
import './style.css';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <div class="accordion" id="accordionQuestions">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                What do I bring?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionQuestions">
                            <div class="card-body">
                               <p>Everyone's first question!  So here's the info.   Basically you're going to have two bags... your "Game" bag (which is a small bag or small backpack) and your "Non-Game" bag (Big as you like... well, within reason!).  Your "Game Bag" comes with you into the game and you keep it with you at all times.</p>
                               <p>
                                    YOU MUST BRING WITH YOU INTO THE GAME (This is what your "Game" bag should contain):
                                    <ul>
                                        <li>Sunscreen</li>
                                        <li>Your own medications that you take regularly (and feminine hygiene products if you are a girl and happen to need them at that time)</li>
                                        <li>Clothes: 2 shirts- one long or short sleeve(depending on the weather), one short sleeve (wear one, put one in your bag), a jacket or hoodie, a hat, one pair of shorts and one pair of pants - or a second pair of shorts instead of pants if it's very hot (wear one, put one in your bag), an extra pair of socks, an extra set of underwear, bathing suit (optional, it's your call.  Some of the challenges might involve getting wet), pair of gloves (optional, sometimes it's cold when we play).</li>
                                        <li>ALL SURVIVORS MUST BRING a large water bottle with your name clearly marked on it.</li>
                                    </ul>
                               </p>
                               <p>
                                    YOU MAY BRING INTO THE GAME ONE LUXURY ITEM IN YOUR GAME BAG. LUXURY ITEMS INCLUDE:
                                    <ul>
                                        <li>Journal & pen/pencil (This is the smart thing to bring. It's most likely to help you in the game. Hint, hint, strong strong hint.)</li>
                                        <li>Book to read</li>
                                        <li>Playing cards</li>
                                    </ul>
                               </p>
                               <p>
                                    YOU CANNOT BRING INTO THE GAME (Don't put these in your Game Bag.  You can have them in your non-Game Bag though):
                                    <ul>
                                        <li>Cell phones</li>
                                        <li>Gum/food</li>
                                        <li>Watches</li>
                                    </ul>
                               </p>
                               <p>
                                   IF YOU ARE VOTED OUT YOU MAY HAVE (This is what your "Non-Game" Bag should contain):
                                   <ul>
                                       <li>A large zip-loc bag with any personal hygiene items (toothbrush, etc.), medicine, etc. that should be clearly marked with your name. You may not take this into the game but we will return it to you if you are voted out so that you may have it with you for the duration remaining.</li>
                                       <li>Pillow, blanket, sleeping bag CLEARLY marked with your name and in a separate bag.</li>
                                       <li>Gum/food</li>
                                       <li>Extra clothes</li>
                                       <li>Movies/books (We have a DVD player so bring your favorite films to share)</li>
                                       <li>Games</li>
                                       <li>Cell phones</li>
                                       <li>Watches</li>
                                       <li>Toothbrush/hairbrush etc.</li>
                                   </ul>
                               </p>
                               <p>*PLEASE do NOT bring ANY items of a valuable nature. We are not responsible for lost items. Upon arrival if you have a wallet or cell phone, Etc. place it into your zip-loc bag and we will hang onto it in a secure location.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What if I get voted off?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionQuestions">
                            <div class="card-body">
                                <p>If you are voted off early in the game you will be put to work on the crew setting up challenges and lots more.  Also you'll be much more comfy than the people still playing!  Think of a giant really fun slumber party.   If you are voted off later, you will part of the Jury.  More on that in the RULES section.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How do you play?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionQuestions">
                            <div class="card-body">
                                <p>Ever watch Survivor on TV?  It's JUST like that.  Seriously.  Except we squish it all down into just a few days.  You'll be really tired when you're done but it's the most fun thing EVER!   Warning:  people who play Survivor become obsessed with it!  Your family and friends will be sick of you talking about it afterwards.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Will we be filmed like on TV?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionQuestions">
                            <div class="card-body">
                                <p>Indeed you will!  More on that in the rules section.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Are there rules?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionQuestions">
                            <div class="card-body">
                                <p>SO glad you asked!  Here's the Official Rules section.  It's VERY important that you read and understand the rules because we want everyone to know that they will be safe and that things will be as fair as we can make them.  You will be signing a contract agreeing to play by these rules when you arrive for check-in so read them!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Questions;