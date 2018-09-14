import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/output.css";

class footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="footContainer">
            <div>All rights reserved</div>
            <div className="icons">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default footer;
