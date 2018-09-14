import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/output.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <div className="navContainer">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/About">Profile</Link></div>
          <div><Link to="/LoadingScreen">Contact</Link></div>          
          </div>
        </nav>
      </div>
    );
  }
}

export default header;
