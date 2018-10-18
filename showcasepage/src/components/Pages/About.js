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
      <h1>Z nami do celu...</h1>
      <div className="WraperLeft">
      <p className="TextLeft">Firma DAS świadczy usługi w zakresie<br/>
       regularnej komunikacji autobusowej,<br/>
       wynajmu autokarów dla przewozów<br/>
       turystycznych i wycieczkowych- krajowych oraz zagranicznych.</p>
      </div>
      <div className="WraperRight">
      <p className="TextRight">Świadczymy usługi regularnej<br/>
      komunikacji autobusowej na trasach:<br/>
      Dębowiec Centrum - Cieszyn<br/>
      Jaworzynka - Cieszyn<br/>
      Koniaków - Cieszyn<br/>
      Dębowiec Centrum - Kisielów Remiza</p>
      </div>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default About;