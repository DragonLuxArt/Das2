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
      DAS :: Rozkład jazdy naszych linii:<br/>
      </h1>
      <p>
      <a href="#">Skoczów - Dębowiec centrum - Cieszyn</a><br/>
      <a href="#">Cieszyn - Dębowiec Centrum - Skoczów</a><br/>
      <a href="#">Cieszyn - Koniaków</a><br/>
      <a href="#">Koniaków - Cieszyn</a><br/>
      <a href="#">Kisielów - Dębowiec Centrum</a><br/>
      <a href="#">Dębowiec Centrum - Kisielów</a><br/>
      <a href="#">Cieszyn - Jaworzynka</a><br/>
      <a href="#">Jaworzynka - Cieszyn</a><br/>
      </p>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default Contact;
