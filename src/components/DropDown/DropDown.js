import React from 'react'
import   './dropdown.scss'
import PropTypes from 'prop-types';

import { GiPlainArrow } from "react-icons/gi";


function DropDown({setLoggedIn}) {
   
  return (
    <div className="dropdown">
    <span className='Welcome'>WELCOME JOHN   <GiPlainArrow/> </span>
    <div className="dropdown-content">
    <p><a href="https://vetcoin-members.sentinel-digital.com/?uid=O5mI1RTa2StybzhsTTle" style={{color:"green"}}>Members Area</a></p>
    <p>Check Your Rank</p>
    <p>Change Password</p>
      <button type='button'onClick={(e)=>{e.preventDefault();setLoggedIn(false)}}>signOut</button>
    </div>
  </div>
  )
}
DropDown.propTypes = {
  setLoggedIn:PropTypes.func.isRequired
};
export default DropDown