import React from 'react';
import { Button } from 'react-bootstrap';
import "../../CSS/common.css";
import banner from '../../images/programming.png';
import "./header.css";

const Header = () => {
    return (
        <header id="banner" className="text-center">
            <div className="container">
                <div className="banner-area">
                    <div className="row justify-content-between">
                        <div className="col-md-4 banner-text text-left">
                            <h4>I'm Bulbul</h4>
                            <h2>Web Developer</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt rem facere
                                necessitatibus fugiat distinctio?</h6>
                            <a href="/#hero">
                                <Button className="commonBtn curtainup">Learn More</Button>
                            </a>
                        </div>
                        <div className="col-md-2 banner-scroll-btn">
                            <a href="#hero">
                                <div className="mouse_scroll">
                                    <div className="mouse">
                                        <div className="wheel"></div>
                                    </div>
                                    <div>
                                        <span className="m_scroll_arrows unu"></span>
                                        <span className="m_scroll_arrows doi"></span>
                                        <span className="m_scroll_arrows trei"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 banner-image">
                            <img className="w-100" src={banner} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;