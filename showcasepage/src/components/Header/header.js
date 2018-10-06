import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/output.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <div className="navContainer">
          <div><Link to="/">Start</Link></div>
          <div><Link to="/About">O Nas</Link></div>
          <div><Link to="/Contact">Rozkład Jazdy</Link></div>          
          </div>
        </nav>
      </div>
    );
  }
}

export default header;
