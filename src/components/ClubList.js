import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject} from 'mobx-react';

@inject("rootStore")
class ClubList extends Component {

  render() {
    const clubs = this.props.rootStore.clubStore.clubs;

    return (
        <div className="clublist">
          <ul>
            <li> There are {clubs.length} clubs </li>
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
