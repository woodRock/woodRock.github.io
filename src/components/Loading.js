import React from "react";
import logo from "../assets/logo.png";
import "./Loading.css";

const speed = 3;

const Loading = () => (
  <div className="loading stage">
    <img
      className="square loading-logo"
      style={{
        animation: `spin ${speed}s linear infinite`,
        width: "50px",
        height: "50px",
        borderRadius: "50px",
      }}
      src={logo}
      alt="img"
    />
  </div>
);

export default Loading;
