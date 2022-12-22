import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import Login from './images/login.svg';
import lock from './images/lock.svg';
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileActiveIcon.svg';

function profile() {
  return (
        <div className='bg' >
             <div className='body'>
        <div className='select1'>
            <div className='profile'>
                <h2>Profile</h2>
                <div className='profilediv' >
                <div className='imagediv'>
                    <img className='profileImg' src={Login} />
                    <img className='cameraIcon' src={lock}/>
                </div>
                <h4 className='name'>Faiza Ishfaq</h4> 
                </div>   
            </div>
            <div className='bioData'>
               <div className='detail'>
               <label>Username</label>
                <div>Faiza Ishfaq</div>
                <label>Email</label>
                <div>2020cs***@student.uet.edu.pk</div>
                <label>Password</label>
                <div className='asteric'>*******</div>
               </div>
               <NavLink exact to="/selection">
               <button className='logout'>Logout</button>
               </NavLink>
            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink exact to="/homeUser">
            <img src={Home} /></NavLink>
            <img src={mapIcon} />
            <img src={modeIcon} />
            <NavLink exact to="/userProfile">
            <img src={profileIcon} /></NavLink>
            </div>
            </div>
        </div>
        </div>
        </div>
    
  );
}

export default profile;
