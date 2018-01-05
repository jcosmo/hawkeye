import React, {Component} from "react";
import logo from "../images/logo.svg";

export default class Header extends Component {
  render() {
    return (
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <span className="app-title">Hawkeye - NSNTA</span>
        </header>
    );
  }
}