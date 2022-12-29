import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import Home from './images/homeIcon.svg';
import mapIcon from './images/mapIcon.svg';
import modeIcon from './images/modeIcon.svg';
import profileIcon from './images/profileIcon.svg';
import modelIcon from './images/dashboardIcon.svg';
import menuIcon from './images/menuIcon.svg';
import logo from "./images/logo.svg";
import dots from './images/dots.svg';
function BusDetail() {
    const [optionsvar,setOptions]=useState(false);
    const optionRef=useRef();

    useEffect(()=>{
        let closeopt=(e)=>{
          if(!optionRef.current.contains(e.target)){
            setOptions(false);
          }
        };
        document.body.addEventListener('mousedown',closeopt);
        return ()=>document.body.removeEventListener('mousedown',closeopt);
      });
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
                <table>
                    <tr>
                        <th>Bus Ids</th>
                        <th>Track Ids</th>
                        <th className='dotCol'>Options</th>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td className='dotsThree' ><div  ref={optionRef}>
                            <div>
                            <img src={dots} onClick={()=>{setOptions(!optionsvar)}} />
                            </div>
                            <div className={`dotOptions ${optionsvar?'displayoptions':'displaynotoptions'}`}>
                            <button>Update</button>
                            <button>Delete</button>
                            </div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>   
                        <td><img src={dots} /></td>
                       
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                    <tr>
                        <td>C756OOO</td>
                        <td>C756OOO</td>
                        <td><img src={dots} /></td>
                    </tr>
                </table>
            </div>

            </div>
            <div className='navbar'>
            <div className='nav'>
            <NavLink exact to="/homeUser">
            <img src={Home} /></NavLink>
            <NavLink exact to="javascript(void);">
            <img src={mapIcon} /></NavLink>
            <NavLink exact to="/dashboard">
            <img src={modelIcon} /></NavLink>
            <NavLink exact to="javascript(void);">
            <img src={modeIcon} /></NavLink>
            <NavLink exact to="/adminProfile">
            <img src={profileIcon} /></NavLink>
            </div>
            </div>
            <div className='updatepopup'>Update Successfully</div>
        </div>
        </div>
        </div>
    
  );
}

export default BusDetail;
