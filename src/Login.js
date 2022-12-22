import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import Login from './images/login.svg';
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
            <img className='image' src={Login} alt='login image' />
            <div className='item'>
            <h1>Login</h1>
            <p className='invaliderror'>Invalid Credentials</p>
            <div className='inputbox'>
                <form>
                    <label className='group'>
                        <img className='icon1' src={at} alt='emailIcon' />
                       <input type="text" name="email" placeholder="Email" />
                    </label><br />
                    <label className='group'>
                    <img className='icon' src={lock} alt='passIcon' />
                    <input type="text" name="password" placeholder="Password" />
                    </label>
                </form>
                <NavLink exact to="/forgetPass">
                <a href='#'>Forget Password?</a>
                </NavLink>
                
            </div>
            <NavLink exact to="/homeUser">
            <button className='btn2'>
                Login
            </button>
            </NavLink>
            <p className='anotherway'>New to <span>UET</span>? <NavLink exact to="/signup">
                <a href='#'>SignUp</a>
            </NavLink></p>
            </div>
           
            
            </div>
          
            </div>
        </div>
        </div>
    
  );
}

export default login;
