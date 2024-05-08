import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Adminhome.css';
import NavBar2 from '../NavBar/Navbar2/NavBar2';
import { useHistory } from 'react-router-dom';
import { url } from './../../URL/url';

const Details = ({ items, title }) => {
    return (
        <div className="container">
            <div><h2 style={{color:'white'}}>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive table-user">
                <thead>
                    <tr>
                        <th>Company Id</th>
                        <th>Model Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {
                            return (
                                <tr key={item.modelId}>
                                    <td>{item.companyId}</td>
                                    <td>{item.modelId}</td>
                                    <td>{item.modelname}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const GetAllModel = () => {
    const [allDetails, setDetails] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = () => {
        axios.get(url + '/getmodels').then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                setDetails(result.data);
            } else {
                alert('Error occurred while getting details');
            }
        });
    }

    return (
        <div>
            <NavBar2 />
            <div className="bg-colo3">
                <div style={{ display: 'flex' }}>
                    <div className="user-table">
                        <h2 style={{ color: 'white' }}><center>All Equipment Type</center></h2>
                        <div>
                            <Details items={allDetails} title="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetAllModel;
