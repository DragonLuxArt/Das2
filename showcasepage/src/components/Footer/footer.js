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
            <div> DAS Katarzyna Kwiczala :: 43-426 Dębowiec Gumna ul. Beskidzka 53 </div>
            <div className="icons">
            <a href="https://www.facebook.com/AUTOBUSY.DAS/">
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
