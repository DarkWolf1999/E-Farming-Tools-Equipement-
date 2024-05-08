import './SignIn.css';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
// Removed unused imports: import Navbar from './../NavBar/Navbar'; import GetUsers from './../AdminHome/GetUsers';
import { url } from './../../URL/url';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setValue } = useContext(UserContext); // Removed unused 'value' destructured from context
  const history = useHistory();

  const signinUser = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      alert("Enter valid email pattern like 'abc@gmail.com'");
      return;
    }
    if (email.length === 0) {
      alert('please enter email');
    } else if (password.length === 0) {
      alert('please enter password');
    } else {
      const data = new FormData();
      data.append('email', email);
      data.append('password', password);

      axios.post(url + '/login', data)
        .then((response) => {
          const result = response.data;
          if (result.status === 'success') {
            setValue(result);
            alert('Login Successful');
            if (result.data.role === 'admin') {
              history.push('/AdminHome');
            } else {
              history.push('/CustHome');
            }
          } else {
            alert('Login Failed, Email or password incorrect');
          }
        })
        .catch((error) => {
          console.error('Error during login:', error);
          alert('Login Failed, Please try again.');
        });
    }
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <div>
        <div className="row">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div id="button" className="row">
          <button onClick={signinUser}>Login</button>
        </div>
        <Link className="row" to="/signup">Don't have an account</Link>
        <Link className="row" to="/ChangePassword">Forgot password?</Link>
      </div>
    </div>
  );
};

export default SignIn;
