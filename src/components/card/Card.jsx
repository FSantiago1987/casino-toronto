import React from "react";
import "./card.css";

function Card({ suits, value, color, image }) {
  return (
    <div className="Card" style={{ color: color }}>
      {image ? (
        <img src={image} alt="" />
      ) : (
        <>
          <div className="number-top">
            <p>{value}</p>
            <p>{suits}</p>
          </div>
          <div className="suit-middle">{suits}</div>
          <div className="number-bottom">
            {" "}
            <p>{suits}</p>
            <p>{value}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
