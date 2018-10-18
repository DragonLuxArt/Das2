import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MainPage from "./components/Pages/MainPage";
import About from "./components/Pages/About";
import RozkladJazdy from "./components/Pages/RozkladJazdy";
import "./components/Style/output.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "./components/Pages/LoadingComponent";
library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 4000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }
  render() {
    return (
      <Router basename="/Das2">
      <Switch>
        <div className="App">
        <Header />
        <Route exact path="/" component={LoadingComponent(MainPage)} />
        <Route exact path="/RozkladJazdy" component={LoadingComponent(RozkladJazdy)} />
        <Route exact path="/About" component={LoadingComponent(About)} />
        <Footer />
        </div>
      </Switch>
      </Router>
    );
  }
}

export default App;
