import React, { Component } from 'react';
import { Route }  from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import MainPage from './components/Pages/MainPage';
import "./components/Style/output.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
 