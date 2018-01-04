import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../style/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <ul>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/fixture">Fixture</Link></li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
