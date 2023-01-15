import React from 'react';
import ReactDOM from 'react-dom/client';
import mobile from './images/mobile.svg';
import arrow from './images/arrow.svg';
import { NavLink } from 'react-router-dom';

function selection() {
  return (
    <div className='bg'>
      <div className='body'>
        <div className='select'>
        <NavLink to='/'>
        <img className='arrow' src={arrow} alt='back' /> 
        </NavLink>
          <div className='align1'>
            <img className='image' src={mobile} alt='mobile browser image' />
            <p>Find Your University route here</p>
            <div className='btngrp'>
                <NavLink to='/login'>
                <button className='loginbtn'>Login</button>
                </NavLink>
                <NavLink to='/signUp'>
                <button className='signupbtn'>Sign Up</button>
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default selection;
