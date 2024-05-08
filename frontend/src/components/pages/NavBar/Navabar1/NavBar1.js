import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../Session/Session';
import './NavBar1.css';

function NavBar1() {
  const [click, setClick] = useState(false);
  // Removed unused 'button' state
  // const [button, setButton] = useState(true);
  const { value } = useContext(UserContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Removed unused 'showButton' function and related code

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/CustHome' className='navbar-logo' onClick={closeMobileMenu}>
            {value && value.data && `${value.data.firstName} ${value.data.lastName}`}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/SellEquip' className='nav-links' onClick={closeMobileMenu}>Sell Equipments</Link>
            </li>

            <li className='nav-item'>
              <Link to='/BuyEquip' className='nav-links' onClick={closeMobileMenu}>Buy Equipments</Link>
            </li>

            <li className='nav-item'>
              <Link to='/EditProfile' className='nav-links' onClick={closeMobileMenu}>Edit Profile</Link>
            </li>

            <li className='nav-item'>
              <Link to='/viewProfile' className='nav-links' onClick={closeMobileMenu}>View Profile</Link>
            </li>

            <li className='nav-item'>
              <Link to='/GetMyEquips' className='nav-links' onClick={closeMobileMenu}>List My Equipments</Link>
            </li>

            <li className='nav-item'>
              <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>Logout</Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar1;
