import emailjs from 'emailjs-com';
import React from 'react';
import "../../CSS/common.css";
import contact_img from '../../images/message.png';
import './contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_55nf6j3', 'template_ukk5w3p', e.target, 'user_ZoNpuQvvNi714zxQTTSGt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div id="contact-area">
            <div className="container">
                <div className="row justify-content-center section-title">
                    <div className="col-md-3">
                        <h3>Contact</h3>
                        <p>Connect With me</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-10 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-10 pt-3 mx-auto">
                                    <button className="commonBtn curtainup" value="Send Message">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src={contact_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;

