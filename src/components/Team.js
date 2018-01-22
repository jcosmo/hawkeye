import React, {Component} from "react";

import {inject} from 'mobx-react';

@inject(stores => ({teamStore: stores.rootStore.teamStore}))
class Team extends Component {
  render() {
    const teamId = this.props.match.params.teamid;
    const team = this.props.teamStore.resolve(teamId);
    const members = team.members;
    const stats = members.map( m => (<tr><td>{m.name}</td><td /><td /><td /></tr>) );
    return (
        <div className="team">
          <div className="teamName"> {team.grade.name} - {team.club.name}</div>

          <div className="matchesContainer">
            <div className="header">
              Matches
            </div>
            <table className="matches">
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
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr><tr>
                <td>14</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="ladderContainer">
            <div className="header">
              Ladder - Round 10
            </div>
            <table className="ladder">
              <thead>
              <tr>
                <th>Club</th>
                <th>Points</th>
                <th>%</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
              </tbody>
            </table>
          </div>
          <div className="statisticsContainer">
            <div className="header">
              Stats
            </div>
            <table className="statistics">
              <thead>
              <tr>
                <th></th>
                <th>1 Jan</th>
                <th>8 Jan</th>
                <th>15 Jan</th>
              </tr>
              </thead>
              <tbody>
              {stats}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default Team;
