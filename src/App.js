import logo from './logo.svg';
import './App.css';
import React, {component} from 'react';
import { Route, Switch } from "react-router-dom";
import GetStarted from './GetStarted'
import Selection from './Selection';
import Login from './Login';
import SignUp from './SignUp';
import ForgetPass from './Forgetpass';
import HomeUser from './HomeUser.js';
import ResetPass from './ResetPass.js';
import OtpVerify from './Otpverify.js';
import UserProfile from './Userprofile.js';
import AdminProfile from './AdminProfile.js';
import DashboardAdmin from './daashboardAdmin.js';
import AddBus from './AddBus.js';
import AddRoute from './AddRoute.js';
import UpdateRoute from './UpdateRoute.js';
import AddStop from './AddStop.js';
import StopDetails from './StopDetails.js';
import UpdateStop from './UpdateStopDetail.js';
import BusDetails from './BusDetails.js';
import ErrorPage from './ErrorPage.js';
import RouteDetails from './RouteDetails.js';
import TrackLocation from './TrackLocationMap.js';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={GetStarted} />
      <Route exact path="/selection" component={Selection} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/forgetPass" component={ForgetPass}  />
      <Route exact path="/homeUser" component={HomeUser} />
      <Route exact path="/resetPass" component={ResetPass} />
      <Route exact path="/OtpVerify" component={OtpVerify} />
      <Route exact path="/userProfile" component={UserProfile}/>
      <Route exact path="/adminProfile" component={AdminProfile} />
      <Route exact path="/dashboard" component={DashboardAdmin} />
      <Route exact path="/addBus" component={AddBus} />
      <Route exact path="/addRoute" component={AddRoute} />
      <Route exact path="/updateRoute" component={UpdateRoute} />
      <Route exact path="/addStop" component={AddStop} />
      <Route exact path="/stopDetails" component={StopDetails} />
      <Route exact path="/updateStop" component={UpdateStop} />
      <Route exact path="/busDetails" component={BusDetails} />
      <Route exact path="/error" component={ErrorPage} />
      <Route exact path="/routeDetails" component={RouteDetails} />
      <Route exact path="/trackLocation" component={TrackLocation} />
     </Switch>
    </>
  );
}

export default App;
