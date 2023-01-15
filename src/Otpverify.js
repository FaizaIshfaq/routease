import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import Otp from './images/otp.svg';
import lock from './images/lock.svg';
import at from './images/at.svg';

function OtpVerify() {
    
    const [inputs,setInputs]=useState({})
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
    }
    let digitValidate =(ele)=>{
        ele.target.value = ele.target.value.replace(/[^0-9]/g,'');
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }
        const num1 = useRef()
        
        const num2 = useRef()
        
        const num3 = useRef()
        
        const num4 = useRef()
        
        const handleOtp1Change = (value)=>{
        handleChange(value);
        if(value.target.value!='')
        num2.current.focus();
        else
        num1.current.focus();
        
        }
        
        const handleOtp2Change = (value)=>{
        handleChange(value);
        if(value.target.value!='')
        num3.current.focus();
        else
        num2.current.focus();
        
        }
        
        const handleOtp3Change = (value)=>{
        handleChange(value);
        if(value.target.value!='')
        num4.current.focus();
        else
        num3.current.focus();
        
        }
        
        const handleOtp4Change = (value)=>{
        handleChange(value);
        //only update the value here
        
        }

  return (
        <div className='bg' >
             <div className='body'>
        <div className='select1'>
            <NavLink to='/resetPass'>
            <img className='arrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='align2'>
            <img className='image' src={Otp} alt='otp verify image' />
            
            <div className='item'>
            <p className='otperror'>Invalid OTP</p>
            <h1>OTP <br />Verification</h1>
            <p>Enter OTP sent to you at <br />2020CS****@uet.edu.pk</p>
            <div className='inputbox'>
                <form onSubmit={handleSubmit}>
                    <label className='group1'>
                        <input name='otp1' type="text" maxLength="1" size="1" max="1" onInput={digitValidate} onChange={handleOtp1Change} ref={num1}/>
                        <input name='otp2' type="text" maxLength="1" size="1" max="1" onInput={digitValidate} onChange={handleOtp2Change} ref={num2}/>
                        <input name='otp3' type="text" maxLength="1" size="1" max="1" onInput={digitValidate} onChange={handleOtp3Change} ref={num3}/>
                        <input name='otp4' type="text" maxLength="1" size="1" max="1" onInput={digitValidate} onChange={handleOtp4Change} ref={num4}/>
                   
                    </label><br/>
                    <p>Don't recieve OTP?&nbsp;<a className='resendlink' href='#'>Resend OTP</a>
                    </p>
                    {/* <NavLink to="/login"> */}
                    <button className='btn2 btn4'>
                        Verify & Proceed
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

export default OtpVerify;
