import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom';
import './SellEquip.css'

const EquipDetails = ({ items, title }) => {
    const history = useHistory();
    console.log(items);

    return (
        <div className="container">
            <div><h2  style={{color:'white'}}>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive table-user">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>City</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.companyName}</td>
                                    <td>{item.modelName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.date}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        <button className="btn btn-warning list-btn"
                                            onClick={() => { history.push('/SellEquip', { item: item }) }}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger list-btn"
                                            onClick={() => { history.push('/deleteEquip', { item: item }) }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EquipDetails;
