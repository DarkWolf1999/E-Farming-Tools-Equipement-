import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../../Session/Session';
import { url } from '../../URL/url';

const UserContact = () => {
    const location = useLocation();
    const history = useHistory();
    const [user, setUser] = useState([]);
    const props = location.state.props;

    const { value } = useContext(UserContext);
    // Removed unused setValue

    useEffect(() => {
        loadUser();
    }, []); // Removed the empty dependency array since loadUser is not dependent on any state or props

    const loadUser = async () => {
        try {
            const result = await axios.get(url + '/getuser/' + props.userId);
            setUser(result.data.data);
            console.log(result.data.data);
        } catch (error) {
            console.error('Error loading user:', error);
            alert('Error occurred while getting user details');
        }
    };

    return (
        <center>
            <h1  style={{color:'white'}}>User Details</h1>
            <table>
                <tbody>
                    <tr><td>Name:</td><td>{user.firstName}&nbsp;{user.lastName}</td></tr>
                    <tr><td>Mobile No:</td><td>{user.mobileNo}</td></tr>
                    <tr><td>Email:</td><td>{user.email}</td></tr>
                    <tr><td>Address:</td><td>{user.address}</td></tr>
                    <tr><td>City:</td><td>{user.city}</td></tr>
                    <tr><td>Pincode:</td><td>{user.pincode}</td></tr>
                    <tr><td><button className="btn btn-danger" onClick={() => { history.push('/BuyEquip') }}>Back</button></td></tr>
                </tbody>
            </table>
        </center>
    );
}

export default UserContact;
