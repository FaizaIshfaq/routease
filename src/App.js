import logo from './logo.svg';
import './App.css';
import React, {component} from 'react';
import { Route, Routes } from "react-router-dom";
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
import BusDetails from './BusDetails.js';
import ErrorPage from './ErrorPage.js';
import RouteDetails from './RouteDetails.js';
import TrackLocation from './TrackLocationMap.js';
import StopDetailTable from './Stopdetailtable.js';
import Updatestop from './Updatestop.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<GetStarted/>} />
      <Route path="/selection" element={<Selection/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/forgetPass" element={<ForgetPass/>}  />
      <Route path="/homeUser" element={<HomeUser/>} />
      <Route path="/resetPass" element={<ResetPass/>} />
      <Route path="/OtpVerify" element={<OtpVerify/>} />
      <Route path="/userProfile" element={<UserProfile/>}/>
      <Route path="/adminProfile" element={<AdminProfile/>} />
      <Route path="/dashboard" element={<DashboardAdmin/>} />
      <Route path="/addBus" element={<AddBus/>} />
      <Route path="/addRoute" element={<AddRoute/>} />
      <Route path="/updateRoute" element={<UpdateRoute/>} />
      <Route path="/addStop" element={<AddStop/>} />
      <Route path="/stopDetails" element={<StopDetails/>} />
      <Route path="/busDetails" element={<BusDetails/>} />
      <Route path="/error" element={<ErrorPage/>} />
      <Route path="/routeDetails" element={<RouteDetails/>} />
      <Route path="/trackLocation" element={<TrackLocation/>} />
      <Route path="/stopdetailstable" element={<StopDetailTable/>} />
      <Route path="/updatestop" element={<Updatestop/>} />
     </Routes>
    </>
  );
}

export default App;
