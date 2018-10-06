import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class About extends Component {
  render() {
    return (
      <div className="About">
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>Firma DAS świadczy usługi w zakresie:</h1>
       <p>regularnej komunikacji autobusowej,<br/>
       wynajmu autokarów dla przewozów:<br/>
       turystycznych i wycieczkowych,<br/>
        krajowych oraz zagranicznych.</p>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default About;