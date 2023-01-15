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
                    <NavLink to="#">
                    <img src={menuIcon} />
                    </NavLink>
                </div>
            </div>
            <div className='dashboard'>
            <h2>Dashboard</h2><br />
            <p>Hi Admin, Welcome back</p>
            <div className='functionalOptions'>
                <NavLink to="/addBus">
                <button>Add Bus</button>
                </NavLink> 
                <NavLink to="/addRoute">
                <button>Add Route</button>
                </NavLink> 
                <NavLink to="/addStop">
                <button>Add Stops</button>
                </NavLink> 
                <NavLink to="/stopDetails">
                <button>Stop Details</button>
                </NavLink>
                 <NavLink to="/busDetails">
                <button>Bus Details</button>
                </NavLink>
                <NavLink to="/routeDetails">
                <button>Route Details</button>
                </NavLink>
            </div>

            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink to="/homeUser">
            <img src={Home} /></NavLink>
            <NavLink to="/trackLocation">
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

export default dashboard;
