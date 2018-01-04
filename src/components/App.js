import React, {Component} from "react";
import logo from "../images/logo.svg";
import Sidebar from "./Sidebar";
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
              <ul>
                <li>foo</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
