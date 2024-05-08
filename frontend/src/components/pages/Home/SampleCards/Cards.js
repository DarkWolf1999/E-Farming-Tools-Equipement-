import React from 'react';
import CardItem1 from './CardItem1';

import './Cards.css';
import cultivator from './cultivator.png'
import harrow from './harrow.jpg'
import grasscutter from './grass cutter.jpg'
import threasher from './threasher.jpg'
import tractor from './tractor.jpg';



function Cards() {
  return (
    <div classNameName='cards '>
      {/* <h1>Car Gallery</h1> */}
      {/* <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem1
              src='D:\E-Farming\frontend\src\components\pages\Home\SampleCards\cultivator.png'
              text="Explore the All Finest SUV's
                    we have for you"
              label='SUV'
            />
            <CardItem1
              src='images/Sedan.jpg'
              text="Travel through cities in first class Sedan "
              label='Sedan'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem1
              src='images/hatchback.jpg'
              text="As you are considering hatchback, we assume that you are upgrading from two to four-wheeler"
              label='HatchBack'
            />
            <CardItem1
              src='images/mini.jpg'
              text="As the name suggests, a mini car is made for all basic needs that a human wants "
              label='Mini' />
          </ul>
        </div>
      </div> */}

      <div className="container">
        <h1 className="soham">Our Products</h1>
        <div className="row">
          {/* <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img className="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zCB7oC2mc0rkoj6-Q3kC730Z-6pMWQAekg&usqp=CAU"
                  alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Harvester</h3>
                  <p></p>

              </div>
            </div>
          </div> */}
          <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src={tractor} alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Tractor</h3>
                  <p></p>

              </div>
            </div>
          </div>
          {/* <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src="https://5.imimg.com/data5/ZH/WB/RD/SELLER-4275316/mini-tractor-trailer-500x500.jpg"
                  alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Tractor trailer</h3>
                  <p></p>

              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/UM/UC/BA/15062134/agricultural-plough.webp"
                  alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Plough</h3>
                  <p></p>

              </div>
            </div>
          </div> */}
          {/* <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307116228/QH/UL/SR/8641833/5-5feet-tractor-rotavator.JPG"
                  alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Rotavator</h3>
                  <p></p>

              </div>
            </div>
          </div> */}
          <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src={harrow} alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Rotary power Harrow</h3>
                  <p></p>

              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src={cultivator} alt=""
                 style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Cultivator</h3>
                  <p></p>

              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src={threasher} alt="" style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Tresher</h3>
                  <p></p>

              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card text-center">
              <div className="card-body">
                <img src={grasscutter} alt=""style={{ height: '200px', width: '200px', borderRadius: '50%' }}/>
                  <h3>Grass Cutter</h3>
                  <p></p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cards
