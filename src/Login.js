import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink, useNavigate} from "react-router-dom";
import arrow from './images/arrow.svg';
import Login from './images/login.svg';
import lock from './images/lock.svg';
import at from './images/at.svg';
import axios from 'axios';

function Loginf() {
    const navigate=useNavigate();
    const [inputs,setInputs]=useState({})
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost/api/user/save",inputs).then(function(response){
            console.log(response.data);
            navigate('/homeUser');
        })
        console.log(inputs);
    }
  return (
        <div className='bg' >
             <div className='body'>
        <div className='select'>
            <NavLink to='/selection'>
            <img className='arrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='align2'>
            <img className='image' src={Login} alt='login image' />
            <div className='item'>
            <h1>Login</h1>
            <p className='invaliderror'>Invalid Credentials</p>
            <div className='inputbox'>
            <form onSubmit={handleSubmit}>
                    <label className='group'>
                        <img className='icon1' src={at} alt='emailIcon' />
                       <input type="text" name="emaillogin" placeholder="Email" onChange={handleChange} />
                    </label><br />
                    <label className='group'>
                    <img className='icon' src={lock} alt='passIcon' />
                    <input type="text" name="passwordlogin" placeholder="Password" onChange={handleChange} />
                    </label>    
                    <NavLink to="/forgetPass">
                        Forget Password?
                    </NavLink>
                    {/* <NavLink to="/homeUser"> */}
                    <button className='btn2'>
                        Login
                    </button>
                    {/* </NavLink> */}
            </form>
            </div>
            <p className='anotherway'>New to <span>UET</span>? <NavLink to="/signup">
                SignUp
            </NavLink></p>
            </div>
           
            
            </div>
          
            </div>
        </div>
        </div>
    
  );
}

export default Loginf;
