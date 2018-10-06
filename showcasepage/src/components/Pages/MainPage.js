import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class Main extends Component {
  render() {
    return (
      <div className="mainPage">
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="titleMain">Z nami do celu!</div>
      <div className="subtitleMain">Zawsze z Dasem</div>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default Main;
