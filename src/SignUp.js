import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import signup from './images/signup.svg';
import lock from './images/lock.svg';
import at from './images/at.svg';

function login() {
  return (
        <div className='bg' >
             <div className='body'>
        <div className='select'>
            <NavLink exact to='/selection'>
            <img className='arrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='align2'>
            <img className='image' src={signup} alt='signup image' />
            <div className='item'>
            <h1>Sign Up</h1>
            <div className='inputbox'>
                <form>
                    <label className='group'>
                        <img className='icon1' src={at} alt='emailIcon' />
                       <input type="text" name="email" placeholder="Email" />
                    </label><br />
                    <div className='emailerror1'>Invalid Email</div>
           
                    <label className='group'>
                    <img className='icon' src={lock} alt='passIcon' />
                    <input type="text" name="password" placeholder="Password" />
                    </label>
                </form>
            </div>
            <NavLink exact to="/login">
            <button className='btn2 btn3'>
                Continue
            </button>
            </NavLink>
            <p className='anotherway anotherway1'>Joined us before? <NavLink exact to="/login">
            <span> <a href='#'>Login</a></span>
            </NavLink></p>
            </div>
           
            
            </div>
          
            </div>
        </div>
        </div>
    
  );
}

export default login;
