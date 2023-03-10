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
function BusDetail() {
    const [optionsvar,setOptions]=useState(false);
    const [busdata,setbusdata]=useState([]);
    const [deloption,setdeloption]=useState(false);
    const optionRef=useRef();
    const {id}=useParams();
    function handledisplay(event){
        setOptions(true)
        
        console.log("3dots clicked");
    }
    useEffect(()=>{
        getBus();
    },[]);
    function getBus(){
        axios.get("http://localhost/api/user/").then(function(response){
        setbusdata(response.data);
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
      
    function deletebus(id){
        setTimeout(() => {
            console.log("delete clicked:",id)
            axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
                console.log(response.data); 
                getBus();
            })
        }, 1000);
        setTimeout(() => {
            setdeloption(true);
        }, 1400);
        setTimeout(() => {
            setdeloption(false);
        }, 2700);
        
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
            <h3>Bus Details</h3><br />
            <div className='functionalOptions1'>
                <table><thead>
                    <tr>
                        <th>Bus Ids</th>
                        <th>Track Ids</th>
                        <th>Options</th>
                    </tr></thead><tbody>
                    {busdata.map((bus,key)=>
                    <tr key={key}>
                        <td>{bus.busNo}</td>
                        <td>{bus.trackerID}</td>
                        <td>
                            <img className='dotsThree' ref={optionRef} src={dots} onClick={handledisplay} />
                           {optionsvar&& <div className='dotOptions'>
                            <button onClick={deletebus(bus.id)}>Delete</button>
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
            {deloption&&<div className='updatepopup'>Deleted Successfully</div>}
        </div>
        </div>
        </div>
    
  );
}

export default BusDetail;
