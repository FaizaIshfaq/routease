import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import modelIcon from './images/dashboardIcon.svg';
import menuIcon from './images/menuIcon.svg';
import logo from "./images/logo.svg";
import arrow from './images/arrow.svg';
function AddBus() {
  return (
        <div className='bg' >
            <div className='body'>
            <div className='select1'>
            <div className='topdiv'>
                <div className='topnavbar'>
                    <div className='logo1'>
                    <img src={logo} />
                    <h2 className='rease1'>REase</h2>
                    </div>
                    <img src={menuIcon} />
                </div>
            </div>
            <NavLink exact to='/dashboard'>
            <img className='backArrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='addThings'>
            <h2>Add Bus</h2>
            <div>
            <label>Bus No</label>
            <input type="text" name="BusNo"  /></div>
            <div>
            <label>Tracker ID</label>
            <input type="text" name="TrackerID" /></div>
            <button>Add</button>
            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink exact to="/homeUser">
            <img src={Home} /></NavLink>
            <NavLink exact to="javascript(void);">
            <img src={mapIcon} /></NavLink>
            <NavLink exact to="/dashboard">
            <img src={modelIcon} /></NavLink>
            <NavLink exact to="javascript(void);">
            <img src={modeIcon} /></NavLink>
            <NavLink exact to="/adminProfile">
            <img src={profileIcon} /></NavLink>
            </div>
            </div>
        </div>
        </div>
        </div>
    
  );
}

export default AddBus;
