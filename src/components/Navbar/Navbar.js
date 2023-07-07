import React from "react";
import { NavLink } from 'react-router-dom';

import logo from "../../images/neighborhoodnest-logo.png";

import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="nav-bar">
      <nav className="nav-bar-space-between">
          <div className="nav-logo-inline">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/loginSignup">Login/Signup</NavLink>
              </li>
              <li>
                <NavLink to="/myAccount">My Account</NavLink>
              </li>
              <li className="transparent-button">
                <NavLink to="/servicesListing">Book Now</NavLink>
              </li>
              
            </ul>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
