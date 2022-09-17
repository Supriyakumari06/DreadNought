import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div class="card mb-3 card1">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.content}</p>
        <p class="card-text"></p>
      </div>
    </div>
  );
};
