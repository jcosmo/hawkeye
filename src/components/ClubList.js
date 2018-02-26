import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject(stores => ({clubStore: stores.rootStore.clubStore}))
@observer
class ClubList extends Component {
  render() {
    if ( this.props.clubStore.loading )
    {
      return <div>Loading...</div>;
    }
    const clubs = this.props.clubStore.clubs;
    if ( 0 === clubs.length )
    {
      return <div>No clubs</div>;
    }
    const content = clubs.slice(0).sort( (a,b) => a.name.localeCompare(b.name) ).map(club => <li key={club.id}>
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
