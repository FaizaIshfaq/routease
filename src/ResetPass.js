import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import lock from './images/lock.svg';
import reset from './images/reset.svg';

function resetPass() {
  return (
        <div className='bg' >
             <div className='body'>
        <div className='select1 '>
            <NavLink exact to='/forgetPass'>
            <img className='arrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='align2 '>
            <img className='image' src={reset} alt='signup image' />
            <div className='item '>
            <h1>Reset <br />Password?</h1>
            <div className='inputbox select2'>
                <form>
                <label className='group'>
                        <img className='icon1' src={lock} alt='passIcon' />
                       <input type="text" name="email" placeholder="New Password" />
                    </label>
                    <label className='group'>
                        <img className='icon1' src={lock} alt='passIcon' />
                       <input type="text" name="email" placeholder="Confirm Password" />
                    </label>
                </form>
            </div>
            <NavLink exact to="/OtpVerify">
            <button className='btn2'>
                Submit
            </button>
            </NavLink>
            </div>            
            </div>
            </div>
        </div>
        </div>
    
  );
}

export default resetPass;
