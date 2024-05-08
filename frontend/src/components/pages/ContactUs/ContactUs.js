import React from 'react'
import Navbar from './../NavBar/Navbar';
import './ContactUs.css' 
import Footer from './../Footer/Footer';

const ContactUs = () => {
    return (
        <>
            <Navbar />

            <section class="contact">
                <div class="content">
                    <h2>Contact Us</h2>
                    <p>Get in touch with us for all your farming needs and inquiries. Our team of experts is here to assist you with crop cultivation, and agricultural advice. Reach out to us today and let's grow together!</p>
                </div>
                <div class="container">
                    <div class="contactInfo">
                        <div class="box">
                            <div class="icon"> <i className="fa fa-map-marker"></i></div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>20-21,Above Mahanagar press building,near Dainik Bhaskar,Press Complex,Indore -452 010</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon icon-phone"><i class="fas fa-phone"></i></div>
                            <div class="text">
                                <h3>Phone</h3>
                                <p>1800-123-999</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon"><i class="far fa-envelope"></i></div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>efarming@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="contactForm">
                        <form action="">
                            <h2>Send Message</h2>
                            <div class="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div class="inputBox">
                                <textarea required="required"></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div class="inputBox">
                                <input type="submit" name="" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
        <Footer/>
        </>
    )
}

export default ContactUs
