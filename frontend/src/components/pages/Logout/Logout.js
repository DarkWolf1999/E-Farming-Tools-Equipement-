import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import './Logout.css';
import SignIn from './../SignIn/SignIn';

const Logout = () => {
    const history = useHistory();
    const {value,setValue} = useContext(UserContext)
    
    return (
        <div className="bg-colo1">
            <h1>Thank You !!</h1>
            <h3>Visit Again...... </h3>
            <a href="/"><button className='btn btn-success' >Home</button></a>
        </div>
    )
    setValue(null)
}
export default Logout