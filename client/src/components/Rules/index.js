import React, {Component} from 'react';
import './style.css';

class Rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <p className='rules-intro'>Please carefully read ALL the rules of STL Survivor. You will be expected to follow these rules. We will ask you to sign a contract prior to the start of the game to ensure that you have read and understand the rules and that you agree to follow them. If you do not, you may be removed from the game at the Producers’ discretion.</p>
                <p className='rules-intro'>The EXECUTIVE PRODUCERS of Survivor:</p>
                <ul>
                    <li>Skye (Jeff Probst)</li>
                    <li>Giana</li>
                </ul>
                <p className='rules-intro'>Their word is LAW.</p>
                <div class="accordion" id="accordionRules">
                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                HOW THE CAMERA CREWS WILL AFFECT YOU:
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionRules">
                            <div class="card-body">
                                <ul>
                                    <li>The camera crews will be taping challenges, conversations, confessionals, tribal councils, etc. Just ignore the cameras and speak freely. Nothing you say will be revealed to another player.</li>
                                    <li>Periodically, a crewmember will pull you aside for a confessional. You may discuss anything that’s on your mind at the time. Please answer openly any questions you are asked.This is your chance to dish!</li>
                                    <li>You may request a confessional if you have something urgent to get off your chest. The crew will do its best to accommodate you but please be aware that due to the production/challenge schedule there may be times when we are unable to immediately honor your request. We will get to you as soon as possible however.</li>
                                    <li>You may speak freely to any producer/crew member without fear that it will get back to anyone in the game. Please be candid and open during your taped confessionals. Our filmed footage and pictures will be uploaded to our Instagram account so family and friends can keep track of the action and happenings in the game in real time. Our Instagram is STLSURVIVOR so follow us! Parents PLEASE NOTE that when things get hectic we may not update as often as we do when things are less hectic. Also, because of lower lighting we are less likely to post footage of outside challenges at night.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    GENERAL INFORMATION: 
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionRules">
                            <div class="card-body">
                                <ul>
                                    <li>OFF LIMITS AREAS – Will be clearly marked. Obviously, they are off-limits. Seriously. We mean it.</li>
                                    <li>FOOD- You will be asked to bring in a specific food item to stock our food pantry. If you are feeling generous and want to bring extra food items that aren't on your list, we will greatly appreciate it.  If you wish to bring us something homemade in addition to the items on your list, we will be incredibly excited and probably hope that you win.  And PLEASE bring your food items. We don’t want Survivors resorting to cannibalism. That is frowned upon in most societies.</li>
                                    <li>MEDICAL ISSUES- We will always have a first aid kit standing by to treat minor injuries that may arise with conventional bandages, gauze, alcohol wipes, and liquid bandages. If your injury/illness is considered severe, you will be removed from the game and given treatment. What constitutes being severe enough to be removed from the game? Here is the rule: If you are able to be treated right there either at the challenge or in your camp to the producers’ satisfaction, you will remain in the game. If the illness/injury warrants us bringing you into Command Central to treat you, if you need to be provided with food in order to be well enough to continue, or you need outside medical attention such as stitches you will be removed from the game in order to receive the attention you need. We will make every effort to ensure that you remain in the game; however we must put your safety and well-being first.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingEight">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    DURING THE GAME:
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionRules">
                            <div class="card-body">
                                <ul>
                                    <li>TREE MAIL – You will receive important notices about upcoming events via tree mail. Each team will have its own tree mail basket.</li>
                                    <li>CHALLENGES- Expect a wide variety of challenges. Some physical, some mental, some endurance, many a combination of these. You will get dirty, wet, sticky, and probably worse. Plan your clothing accordingly. Give everything your best shot! You never know what you may be a star at. In the case of a close finish, the producers will discuss amongst themselves what each of them saw and come to a decision. The producers’ word is final.</li>
                                    <li>TRIBAL COUNCIL – Tribes will be voting members off during tribal council. You may NOT vote for yourself. You MUST vote. In the event of a tie, there will be a re-vote. The two players who tied will be the only ones you may vote for. Those two players will not vote. If the re-vote ends in a tie, we will declare a deadlock. Deadlock rules will be in effect. Deadlock rules are different every time we play, so we’ll let that be a surprise.</li>
                                    <li>Please respect the sanctity of tribal council. Someone will be leaving the game forever, so please don’t use this as a time to discuss High School Musical 3. You MUST wait for Jeff to call upon you before you speak. Let the drama play out! Also, be straight with your answers in Tribal Council.   If you're evasive or refuse to answer, it's likely that you will be ignored by Jeff in subsequent Tribal Councils.  No one likes to be ignored!  So speak up and give us some dirt! Don't be afraid to call people out.  We love that.</li>
                                    <li>YOUR BAG – You will keep all your belongings that you may take into the game with you inside your bag. You’ll bring your bag and everything in it to ALL challenges and ALL Tribal Councils. PLEASE take special care during challenges to have everything securely inside your bag. You never know when a shoeless hobo will think there are free shoes lying around. I'm not kidding. Just ask Tom.</li>
                                    <li>BUFFS- Please turn in your buffs at the end of the game. We will use them again for the next Survivor. (After we wash them of course... EWWW!)</li>
                                    <li>RULEBREAKING- Will have consequences.  (Dun dun DUNNNNN)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingNine">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    IF YOU ARE VOTED OUT:
                                </button>
                            </h5>
                        </div>
                        <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionRules">
                            <div class="card-body">
                                <ul>
                                    <li>At no time may anyone who has been voted out of the game have any contact with anyone still in the game unless at the express direction of the executive producers. This includes but is not limited to: talking to them, sneaking them food or information, influencing them in any way, asking them about their plans or future votes, etc. Your actions may result in that player being ejected from the game and you being sent home.</li>
                                    <li>When you are voted off you must bring Jeff your torch, take your things and leave the tribal council area immediately. A crew member will escort you to an area where you will make your final confessional. (We will give you a little while to compose yourself if necessary.)</li>
                                    <li>If you are voted off before the jury begins you will move into the “Ponderosa” where you will have access to all your personal belongings, food, a TV/DVD player, and relative comfort. You WILL be asked by the producers to assist with the game so be ready.</li>
                                    <li>If you are voted off AFTER the Jury begins, you will become a part of the Jury and move into Ponderosa  where you will have access to all your personal belongings, food, a TV/DVD player, and relative comfort. The Jury will have specific duties and rules as listed below.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    THE JURY
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionRules">
                            <div class="card-body">
                                <ul>
                                    <li>Any Juror who breaks these rules will be removed from the Jury immediately.</li>
                                    <li>The jury will attend all tribal councils. During tribal council the jury may NOT interact with the players still in the game. You may not speak to them and they may not speak to you. You are there only to observe and to gather information that you will use to make your final decision.</li>
                                    <li>Jury members may discuss or deliberate about the players still in the game. However, Jurors may not reveal to any other juror who they plan to vote for. Jurors may not attempt to persuade or influence other jurors to vote a certain way. While it is only natural that you will talk about the game, please make your own decisions.</li>
                                    <li>During the Final Tribal Council, each Juror will have an opportunity to ask questions of the Final players. That will be your only opportunity to speak during Tribal Council.</li>
                                    <li>Jurors MAY NOT talk while the final voting is going on.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingEleven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    FINAL TRIBAL COUNCIL
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionRules">
                            <div class="card-body">
                                <ul>
                                    <li>Family and friends are invited to join us for the final tribal council and announcement of the winner. We are anticipating that this will occur at around 8:30pm on the final day. Please tell your family and friends that due to the unpredictable nature of the game that it is possible that we could be running a little late so please be prepared if that should happen. We will try to entertain them until tribal begins.</li>
                                    <li>Cameras are welcome!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Rules;