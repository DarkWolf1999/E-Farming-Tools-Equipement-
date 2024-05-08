import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminHome from './components/pages/AdminHome/AdminHome';
import BuyEquip from './components/pages/BuyEquip/BuyEquip';
import ChangePassword from './components/pages/ChangePassword/ChangePassword';
import CustHome from './components/pages/CustomerHome/CustHome';
import EditProfile from './components/pages/EditProfile/EditProfile';
import Error from './components/pages/ErrorPage/Error';
import Home from './components/pages/Home/Home';
import SellEquip from './components/pages/SellEquip/SellEquip';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import UserContext from './components/Session/Session';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/pages/Logout/Logout';
import GetUsers from './components/pages/AdminHome/GetUsers';
import AddCompany from './components/pages/AdminHome/AddCompany';
import AddModel from './components/pages/AdminHome/AddModel';
import AboutUs from './components/pages/AboutUs/AboutUs';
import ContactUs from './components/pages/ContactUs/ContactUs';
import UserContact from './components/pages/BuyEquip/UserContact';
import getmyEquips from './components/pages/SellEquip/GetMyEquips';
import DeleteEquip from './components/pages/SellEquip/DeleteEquip';
import DeleteUser from './components/pages/AdminHome/DeleteUser';
import GetAllCompany from './components/pages/AdminHome/GetAllCompany';
import GetAllModel from './components/pages/AdminHome/GetAllModel';
import ViewProfile from './components/pages/Home/ViewProfile';
// import BuyEquip from './components/pages/BuyEquip/BuyEquip';
import buyEquip from './components/pages/BuyEquip/BuyEquip';
// import UserKyc from './components/pages/AdminHome/UserKyc';

function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <Router>
        <Switch>
          <UserContext.Provider value={{ value, setValue }}>
            <Route path='/' exact component={Home} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/CustHome' component={CustHome} />
            <Route path='/SellEquip' component={SellEquip} />
            <Route path='/buyEquip' component={buyEquip} />
            <Route path='/Adminhome' component={AdminHome} />
            <Route path='/getusers' component={GetUsers} />
            <Route path='/addcompany' component={AddCompany} />
            <Route path='/addmodel' component={AddModel} />
            <Route path='/deleteUser' component={DeleteUser} />
            <Route path='/getallcompany' component={GetAllCompany} />
            <Route path='/getallmodel' component={GetAllModel} />
            <Route path='/EditProfile' component={EditProfile} />
            <Route path='/ChangePassword' component={ChangePassword} />
            
            <Route path='/logout' component={Logout} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/getuserdetail' component={UserContact} />
            <Route path='/getmyEquips' component={getmyEquips} />
            <Route path='/deleteEquip' component={DeleteEquip} />
            <Route path='/viewProfile' component={ViewProfile} />
            {/* <Route path='/userkyc' component={UserKyc} /> */}
          </UserContext.Provider>
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
