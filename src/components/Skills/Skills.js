import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import css from '../../images/css3.png';
import html from '../../images/html5.png';
import js from '../../images/js.png';
import mongoDB from '../../images/mongo-db.png';
import nodeJS from '../../images/node-js.png';
import reactJS from '../../images/React.png';
import './skills.css';
const Service = () => {
    return (
        <section id="Skills">
            <div className="container">
                <div className="row justify-content-center section-title">
                    <div className="col-md-3">
                        <h3>My Skills</h3>
                        <h4>Get to know my skills</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="skills-area">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="skills-left">
                                        <div className="row justify-content-center">
                                            <div className="col-md-4">
                                                <img src={html} alt="Html5" />
                                            </div>
                                            <div className="col-md-8 progressbar">
                                                <ProgressBar
                                                    width="400px"
                                                    height="10px"
                                                    rect
                                                    fontColor="gray"
                                                    percentage="95"
                                                    rectPadding="1px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    trackBorderColor="grey"
                                                />
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-4">
                                                <img src={js} alt="Html5" />
                                            </div>
                                            <div className="col-md-8 progressbar">
                                                <ProgressBar
                                                    width="400px"
                                                    height="10px"
                                                    rect
                                                    fontColor="gray"
                                                    percentage="75"
                                                    rectPadding="1px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    trackBorderColor="grey"
                                                />
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-4">
                                                <img src={mongoDB} alt="Html5" />
                                            </div>
                                            <div className="col-md-8 progressbar">
                                                <ProgressBar
                                                    width="400px"
                                                    height="10px"
                                                    rect
                                                    fontColor="gray"
                                                    percentage="70"
                                                    rectPadding="1px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    trackBorderColor="grey"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skills-right">
                                        <div className="row justify-content-center">
                                            <div className="col-md-4">
                                                <img src={css} alt="Html5" />
                                            </div>
                                            <div className="col-md-8 progressbar">
                                                <ProgressBar
                                                    width="400px"
                                                    height="10px"
                                                    rect
                                                    fontColor="gray"
                                                    percentage="95"
                                                    rectPadding="1px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    trackBorderColor="grey"
                                                />
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-4">
                                                <img src={nodeJS} alt="Html5" />
                                            </div>
                                            <div className="col-md-8 progressbar">
                                                <ProgressBar
                                                    width="400px"
                                                    height="10px"
                                                    rect
                                                    fontColor="gray"
                                                    percentage="70"
                                                    rectPadding="1px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    trackBorderColor="grey"
                                                />
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-4">
                                                <img src={reactJS} alt="Html5" />
                                            </div>
                                            <div className="col-md-8 progressbar">
                                                <ProgressBar
                                                    width="400px"
                                                    height="10px"
                                                    rect
                                                    fontColor="gray"
                                                    percentage="77"
                                                    rectPadding="1px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    trackBorderColor="grey"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;