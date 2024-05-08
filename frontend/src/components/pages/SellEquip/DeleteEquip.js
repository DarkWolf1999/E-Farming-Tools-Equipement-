import axios from 'axios'
import React, { useEffect, useState, useContext} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import './SellEquip.css'
import { url } from '../../URL/url';


const DeleteEquip = () => {

    const history=useHistory()
    const location=useLocation()
    const item=location.state.item

    const deleteEquip=()=>{
        console.log(item.carId);
        //const url = 'http://localhost:8080'
        axios.delete(url + '/deleteEquip/'+item.carId).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                history.push('/getmyEquips')  
            }
            else {
                alert('error occured while deleting user')
            }
        })
    }
    

    return (
        <center>
            <h3>Are you sure to delete Equipement??</h3>
            <button className="btn btn-danger button-margin" onClick={deleteEquip}>Delete</button>
            <button className="btn btn-warning button-margin" onClick={()=>{history.push('/getmyEquips')}}>Cancel</button>
        </center>
    )
}

export default DeleteEquip
