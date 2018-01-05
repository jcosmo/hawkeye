import React, {Component} from "react";
import {Link} from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <ul>
            <li><Link to="/clubs">Clubs</Link></li>
            <li><Link to="/fixtures">Fixtures</Link></li>
            <li><Link to="/ladders">Ladders</Link></li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
