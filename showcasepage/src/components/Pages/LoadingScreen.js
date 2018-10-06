import React from "react";
import "../Style/output.css"

export default () => (
  <div className="LoadingScreen">
  <div class="progress-indicator" id="ipl-progress-indicator">
    <div class="progress-indicator-head">
      <div class="first-indicator"></div>
      <div class="second-indicator"></div>
    </div>
    <div class="logo-frame">
      <h1 class="loadingTitle"> Zastanawiam sie...</h1>
    </div>
  </div>
  </div>
);
