import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import Otp from './images/otp.svg';
import lock from './images/lock.svg';
import at from './images/at.svg';

function OtpVerify() {
  return (
        <div className='bg' >
             <div className='body'>
        <div className='select1'>
            <NavLink exact to='/resetPass'>
            <img className='arrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='align2'>
            <img className='image' src={Otp} alt='otp verify image' />
            
            <div className='item'>
            <p className='otperror'>Invalid OTP</p>
            <h1>OTP <br />Verification</h1>
            <p>Enter OTP sent to you at <br />2020CS****@uet.edu.pk</p>
            <div className='inputbox'>
                <form>
                    <label className='group1'>
                        <input type="text" name="otp" />
                        <input type="text" name="otp"  />
                        <input type="text" name="otp"  />
                        <input type="text" name="otp"  />
                   
                    </label>
                </form> 
            </div><br />
            <p>Don't recieve OTP?&nbsp;<a className='resendlink' href='#'>Resend OTP</a>
            </p>
            <NavLink exact to="/login">
            <button className='btn2 btn4'>
                Verify & Proceed
            </button>
            </NavLink>
            </div>            
            </div>
            </div>
        </div>
        </div>
    
  );
}

export default OtpVerify;
