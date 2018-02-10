import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject(stores => ({clubStore: stores.rootStore.clubStore}))
@observer
class ClubList extends Component {
  render() {
    if ( 0 === this.props.clubStore.clubs.length )
    {
      return <div>Loading...</div>;
    }
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
