import React from "react";
import "./Footer.css";
import logo from "./logo2.jpg"; // import your logo image here

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-section mt-5">
        <h5>E-Farming</h5>
        <img src={logo} alt="logo" className="footer-logo" />
        <p>A service that provides farming equipments</p>
      </div>
      <div className="footer-section mt-5">
        <h5>Contact Us</h5>
        <ul className="list-unstyled">
          <li className="address">Address: 20-21,Above Mahanagar press building,near Dainik Bhaskar,Press Complex,Indore -452 010</li>
          <li>Email: efarming@gmail.com</li>
          <li>Phone: 1800-123-999</li>
        </ul>

      </div>
      <div className="footer-section mt-5">
      <h5>Follow Us</h5>
            <div className="icon_container">
              <div className="icon">
                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
              </div>
              <div className="icon">
                <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
              </div>
              <div className="icon">
                <a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
              </div>    
            </div>
      </div>
    </div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
</>
  );
};

export default Footer;
