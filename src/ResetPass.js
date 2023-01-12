import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import lock from './images/lock.svg';
import reset from './images/reset.svg';

function ResetPass() {
    const [inputs,setInputs]=useState({})
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }

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
                <form onSubmit={handleSubmit}>
                <label className='group'>
                        <img className='icon1' src={lock} alt='passIcon' />
                       <input type="text" name="newPassword" placeholder="New Password" onChange={handleChange} />
                    </label>
                    <label className='group'>
                        <img className='icon1' src={lock} alt='passIcon' />
                       <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                    </label>
                    {/* <NavLink exact to="/OtpVerify"> */}
                    <button className='btn2'>
                        Submit
                    </button>
                    {/* </NavLink> */}
                </form>
            </div>
            
            </div>            
            </div>
            </div>
        </div>
        </div>
    
  );
}

export default ResetPass;
