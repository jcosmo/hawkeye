import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import logo from "../images/logo.svg";
import Sidebar from "./Sidebar";
import Clubs from "./Clubs";
import Ladders from "./Ladders";
import Fixtures from "./Fixtures";
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
            <Sidebar/>
            <div id="content" className="content">
              <Switch>
                <Route path="/fixtures" component={Fixtures}/>
                <Route path="/clubs" component={Clubs}/>
                <Route path="/ladders" component={Ladders}/>
                <Redirect from="/" to="/fixture" exact/>
              </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
