import {
  fab,
  faFacebook,
  faLinkedin,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import hero from "../../images/hero.png";
import "./About.css";

const About = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="row justify-content-center section-title">
          <div className="col-md-3">
            <h3>Who I Am</h3>
            <p>Get to know me</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="hero-photo">
              <img src={hero} alt="hero"></img>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-text text-left">
              <h3>I'm Bulbul</h3>
              <p>
                I am Bulbul Ahammed Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever It has survived not only
                five centuries, but also the leap into electronic but also the
                leap into
              </p>
            </div>
            <div className="row text-left hero-text-bottom">
              <div className="col-md-6">
                <p>
                  <span>Full Name: &nbsp; </span> Bulbul Ahammed
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span>Experience: &nbsp; </span> Fresher
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span>Phone: &nbsp; </span> +8801774586852
                </p>
              </div>
              <div className="col-md-6">
                <p>mdbulbulahammed@gmail.com</p>
              </div>
            </div>
            <div className="row hero-text-button-area">
              <div className="col-md-4">
                <a className="commonBtn curtainup" href="https://drive.google.com/file/d/1nDN7fZSK_pwJcWnKHqxR9t2XoDStdlcA/view" target="_blank" rel="noreferrer">Resume</a>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="row about-social-icon">
                  <div className="col-md-3">
                    <a href="https://www.facebook.com/bulbul1ahammed/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={(fab, faFacebook)} />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="https://www.linkedin.com/in/bulbul-ahammed/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={(fab, faLinkedin)} />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="https://twitter.com/themexposer" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={(fab, faTwitterSquare)} />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#home">
                      <FontAwesomeIcon icon={(fas, faGlobe)} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
