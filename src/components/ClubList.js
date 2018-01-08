import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject} from 'mobx-react';

@inject(stores => ({clubStore: stores.rootStore.clubStore}))
class ClubList extends Component {
  render() {
    const content = this.props.clubStore.clubs.map(club => <li key={club.id}>
      <Link to={this.props.match.url + "/" + club.id}>{club.name}</Link>
    </li>);

    return (
        <div className="clublist">
          <ul>
            {content}
          </ul>
        </div>
    );
  }
}

export default ClubList;
