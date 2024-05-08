import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../Session/Session';
import Navbar2 from '../NavBar/Navbar2/NavBar2';
import { url } from '../../URL/url';

const AddModel = () => {
  const [modelname, setModel] = useState('');
  const [companyId, setCompanyId] = useState(0);
  const history = useHistory();
  const { value } = useContext(UserContext); // Removed setValue since it's not used
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const result = await axios.get(url + '/getcompanies');
    setCompanies(result.data.data);
    console.log(result.data.data);
  };

  const registerModel = () => {
    if (modelname.length === 0) {
      alert('Please enter equipment type'); // Corrected 'equipment type' typo
    } else {
      const data = new FormData();
      data.append('modelname', modelname);
      data.append('companyId', companyId);
      console.log(data); // Removed unnecessary string concatenation
      // const url = 'http://localhost:8080'; // Removed duplicate url declaration

      axios.post(url + '/postmodel', data).then((response) => {
        const result = response.data;
        if (result.status === 'success') {
          alert('Successfully Registered equipment'); // Corrected 'Successfully' typo
          history.push('/AdminHome');
        } else {
          alert('Failed to Add equipment'); // Corrected 'Failed' typo
        }
      });
    }
  };

  return (
    <div>
      <Navbar2 />
      <div id="loginform">
        {/* Welcome {value.data.firstName} */}
        <h2 id="headerTitle">Add Equipment Type</h2>
        <div>
          <div className="form-control">
            <select
              className="select form-control"
              onChange={(event) => {
                setCompanyId(event.target.value);
              }}
            >
              {companies.map((company, index) => (
                <option key={index} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <label>Model</label>
            <input
              type="text"
              placeholder="Enter equipment type"
              onChange={(event) => {
                setModel(event.target.value);
              }}
            />
          </div>
          <div id="button" className="row">
            <button onClick={registerModel}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
