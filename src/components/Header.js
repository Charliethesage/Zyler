import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants';

const Header = () => {

  const [btnClick, setBtnClick] = useState("login")

  const onBtnClick = () => {
    btnClick === "login" ? setBtnClick("logout") : setBtnClick("login")
  }

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className='login' onClick={onBtnClick}>{btnClick}</button>
          </ul>
        </div>
      </div>
    );
  };
  

export default Header