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
import arrow from './images/whiteArrow.svg';
function dashboard() {
  return (
        <div className='bg' >
            <div className='body'>
            <div className='select1'>
            <div className='overlay'>
            <NavLink exact to='/dashboard'>
            <img className='arrowBack' src={arrow} alt='back' /> 
            </NavLink>
            <div className='stopDetails'>
                <h3>Stop Details</h3>
                <div>
                    <label>Enter Route</label>
                    <input type="text" name="route" />
                </div>
                <button>Show</button>

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

export default dashboard;
