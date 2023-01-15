import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {Link, NavLink, useNavigate,useParams} from "react-router-dom";
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import modelIcon from './images/dashboardIcon.svg';
import menuIcon from './images/menuIcon.svg';
import logo from "./images/logo.svg";
import dots from './images/dots.svg';
import axios from 'axios';
function StopDetail(props) {
    const [countvar,setcountvar]=useState(1);
    const [popupinfo,setpopupinfo]=useState(false);
    const [optionsvar,setOptions]=useState(false);
    const [stopdata,setstopdata]=useState([]);
    const optionRef=useRef();
    const {id}=useParams();
    const bus={};
    function handledisplay(event){
        setOptions(true)
        console.log("3dots clicked");
    }
    useEffect(()=>{
        getBus();
    },[]);
    function getBus(){
        axios.get("http://localhost/api/user/").then(function(response){
        setstopdata(response.data);
    })
    }
    useEffect(()=>{
        let closeopt=(e)=>{
          if(!optionRef.current.contains(e.target) || optionRef.current.contains(e.target)){
            setOptions(false);
          }
        };
        document.body.addEventListener('mousedown',closeopt);
        return ()=>document.body.removeEventListener('mousedown',closeopt);
      });
      
    function deletestop(id){
        console.log(id)
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getBus();
        })
    }
    function updatestop(id){
        console.log(id)
        axios.delete(`http://localhost/api/user/${id}/update`).then(function(response){
            console.log(response.data);
            getBus();
        })
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
            <div className='details'>
            <h3>Stop Details</h3><br />
            <p>Route 1 having Bus ID <span>C24329</span></p>
            <div className='functionalOptions1'>
                <table><thead>
                    <tr>
                        <th>Stop No.</th>
                        <th>Stop Name</th>
                        <th>Options</th>
                    </tr></thead><tbody>
                    {stopdata.map((stop,key)=>
                    <tr key={key}>
                        <td>{stop.id}</td>
                        <td>{stop.stopName}</td>
                        <td>
                            <img className='dotsThree' ref={optionRef} src={dots} onClick={handledisplay} />
                           {optionsvar&& <div className='dotOptions'>
                            <button onClick={deletestop(bus.id)}>Delete</button>
                            <button onClick={updatestop(bus.id)}>Update</button>
                            </div>
                            }
                        </td>
                    </tr>
                    )}
                    </tbody>
                </table>
            </div>

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
            {popupinfo&&<div className='updatepopup'>Deleted Successfully</div>}
        </div>
        </div>
        </div>
    
  );
}

export default StopDetail;
