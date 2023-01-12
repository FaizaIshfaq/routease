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
function dashboard() {
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
                    <NavLink exact to="#">
                    <img src={menuIcon} />
                    </NavLink>
                </div>
            </div>
            <div className='dashboard'>
            <h2>Dashboard</h2><br />
            <p>Hi Admin, Welcome back</p>
            <div className='functionalOptions'>
                <NavLink exact to="/addBus">
                <button>Add Bus</button>
                </NavLink> 
                <NavLink exact to="/addRoute">
                <button>Add Route</button>
                </NavLink> 
                <NavLink exact to="/addStop">
                <button>Add Stops</button>
                </NavLink> 
                <NavLink exact to="/stopDetails">
                <button>Stop Details</button>
                </NavLink>
                 <NavLink exact to="/busDetails">
                <button>Bus Details</button>
                </NavLink>
                <NavLink exact to="/routeDetails">
                <button>Route Details</button>
                </NavLink>
            </div>

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

export default dashboard;
