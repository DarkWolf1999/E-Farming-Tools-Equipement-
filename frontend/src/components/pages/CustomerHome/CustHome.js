
import React, { useState, useContext } from 'react';
import NavBar1 from '../NavBar/Navabar1/NavBar1';
import UserContext from '../../Session/Session';
import { useHistory } from 'react-router-dom';
import Home from './../Home/Home';
import './custHome.css'
import Cards from '../Home/SampleCards/Cards';


const CustHome = () => {
    const history = useHistory()
    const { value, setValue } = useContext(UserContext)
    return (
        <div>
            <NavBar1 />
            <div className=" bg-colo3">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h1 style={{color:'white'}}>Hello!!!  &nbsp;&nbsp;&nbsp;{value.data.firstName}</h1>
                <br></br>
                
            

                <center><h4 style={{color:'white'}}>Now you can buy or sell Agricultural Equipments</h4></center>
                
            </div>
            <div >
               

                </div>

            </div>
    )
   
}

export default CustHome

