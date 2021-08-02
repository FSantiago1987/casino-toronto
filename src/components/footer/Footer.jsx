import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from '../../assets/images/logoCasino.png'; 
import {Link} from 'react-scroll';
import './footer.css';

function Footer() {
  return (
    <div className="Footer" id="contact">
      <div className="innerContainer">
          <div className="aboutContainer noMobile">
              <img src={logo} alt="logo footer" />
          </div>
          <div className="sectionContainer noMobile">
              <h3>Company</h3>
              <ul>
                  <li><Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link></li>
                  <li><Link smooth={true} to="about" offset={-110} className="footer-nav">About</Link></li>
              </ul>
          </div>
          <div className="sectionContainer noMobile">
              <h3>Our Links</h3>
              <ul>
                  <li><Link smooth={true} to="howItWorks" offset={-30} className="footer-nav">How it works</Link></li>
                  <li><Link smooth={true} to="games" offset={-60} className="footer-nav">Games</Link></li>
                  <li><Link smooth={true} to="contact" offset={-110} className="footer-nav">Contact</Link></li>
              </ul>
          </div>
          <div className="sectionContainer">
              <h3>Call Now</h3>
              <div className="horizontalContainer">
                    <span>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <h6>+1 647-234-8469</h6>
              </div>
          </div>
          <div className="sectionContainer">
              <h3>Mail</h3>
              <div className="horizontalContainer">
                    <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <h6>info@torontocasino.ca</h6>
              </div>
          </div>
      </div>
      <div className="bottomContainer">
        <small>
          Copyright &copy; {new Date().getFullYear()} Fabio Luiz. All rights
          reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;
