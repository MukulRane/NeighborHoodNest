import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../AppContext";

import logo from "../../images/neighborhoodnest-logo.png";

import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <div className="nav-bar">
      <nav className="nav-bar-space-between">
        <div className="nav-logo-inline">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/" exact="true">
                Home
              </NavLink>
            </li>
            {!isLoggedIn && (
              <li>
                <NavLink to="/loginSignup">Login/Signup</NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/myAccount">My Account</NavLink>
              </li>
            )}
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
