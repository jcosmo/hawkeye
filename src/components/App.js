import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import "../style/App.css";

export default class App extends Component {
  render() {
    return (
        <div className="app">
          <Header/>
          <div className="contentPanel">
            <Sidebar/>
            <Content/>
          </div>
        </div>
    );
  }
}
