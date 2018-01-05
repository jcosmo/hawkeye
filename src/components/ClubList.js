import React, {Component} from "react";
import {Link} from 'react-router-dom';

class ClubList extends Component {
  render() {
    return (
        <div className="clublist">
          <ul>
            <li>
              <Link to={this.props.match.url + "/1"}>Club 1</Link>
            </li>
            <li>
              <Link to={this.props.match.url + "/2"}>Club 2</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default ClubList;
