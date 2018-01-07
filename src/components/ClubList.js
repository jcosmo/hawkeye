import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject} from 'mobx-react';

@inject(stores => ({clubStore: stores.rootStore.clubStore}))
class ClubList extends Component {
  render() {
    const clubs = this.props.clubStore.clubs;

    return (
        <div className="clublist">
          There are {clubs.length} clubs.
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
