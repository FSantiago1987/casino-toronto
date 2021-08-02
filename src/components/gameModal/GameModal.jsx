import React from 'react';
import './gameModal.css';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Table from '../table/Table';
import ComingSoon from "../../assets/images/comingSoon.jpg";



function GameModal({title, war }) {
  const table = new Table();
    return (
        <Popup
        trigger={<button className="button-play"> Play </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> {title} </div>
            <div className="content">
              {title === "War" ? (<Table />) : (<img src={ComingSoon} alt="coming soon" />)}
            </div>
          </div>
        )}
      </Popup>
    )
}

export default GameModal
