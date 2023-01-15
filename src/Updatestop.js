import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate, NavLink, useNavigate, useParams} from "react-router-dom";
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import modelIcon from './images/dashboardIcon.svg';
import menuIcon from './images/menuIcon.svg';
import logo from "./images/logo.svg";
import arrow from './images/whiteArrow.svg';
import axios from 'axios';
function RouteDetail() {
    const [inputs,setInputs]=useState({});
    const navigate=useNavigate();
    const {id}=useParams();
    const [stopdata,setstopdata]=useState([]);
    
    // useEffect(()=>{
    //     getBus();
    // },[]);
    // function getBus(){
    //     // axios.get(`http://localhost/api/user/${id}`).then(function(response){
    //     // setstopdata(response.data);
    // // })
    // }

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
        navigate("/stopdetailstable");
    }
  return (
        <div className='bg' >
            <div className='body'>
            <div className='select1'>
            <div className='overlay'>
            <NavLink to='/dashboard'>
            <img className='arrowBack' src={arrow} alt='back' /> 
            </NavLink>
            <div className='stopDetails'>
            <form onSubmit={handleSubmit}>
                <h3>Stop Details</h3>
                <div>
                <label className='stopLabel'>New Stop Name</label>
                    <input type="text" name="route" onChange={handleChange} />
                </div>
                {/* <NavLink to='/dashboard'> */}
                <button>Show</button>
                {/* </NavLink> */}
            </form>
            </div>
            </div>    
            <div className='topdiv'>
                <div className='topnavbar'>
                    <div className='logo1'>
                    <img src={logo} />
                    <h2 className='rease1'>REase</h2>
                    </div>
                    <img src={menuIcon} />
                </div>
            </div>
            <div className='dashboard'>
            <h2>Dashboard</h2><br />
            <p>Hi Admin, Welcome back</p>
            <div className='functionalOptions'>
                <button>Add Bus</button>
                <button>Add Route</button>
                <button>Add Stops</button>
                <button>Stop Details</button>
                <button>Bus Details</button>
                <button>Route Details</button>
            </div>

            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink to="/homeUser">
            <img src={Home} /></NavLink>
            <NavLink to="javascript(void);">
            <img src={mapIcon} /></NavLink>
            <NavLink to="/dashboard">
            <img src={modelIcon} /></NavLink>
            <NavLink to="javascript(void);">
            <img src={modeIcon} /></NavLink>
            <NavLink to="/adminProfile">
            <img src={profileIcon} /></NavLink>
            </div>
            </div>
        </div>
        </div>
        </div>
    
  );
}

export default RouteDetail;
