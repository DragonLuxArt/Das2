import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>
      DAS :: Rozkład jazdy naszych linii<br/>
      </h1>
      <p>
      Prosze wybrać trasę:<br/>
      Skoczów - Dębowiec centrum - Cieszyn<br/>
      Cieszyn - Dębowiec Centrum - Skoczów<br/>
      Cieszyn - Koniaków<br/>
      Koniaków - Cieszyn<br/>
      Kisielów - Dębowiec Centrum<br/>
      Dębowiec Centrum - Kisielów<br/>
      Cieszyn - Jaworzynka<br/>
      Jaworzynka - Cieszyn<br/>
      </p>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default Contact;
