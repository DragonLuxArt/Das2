import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/output.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <div className="HeaderLogo"><img src={require('../Content/images/LogoDasMama.png')} className="Logo"/></div>
          <div className="navContainer">
          <div><Link to="/">Start</Link></div>
          <div><Link to="/About">O Nas</Link></div>
          <div><Link to="/RozkladJazdy">Rozkład Jazdy</Link></div>          
          </div>
        </nav>
      </div>
    );
  }
}

export default header;
