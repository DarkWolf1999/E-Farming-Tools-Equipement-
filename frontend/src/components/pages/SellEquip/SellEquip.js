import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar1 from './../NavBar/Navabar1/NavBar1';
import UserContext from './../../Session/Session';
import { url } from './../../URL/url';

const Sellequip = () => {
  const { value, setValue } = useContext(UserContext);
  const [companyId, setCompanyId] = useState('');
  const [userId, setUserId] = useState('');
  const [modelId, setModelId] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [equipImage, setEquipImage] = useState('');
  const [companies, setCompanies] = useState([]);
  const [models, setModels] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const result = await axios.get(url + '/getcompanies');
    setCompanies(result.data.data);
    setUserId(value.data.userId);
    console.log(result.data.userId);
  };

  const loadModels = async (e) => {
    const cid = e.target.value;
    setCompanyId(cid);
    const result = await axios.get(url + '/getmodels');
    setModels(result.data.data);
    console.log(result.data);
  };

  const sellequip = () => {
    if (price.length === 0) {
      alert('Enter Price');
    } else if (color.length === 0) {
      alert('Enter equip Color');
    } else if (date.length === 0) {
      alert('Enter Date');
    } else if (city.length === 0) {
      alert('Enter city');
      // } else if (equipImage.length === 0) {
      //   alert('Enter state');
    } else {
      const data = new FormData();
      data.append('companyId', companyId);
      data.append('userId', userId);
      data.append('modelId', modelId);
      // data.append('fuelType', fuelType);
      data.append('price', price);
      data.append('color', color);
      data.append('date', date);
      data.append('city', city);
      // data.append('kmDriven', kmDriven);
      // data.append('equipImage', equipImage);
      console.log(value.data);

      axios.post(url + '/postequip', data).then((response) => {
        const result = response.data;
        if (result.status === 'success') {
          alert('equip Added Sucesssfully');
          history.push('/CustHome');
        } else {
          alert('Error While Adding Data');
        }
      });
    }
  };

  return (
    <>
      <NavBar1 />
      <div className=" bg-colo3">
        <h1 style={{ color: 'white' }}>Sell Equipment Page</h1>
        <div>
          <div className="col-md-3 ">
            <label>Select Companies</label>
            <select onChange={loadModels} className="form-control">
              {companies.map((company, index) => (
                <option key={index} value={company.id}>{company.name}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3 ">
            <label>Select Models</label>
            <select
              onChange={(event) => {
                setModelId(event.target.value);
              }}
              className="form-control">
              {models.map((model, index) => (
                <option key={index} value={model.modelId}>{model.modelname}</option>
              ))}
            </select>
          </div>

          {/* <div className="col-md-3 ">
            <label>Fuel Type</label>
            <select
              onChange={(event) => {
                setFuelType(event.target.value);
              }}
              className="form-control">
              <option value='Petrol'>Petrol</option>
              <option value='Diesel'>Diesel</option>
              <option value='CNG'>CNG</option>
              <option value='Electric'>Electric</option>
            </select>
          </div> */}

          <div className="col-md-3">
            <label>Price</label>
            <input
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              placeholder="Enter Price"
              className="form-control input-maargin"
              type="number"
            />
          </div>
          {/* <div className="col-md-3 ">
            <label>KMs Driven</label>
            <input
              onChange={(event) => {
                setKmDriven(event.target.value);
              }}
              placeholder="enter KMs driven"
              className="form-control input-maargin"
              type="number"
            />
          </div> */}
          <div className="col-md-3 ">
            <label>Color</label>
            <input
              onChange={(event) => {
                setColor(event.target.value);
              }}
              placeholder="enter vehicle color"
              className="form-control input-maargin"
              type="text"
            />
          </div>
          <div className="col-md-3 ">
            <label>City</label>
            <input
              onChange={(event) => {
                setCity(event.target.value);
              }}
              placeholder="Enter City"
              className="form-control input-maargin"
              type="text"
            />
          </div>
          <div className="col-md-3 ">
            <label>Date</label>
            <input
              onChange={(event) => {
                setDate(event.target.value);
              }}
              className="form-control input-maargin"
              type="Date"
            />
          </div>
          <div className="col-md-3 ">
            <label>equip Image</label>
            <input
              onChange={(event) => {
                setEquipImage(event.target.files[0]);
              }}
              className="form-control input-maargin"
              type="file"
            />
          </div>

          <div className="col-md-3 ">
            {/* <div className="btn btn-warning input-maargin">
              <Link to='/kyc'>Upload Kyc </Link>
            </div> */}
            <button onClick={sellequip} className="btn btn-success input-maargin">
              Submit equip
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sellequip;
