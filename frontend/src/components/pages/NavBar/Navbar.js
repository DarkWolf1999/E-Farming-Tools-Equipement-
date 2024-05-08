import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory hook
import './Navbar.css';
import AdminLogin from './AdminLogin';
import logo from './logo2-removebg-preview.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const history = useHistory(); // Initialize useHistory hook

  const handleClick = () => {
    setClick(!click);
    setShowAdminLogin(false); // Close AdminLogin when clicking the menu icon
  };

  const handleLogin = () => {
    // Simulate successful login for demonstration
    // In your actual implementation, handle the login logic here
    console.log('Logged in successfully');

    // Redirect to AdminHome page after successful login
    history.push('/adminhome');
  };

  const handleAdminClick = () => {
    setClick(false); // Close mobile menu when clicking Admin button
    setShowAdminLogin(!showAdminLogin); // Toggle AdminLogin visibility
  };

  return (
    <>

      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={() => setClick(false)}>
            <img src={logo} alt="" height={100} width={100} />
            E-Farming
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => setClick(false)}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className='nav-links' onClick={() => setClick(false)}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-links' onClick={() => setClick(false)}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/SignUp' className='nav-links' onClick={() => setClick(false)}>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='#' className='nav-links' onClick={handleAdminClick}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {showAdminLogin && <AdminLogin onLogin={handleLogin} />} {/* Render AdminLogin component */}
    </>
  );
}

export default Navbar;
