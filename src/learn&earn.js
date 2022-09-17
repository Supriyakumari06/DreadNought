import React from "react";
import "./learnandearn.css";

export const Learn = () => {
  return (
    <div className="Block">
      <div>
        <h1 className="sgup">Sign Up to learn and earn</h1>
        <p className="content">
          Course enables future founders to learn how to launch quickly as most
          first time founders pivot 4 to 5 times before achieving product-market
          fit.
        </p>
      </div>
      <div className="robo">
        <img
          className="robot"
          src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/mzBHDQYXTCqItjILj7OI"
          alt=""
        />
        <h2 className="future"> Future Deep Tech Founders </h2>
        <p className="detail">
          Everything you need to know about building startup other than coding.
          Milestone based earnings upto USD $1000.{" "}
        </p>
        <div className="bottom">
          <div className="teacher">
            <img
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/hl1PBlgTTlWt9m8RnkCS"
              alt=""
            />
            Jason Miler
          </div>
          <div className="free">Free</div>
        </div>
      </div>
    </div>
  );
};
