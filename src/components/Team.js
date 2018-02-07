import React, {Component} from "react";
import {inject} from 'mobx-react';
import {Link} from "react-router-dom";
import Ladder from './Ladder';

@inject(stores => ({teamStore: stores.rootStore.teamStore}))
class Team extends Component {
  render() {
    const teamId = this.props.match.params.teamid;
    const team = this.props.teamStore.resolve(teamId);
    const members = team.members;
    const stats = members.map(m => Team.statRow(m));
    const matches = team.matches.sort((a, b) => b.roundNumber - a.roundNumber).map(m => Team.matchRow(m, team));
    return (
        <div className="team">
          <div className="teamName">{team.grade.name} - {team.club.name}</div>

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
            {matches}
            </tbody>
          </table>
        </div>
          <Ladder gradeid={team.grade.id}/>
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

  static statRow(member) {
    return <tr key={member.id}>
      <td>{member.name}</td>
      <td/>
      <td/>
      <td/>
    </tr>
  }

  static matchRow(match, team) {
    const isHome = match.homeTeam === team;
    const opposition = isHome ? match.awayTeam : match.homeTeam;
    let result = "";
    let points = "";
    if (match.isCompleted) {
      result = match.isDraw ? `draw, ${match.homeScore} all` : `${match.winningTeam === team ? 'won' : 'lost'} by ${match.scoreDifference}`;
      points = match.isDraw ? 2 : (match.winningTeam === team ? 4 : 0);
    }
    return <tr key={match.id}>
      <td><Link to={`/match/${match.id}`}>{match.round.number}</Link></td>
      <td>{match.round.date}</td>
      <td>{isHome ? 'home' : 'away'}</td>
      <td>{opposition.club.name}</td>
      <td>{result}</td>
      <td>{points}</td>
    </tr>
  }
}

export default Team;
