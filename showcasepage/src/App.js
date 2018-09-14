import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MainPage from "./components/Pages/MainPage";
import Profile from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import "./components/Style/output.css";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/About" component={Profile} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
