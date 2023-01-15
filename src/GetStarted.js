import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import logo from "./images/logo.svg";

function getStarted() {
  return (
    <div className='bg'>
    <div className='body'>
            <div className='getStart'>
              <div className='align'>
                <img src={logo} />
                <h1 className='rease'>REase</h1>
                <p className='para1'>Track your route with  RouteEase</p>
                <NavLink to="/selection">
                <button className='btn1'>
                    Get Started
                </button>
                </NavLink>                
              </div>        
            </div>
        </div>
    </div>
   
    
  );
}

export default getStarted;
