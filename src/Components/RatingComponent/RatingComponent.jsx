import React from 'react';
import "./RatingComponent.css"
import reactionIcon from "../../images/icon-reaction.svg"
import memoryIcon from "../../images/icon-memory.svg"
import verbalIcon from "../../images/icon-verbal.svg"
import visualIcon from "../../images/icon-visual.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RatingComponent = () => {
    return (
        <div className='rc'>
            <div className="left-section">
                <div className="rc-title">Your Result</div>
                <div className="rc-score">
                    <span className="score">76</span>
                    <span className="total-score">of 100</span>
                </div>
                <div className="rc-performance">Great</div>
                <div className="rc-achievement">You scored higher than 64% people who have taken these tests.</div>
            </div>
            <div className="right-section">
                <div className="section-container">
                    <div className="content-title">Summary</div>
                    <div className="stats">
                        <div className="stats-info reaction">
                            <span className="name">
                                <img src={reactionIcon} alt="" />
                                Reaction
                            </span>
                            <span className="value"><span>80</span> / 100</span>
                        </div>
                        <div className="stats-info memory">
                            <span className="name">
                                <img src={memoryIcon} alt="" />
                                Memory
                            </span>
                            <span className="value"><span>92</span> / 100</span>
                        </div>
                        <div className="stats-info verbal">
                            <span className="name">
                                <img src={verbalIcon} alt="" />
                                Verbal
                            </span>
                            <span className="value"><span>61</span> / 100</span>
                        </div>
                        <div className="stats-info visual">
                            <span className="name">
                                <img src={visualIcon} alt="" />
                                Visual
                            </span>
                            <span className="value"><span>72</span> / 100</span>
                        </div>
                    </div>
                    <button onClick={e => toast.info("I don't do anything yet")} className="continue-btn">Continue</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default RatingComponent;
