import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/color/logo.jpg"

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <li className="flex-row" >
          <li className="mx-1">
            <Link to="/">
              About Me
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Items">
              Items
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </li>
      );
    }
  }

  return (
    <header className="flex-row">
      <h1>    
        <Link to="/">
        <img src={Logo} style={{ width: "8.5%" }} alt="test"/>
        </Link>
      </h1>
     
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
