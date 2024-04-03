import React from 'react';
import "../../CSS/common.css";
import banner from '../../images/programming.png';
import "./header.css";

const Header = () => {
    return (
        <header id="banner" className="text-center bg-cover bg-center h-screen relative z-50 text-white pb-12">
            <div className="container">
                    <div className="row justify-center">
                        <div className="col-md-4 pt-52 tracking-wide text-center">
                            <h4 className='text-xl leading-8 font-bold tracking-widest'>I'm Bulbul</h4>
                            <h2 className="text-4xl py-7 font-semibold tracking-widest">Web Developer</h2>
                            <h6 className="text-base font-normal tracking-widest text-justify pb-5">I am a Junior MERN Developer with experience building user interfaces using React, a JavaScript library for building web applications.</h6>
                            <a href="/#hero">
                                <button className="commonBtn curtainup">Learn More</button>
                            </a>
                        </div>
                        <div className="col-md-2 pt-80 mt-8">
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
                        <div className="col-md-4 pt-24">
                            <img className="w-100" src={banner} alt="Banner" />
                        </div>
                    </div>
            </div>
        </header>
    );
};

export default Header;