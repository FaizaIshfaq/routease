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
            <div className='addThings lableSize'>
            <h2>Update Route</h2>
            <div>
            <label>Current Route No</label>
            <input type="text" name="RouteNo"  /></div>
            <div>
            <label>New Route No</label>
            <input type="text" name="NewRouteNo" /></div>
            <div>
            <label>Bus No</label>
            <input type="text" name="BusNo" /></div>
            <button>Update</button>
            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink exact to="/homeUser">
            <img src={Home} /></NavLink>
            <img src={mapIcon} />
            <img src={modelIcon} />
            <img src={modeIcon} />
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
