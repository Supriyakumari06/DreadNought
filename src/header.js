import React from "react";
import { Button } from "./button.js";
import "./header.css";
import { Login } from "./login.js";
import dreadimg from "./dreadimg.png";
export const Header = () => {
  return (
    <nav
      className="navbar navbar-dark bg-primary "
      style={
        ({ height: "12.5vh" },
        {
          backgroundImage:
            "url('https://c.tenor.com/18SBZln9s3AAAAAC/black-space-outer-space.gif')",
        })
      }
    >
      <div className="container-fluid d-flex">
        <a className="navbar-brand d-flex" href="/">
          <h2>DreadNought</h2>
          <img
            src={dreadimg}
            alt=""
            width="150"
            height="50"
            className="d-inline-block align-text-top"
            style={{ position: "absolute", left: "140px" }}
          />
        </a>
        <div>
          <Button title="Login" onClick={Login} />
          <Button title="SignUp" />
        </div>
      </div>
    </nav>
  );
};
