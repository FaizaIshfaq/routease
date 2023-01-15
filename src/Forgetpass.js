import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import forget from './images/forget.svg';
import lock from './images/lock.svg';
import at from './images/at.svg';

function ForgetPass() {
    
    const [inputs,setInputs]=useState({})
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({values,[name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }
  return (
        <div className='bg' >
             <div className='body'>
        <div className='select1'>
            <NavLink to='/login'>
            <img className='arrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='align2'>
            <img className='image' src={forget} alt='signup image' />
            <div className='item'>
            <h1>Forget <br />Password?</h1>
            <p>Don't worry it happens. Please enter your email address.</p>
            <div className='inputbox'>
                <form onSubmit={handleSubmit}>
                    <label className='group'>
                        <img className='icon1' src={at} alt='emailIcon' />
                       <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                    </label>
                    <div className='emailerror'>Invalid Email</div>
                    {/* <NavLink to="/resetPass"> */}
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

export default ForgetPass;
