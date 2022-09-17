import React from "react";
import { teachdata } from "./data.js";
import "./card.css";

export const TeachCard = () => {
  return (
    <div>
      <div>
        <div className="carding carding1">
          {teachdata.map((singleexp) => {
            return (
              <div>
                <div class="card mb-3">
                  <img
                    src="https://cdn.fs.teachablecdn.com/wgiet3NFRvO2zWrAf7n6"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{singleexp.name}</h5>
                    <p class="card-text">{singleexp.detail}</p>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
