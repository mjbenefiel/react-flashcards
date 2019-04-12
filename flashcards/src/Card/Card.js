import React, { Component } from "react";
import "./Card.css";

const Card = props => (
  <div className="card-container">
    <div className="card">
      <div className="front">

      <div className="question">Question</div>
      </div>

      <div className="back">

      <div className="answer">Answer</div>
      </div>

    </div>
  </div>
);

export default Card