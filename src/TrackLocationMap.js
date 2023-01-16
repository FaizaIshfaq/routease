import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom';
import Maped from './Maped.js';
import zoomIcon from './images/zoomIcon.svg';
import menuIcon from './images/menuIcon.svg';
import mapSearch from './images/mapSearch.svg';
import homeIcon from './images/homeIcon.svg';
import activemapIcon from './images/activemapicon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import location from './images/location.svg';
import stopIcon from './images/stopIcon.svg';

function Selection() {
  const [sidenavState,setsidenavState]=useState(false);
  const sidenavref=useRef();
  const [routeState,setrouteState]=useState(true);
  const [stopState,setstopState]=useState(false);


  useEffect(()=>{
    let closesidenav=(e)=>{
      if(!sidenavref.current.contains(e.target)){
        setsidenavState(false);
      }
    };
    document.body.addEventListener('mousedown',closesidenav);
    return ()=>document.body.removeEventListener('mousedown',closesidenav);
  });

  return (
    <div className='bg'>
      <div className='body'>
        <div className='select1'>
          <Maped className='map' />
          <div className='searchgrp'>
            <div className='searchIcon'><img src={mapSearch} /></div>
            <div className='search'>
            <input type="text" name="search" placeholder="Search here" />
            </div>
            <button className='menuicon' onClick={()=>{setsidenavState(!sidenavState)}}>
              <img src={menuIcon}  />
            </button>
          </div>
          <div className='distanceTime'>
              <h4>Route 1</h4>
              <div>
                <h5>Distance</h5>
                <h3>300</h3>
                <h6>Meters</h6>
                <h5>Time</h5>
                <h3>2</h3>
                <h6>Minutes</h6>
              </div>
          </div>
          <div className='zoom'>
              <img src={zoomIcon} />
          </div>
        <div className='navbar'>
          <div className='nav'>
          <NavLink to="/homeUser">
          <img src={homeIcon} /></NavLink>
          <NavLink to='/trackLocation'>
          <img src={activemapIcon} /></NavLink>
          <img src={modeIcon} />
          <NavLink to="/userProfile">
          <img src={profileIcon} /></NavLink>
          </div>
        </div>
        <div className={`sidenav ${sidenavState?'displayBlock':'displaynotBlock'}`} ref={sidenavref}>
          <div className='switchTabs '>
          <button className={`${stopState?'bottomLine':''}`} onClick={()=>{setrouteState(false); setstopState(true);}} >
            Route Stops
          </button>
          <button className={`sideLine ${routeState?'bottomLine':''} `} onClick={()=>{setstopState(false);setrouteState(true); }} >
            Route Details
          </button>
          </div>
          <div className={`stops ${stopState?'displayStop':'displaynotStop'}`} >
            <div className='stopdetail'>
            <img className='activeLocation' src={location} />
            <p>Dharampura</p>
            </div>
            <div className='line'></div>
            <div className='stopdetail'>
              <img src={stopIcon} />
              <p>Sadar</p>
            </div>
            <div className='line'></div>
            <div className='stopdetail'>
            <img src={stopIcon} />
            <p>Mughalpura</p>
            </div>
            

          </div>
          <div className={`route ${routeState?'displayroute':'displaynotroute'}`}>
            <div className='routedetail'>
            <img className='activeLocation' src={location} />
            <p>Route&nbsp;1</p>
            </div>
            <div className='line'></div>
            <div className='routedetail'>
              <img src={stopIcon} />
              <p>Route&nbsp;2</p>
            </div>
            <div className='line'></div>
            <div className='routedetail'>
            <img src={stopIcon} />
            <p>Route&nbsp;3</p>
            </div>
            <div className='line'></div>
            <div className='routedetail'>
            <img src={stopIcon} />
            <p>Route&nbsp;4</p>
            </div>
            <div className='line'></div>
            <div className='routedetail'>
            <img src={stopIcon} />
            <p>Route&nbsp;5</p>
            </div>
            

          </div>
        </div>
        </div>
       
      </div>
    </div>
    
    
  );
}

export default Selection;
