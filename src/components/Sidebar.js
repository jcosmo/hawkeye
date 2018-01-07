import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <ul>
            <li><NavLink to="/clubs" activeClassName="activeLink">Clubs</NavLink></li>
            <li><NavLink to="/fixtures" activeClassName="activeLink">Fixtures</NavLink></li>
            <li><NavLink to="/ladders" activeClassName="activeLink">Ladders</NavLink></li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
