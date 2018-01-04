import React, {Component} from "react";
import "../style/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <ul>
            <li>Teams</li>
            <li>Fixture</li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
