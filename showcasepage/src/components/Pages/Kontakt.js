import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class Kontakt extends Component {
  render() {
    return (
      <div className="Kontakt">
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>
      DAS :: Skontaktuj sie z nami:<br/>
      </h1>
      <p>DAS Katarzyna Kwiczala<br/>
      43-426 Dębowiec, Gumna ul. Beskidzka 53<br/>
      Telefon +48 33 856 22 54<br/>
      E-mail biuro@das2.com.pl lub kontakt@das2.com.pl</p>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default Kontakt;