import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink, useNavigate} from "react-router-dom";
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import modelIcon from './images/dashboardIcon.svg';
import menuIcon from './images/menuIcon.svg';
import logo from "./images/logo.svg";
import arrow from './images/arrow.svg';
import axios from 'axios';
function AddBus() {
    const fields=useRef();
    const infields=useRef();
    const navigate=useNavigate();
    const [inputs,setInputs]=useState({});
    const [addrecord,setaddrecord]=useState(false);
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost/api/user/save",inputs).then(function(response){
            console.log(response.data);
            setTimeout(()=>{
                setaddrecord(true);
                fields.current.value=' ';
                infields.current.value=' ';
            },200)
            setTimeout(() => {
                setaddrecord(false);
            }, 1000);
        })
        console.log(inputs);
    }
  return (
        <div className='bg' >
            <div className='body'>
            <div className='select1'>
            <div className='topdiv'>
                <div className='topnavbar'>
                    <div className='logo1'>
                    <img src={logo} />
                    <h2 className='rease1'>REase</h2>
                    </div>
                    <img src={menuIcon} />
                </div>
            </div>
            <NavLink to='/dashboard'>
            <img className='backArrow' src={arrow} alt='back' /> 
            </NavLink>
            <div className='addThings'>
            <form onSubmit={handleSubmit}>
            <h2>Add Stop</h2>
            <div>
            <label>Route No</label>
            <input type="text" ref={fields} name="routeNo" onChange={handleChange} /></div>
            <div>
            <label>Stop Name</label>
            <input type="text" ref={infields} name="stopName" onChange={handleChange}/></div>
            <button>Add</button>
            </form>
            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink to="/homeUser">
            <img src={Home} /></NavLink>
            <NavLink to="javascript(void);">
            <img src={mapIcon} /></NavLink>
            <NavLink to="/dashboard">
            <img src={modelIcon} /></NavLink>
            <NavLink to="javascript(void);">
            <img src={modeIcon} /></NavLink>
            <NavLink to="/adminProfile">
            <img src={profileIcon} /></NavLink>
            </div>
            </div>
            {addrecord&&
                <div className='updatepopup'>Added Successfully</div>
            }
        </div>
        </div>
        </div>
    
  );
}

export default AddBus;
