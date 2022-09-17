import React from "react";
import "./soc.css";

export const Social = () => {
  return (
    <div className="main">
      <h1 className="soc" style={{ color: "" }}>
        Social Initiative By
      </h1>
      <div className="abc">
        <div className="img">
          <img
            className="image"
            src="https://cdn.fs.teachablecdn.com/iHpm1TXUQQeQk6PQVAMw"
            resizeMode="cover"
            alt=""
          />
        </div>
        <div className="img">
          <img
            className="image"
            src="https://cdn.fs.teachablecdn.com/2GJ3PRzFSAyZblVHipUF"
            resizeMode="cover"
            alt=""
          />
        </div>
        <div className="img">
          <img
            className="image"
            src="https://cdn.fs.teachablecdn.com/xOBdZe6Q1GYXG5bPyTFS"
            resizeMode="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
