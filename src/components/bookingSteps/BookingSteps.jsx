import React from "react";
import Arrow, { DIRECTION, HEAD } from "react-arrows";
import "./bookingSteps.css";
import {AssignmentIndTwoTone, AttachMoneyTwoTone, SportsEsportsTwoTone} from '@material-ui/icons';
import Cards from '../../assets/images/cards.png';
import CardsLines from '../../assets/images/cardsLines.png';
import CardsLinesR from '../../assets/images/cardsLinesR.png';

const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};

function BookingSteps() {
  return (
    <div id="howItWorks" className="BookingSteps">
      <h4 className="SubTitle">How it Works</h4>
      <h2 className="Title">Our Working Steps</h2>
      <div className="bookingSteps-icon">
      <img src={CardsLines} alt="cards" class="cards-lines" />
        <img src={Cards} alt="cards" class="cards-icon" />
        <img src={CardsLinesR} alt="cards" class="cards-linesR" />
      </div>
      <div className="stepsContainer">
        <div className="stepContainer">
          <div id="step1" className="step">
            <span>
              <AssignmentIndTwoTone iconStyle={styles.largeIcon} />
            </span>
          </div>
          <h4>Create a Profile</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            massa commodo sapien elementum dignissim.
          </p>
        </div>
        <div className="stepContainer">
          <div id="step2" className="step">
            <span>
              <SportsEsportsTwoTone />
            </span>
          </div>
          <h4>Select a Game</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            massa commodo sapien elementum dignissim.
          </p>
        </div>
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.BOTTOM_RIGHT,
            node: () => document.getElementById("step1"),
            translation: [0.8, 1.5],
          }}
          to={{
            direction: DIRECTION.TOP_LEFT,
            node: () => document.getElementById("step2"),
            translation: [-1, -2],
          }}
          head={HEAD.NONE}
        />
        <div className="stepContainer">
          <div id="step3" className="step">
            <span>
              <AttachMoneyTwoTone />
            </span>
          </div>
          <h4>Bet Small, Win Big</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            massa commodo sapien elementum dignissim.
          </p>
        </div>
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("step2"),
            translation: [0.5, -1],
          }}
          to={{
            direction: DIRECTION.TOP_LEFT,
            node: () => document.getElementById("step3"),
            translation: [-0.5, -2],
          }}
          head={HEAD.NONE}
        />
      </div>
    </div>
  );
}

export default BookingSteps;
