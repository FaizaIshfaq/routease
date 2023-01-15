import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import modelIcon from './images/dashboardIcon.svg';
import menuIcon from './images/menuIcon.svg';
import logo from "./images/logo.svg";
import arrow from './images/whiteArrow.svg';
function StopDetail() {
    const [inputs,setInputs]=useState({})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // axios.post("http://localhost/api/user/save",inputs).then(function(response){
            // console.log(response.data);
            // navigate('/');
        // })
        console.log(inputs);
        navigate('/stopdetailstable');
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
                    <label>Enter Route</label>
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

export default StopDetail;
