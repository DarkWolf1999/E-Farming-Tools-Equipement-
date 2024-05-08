import React, { useState } from 'react'
import Navbar from './../NavBar/Navbar';
import './About.css';
import UjjwalImage from './Ujjwal.jpg';
import SohamImage from './Soham.jpg';
import TusharImage from './Tushar.jpg';
import RaviImage from './Ravi.jpg';
import MayurImage from './Mayur.jpg';
import Footer from '../Footer/Footer';


// const AboutUs = () => {
const ContactButton = () => {

    return (
        <>
            <Navbar />

            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Our mission is to empower farmers with the tools they need to thrive in today's agricultural landscape. By offering a diverse range of equipments, we aim to streamline farming processes, enhance productivity, and support the success of farmers across the globe</p>
            </div>


            <div class="team-section">
                <h2>Our Team</h2>
                <div class="card-container d-flex justify-content-center mt-3" id='card1'>

                    <div class="card col-lg-4">
                        <img src={UjjwalImage} alt="Ujjwal" class="card-img-top"/>
                        <div class="card-body">
                            <h4 class="card-title">Ujjwal Patil</h4>
                            <p class="card-text">ujjwalpatil842@gmail.com</p>
                            <p><button class="card-button" id='btn1'></button></p>
                            
                        </div>
                    </div>

                    <div class="card col-lg-4">
                        <img src={SohamImage} alt="Soham" class="card-img-top" />
                        <div class="card-body">
                            <h4 class="card-title">Soham Waje</h4>
                            <p class="card-text">sohammwaje@gmail.com</p>
                            <p><button class="card-button" id='btn2'></button></p>
                        </div>
                    </div>

                    <div class="card col-lg-4">
                        <img src={MayurImage} alt="Mayur" class="card-img-top" />
                        <div class="card-body">
                            <h4 class="card-title">Mayur Raut</h4>
                            <p class="card-text">rautmayur2020@gmail.com</p>
                            <p><button class="card-button" id='btn3'></button></p>
                        </div>
                    </div>


                </div>

                <div class="card-container d-flex justify-content-center mt-3" id='card2'>

                    <div class="card col-lg-6">
                        <img src={RaviImage} alt="Ravindra" class="card-img-top" />
                        <div class="card-body">
                            <h4 class="card-title">Ravindra Pund</h4>
                            <p class="card-text">ravindrapund7@gmail.com</p>
                            <p><button class="card-button" id='btn4'></button></p>
                        </div>
                    </div>

                    <div class="card col-lg-6">
                        <img src={TusharImage} alt="Tushar" class="card-img-top" />
                        <div class="card-body">
                            <h4 class="card-title">Tushar Chaudhari</h4>
                            <p class="card-text">tusharchaudhari641@gmail.com</p>
                            <p><button class="card-button" id='btn5'></button></p>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

            <Footer />
        </>
    )
}

// export default AboutUs
export default ContactButton
