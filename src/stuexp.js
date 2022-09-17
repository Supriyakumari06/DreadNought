import React from "react";
import { Card } from "./stucard.js";
import { studata } from "./data.js";
import "./card.css";
export const Exp = () => {
  return (
    <div>
      <div>
        <h1 style={{ textDecoration: "none" }}>Student's Experience</h1>
      </div>
      <div>
        <div className="carding carding2">
          {studata.map((singleexp) => {
            return (
              <Card
                name={singleexp.name}
                content={singleexp.content}
                img={singleexp.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
