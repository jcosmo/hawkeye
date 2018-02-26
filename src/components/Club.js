import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject(stores => ({clubStore: stores.rootStore.clubStore}))
@observer
class Club extends Component {
  render() {
    if (this.props.clubStore.loading ) {
      return <div>Loading...</div>;
    }
    const club = this.props.clubStore.resolve(this.props.match.params.clubid);
    if ( !club ) {
      return <div>No such club</div>;
    }

    const content = club.teams.map( team => (<div key={team.id}><Link to={`/team/${team.id}`}>{team.grade.name}</Link></div>));
    return (
        <div className="clubPage">
          <div>
            The {club.name} Tennis Club.
          </div>
          <div className="teamsContainer">
            <div className="header">
              Teams
            </div>
            <div className="clubs">
              {content}
            </div>
          </div>
        </div>
    );
  }
}

export default Club;
