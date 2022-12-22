import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from "react-router-dom";
import arrow from './images/arrow.svg';
import errorpage from './images/error.svg';

function errorfunc() {
  return (
        <div className='bg' >
            <div className='body'>
                <div className='select1 errorPage '>
                    <img className='errorphoto' src={errorpage} />
                    <div className='centerError'>
                        <h1>Oops! Something went wrong</h1><br />
                        <div>
                        <NavLink exact to="/HomeUser">
                        <img src={arrow} /></NavLink>
                        <button>Go back to home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
}

export default errorfunc;
