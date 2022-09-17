import React, { useState } from "react";

import { Button } from "./button.js";
// import "./styles/Loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = ({ setLoginUser }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("http://localhost:8080/login", user).then((res) => {
      alert(res.data.message);
      if (!res.data.user) {
        setLoginUser({});
      } else {
        setLoginUser(res.data.user);
        navigate("/main");
      }
    });
  };
  return (
    <div className="login flex align-center justify-center">
      <div className="loginFormContainer flex align-center justify-center">
        <p className="">Welcome Back</p>
        <p className="">Login Here</p>
        <form className="loginForm flex align-center justify-center">
          <div className="formGroup flex justify-center">
            <label
              htmlFor="staticEmail"
              className="flex align-center justify-center"
            >
              Email
            </label>
            <input
              required
              type="email"
              className=""
              id="staticEmail"
              placeholder="email@example.com"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="formGroup flex justify-center">
            <label
              htmlFor="inputPassword"
              className="flex align-center justify-center"
            >
              Password
            </label>
            <input
              required
              type="password"
              className=""
              id="inputPassword"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="entrypage_btnContainer flex align-center justify-center">
            <Button type="button" txt="Submit" callme={login} />
            <p className="uppercase center-text flex align-center">OR</p>
            <Button
              type="button"
              txt="Register"
              callme={() => navigate("/register")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
