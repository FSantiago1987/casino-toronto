/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../navbar/Navbar";
import "./topSection.css";

function TopSection() {
  return (
    <div className="TopSection">
      <div className="left-side">
      <div class="neon-wrapper">
        <div class="neon">Toronto </div>
        <div class="flux">Casino </div>
      </div>
      <div className="slogan">
          <p>Invest little, take more. The best part of your life’s journey.</p>
      </div>
      <div className="button">
        <button>Join Now</button>
      </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default TopSection;
