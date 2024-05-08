import React from 'react'
import { useState, useEffect } from 'react'
import './CardsHome.css'
import CardItem from './CardItem'
import {Imageurl,ext} from './ImageUrl'
import axios from 'axios'

function CardsHome() {
    const [allEquips, setAllEquips] = useState([])
    useEffect(() => {
        getCarDetails()
    }, [])

    const getCarDetails = () => {
  
        axios.get(Imageurl + "/getcars" ).then((response) => {
            console.log(response.data)
            const result = response.data 
            if (result.status === 'success') {
              setAllEquips(result.data)
            }
            else {
                alert('error occured while getting details')
            }
        })
    } 
    
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          

          {allEquips.map((equip) => {
            console.log(equip.carImage)
                        return(  
                          <div className='cards__items'>
                        <CardItem     
                            src={equip.carImage}
                            label='Verified'
                            modelName={equip.modelName}
                            companyName={equip.companyName}
                            price={equip.price}
                            date={equip.date}
                            city={equip.city}  
                            status={equip.status}
                            userId={equip.userId}    
                       />   
                       </div>
                       ) })}
        </div>
      </div>
    </div>
  )
}

export default CardsHome
