import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logoCasino.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
