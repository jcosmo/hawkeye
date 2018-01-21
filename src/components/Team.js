import React, {Component} from "react";

import {inject} from 'mobx-react';

@inject(stores => ({teamStore: stores.rootStore.teamStore}))
class Team extends Component {
  render() {
    const teamId = this.props.match.params.teamid;
    const team = this.props.teamStore.resolve( teamId );
    return (
        <div className="team">
          <div className="teamName"> {team.grade.name} - {team.club.name}</div>

          <div className="matches">
            <div className="header">
              Matches
            </div>
            <table>
              <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th></th>
                <th>Opposition</th>
                <th>Result</th>
                <th>Points</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="ladder">
            Ladder
          </div>
          <div className="stats">
            Stats
          </div>
        </div>
    );
  }
}

export default Team;
