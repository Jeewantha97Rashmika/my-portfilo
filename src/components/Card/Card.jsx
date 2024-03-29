import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span style={{color:"#D1D5D6"}}>{heading}</span>
      <span style={{color:"#D1D5D68C"}}>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
