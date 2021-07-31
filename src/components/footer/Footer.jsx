import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from '../../assets/images/logoCasino.png';
import './footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="innerContainer">
          <div className="aboutContainer">
              <img src={logo} alt="logo footer" />
          </div>
          <div className="sectionContainer">
              <h3>Company</h3>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
              </ul>
          </div>
          <div className="sectionContainer">
              <h3>Our Links</h3>
              <ul>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Contact</a></li>
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
