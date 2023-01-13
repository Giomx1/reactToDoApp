import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
import "../Header.css";

const Header = () => {
  return (
    <div className="ui three column grid center aligned container">
      <div className="column">
        <Link to="/">
          <button className="ui icon teal basic circular button">
            <i className="tasks icon" />
            List
          </button>
        </Link>
      </div>
      <div className="column">
        <h1 className="ui header title">
          to-do
          <div className="sub header">TODAY</div>
        </h1>
      </div>
      <div className="column">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
