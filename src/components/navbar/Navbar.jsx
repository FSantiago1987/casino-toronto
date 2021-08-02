import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logoCasino.png";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import NavItems from "./NavItems";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <div className="Navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" />
      </div>
      <NavItems />
    </div>
  );
}

export default Navbar;
