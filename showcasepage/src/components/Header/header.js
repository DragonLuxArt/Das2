import React, { Component } from "react";
import "../Style/output.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <div className="navContainer">
          <div>Home</div>
          <div>Profile</div>
          <div>Contact</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default header;
