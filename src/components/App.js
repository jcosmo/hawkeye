import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import logo from "../images/logo.svg";
import Sidebar from "./Sidebar";
import Teams from "./Teams";
import Fixture from "./Fixture";
import "../style/App.css";

class App extends Component {
  render() {
    return (
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo"/>
            <span className="app-title">Hawkeye - NSNTA</span>
          </header>
          <div className="contentPanel">
            <Sidebar />
            <div id="content" className="content">
              <Route path="/fixture" component={Fixture}/>
              <Route path="/teams" component={Teams}/>
              <Redirect from="/" to="/fixture"/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
