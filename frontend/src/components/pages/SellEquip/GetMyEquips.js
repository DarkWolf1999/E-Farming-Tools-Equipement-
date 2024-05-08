import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import NavBar1 from '../NavBar/Navabar1/NavBar1';
import EquipDetails from './EquipDetails';
import { url } from '../../URL/url';
import './SellEquip.css';

const GetMyEquips = () => {
    const history = useHistory();
    const { value } = useContext(UserContext);
    const [allDetails, setDetails] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(url + '/getequipbyuserid/' + value.data.userId);
                const result = response.data;
                if (result.status === 'success') {
                    setDetails(result.data);
                } else {
                    alert('Error occurred while getting details');
                }
            } catch (error) {
                console.error('Error fetching details:', error);
                alert('Error occurred while getting details');
            }
        };

        getDetails();
    }, [value.data.userId]); // Include value.data.userId in the dependency array

    return (
        <>
            <NavBar1 />
            <div className="bg-cl">
                <h2 style={{color:'white'}}><center>Equipment Details</center></h2>
                <div>
                    <EquipDetails items={allDetails} />
                </div>
            </div>
        </>
    );
};

export default GetMyEquips;
