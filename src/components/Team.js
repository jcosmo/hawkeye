import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import {Link} from "react-router-dom";
import Ladder from './Ladder';

@inject(stores => ({teamStore: stores.rootStore.teamStore}))
@observer
class Team extends Component {
  render() {
    const teamId = this.props.match.params.teamid;
    const team = this.props.teamStore.resolve(teamId);
    if (!team) {
      return <div>Loading...</div>;
    }
    const members = team.members;
    const stats = members.map(m => Team.statRow(m));
    const matches = team.matches.sort((a, b) => a.round.number - b.round.number).map(m => Team.matchRow(m, team));
    return (
        <div className="team">
          <div className="teamName"><Link to={`/grade/${team.grade.id}`}>{team.grade.name}</Link> - {team.label}</div>

          <div className="matchesContainer">
            <div className="header">
              Matches
            </div>
            <table className="matches">
              <thead>
              <tr>
                <th>Round</th>
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
      <td><Link to={`/grade/${team.grade.id}/round/${match.round.number}`}>{match.round.number}</Link></td>
      <td>{match.round.date}</td>
      <td>{isHome ? 'home' : 'away'}</td>
      <td><Link to={`/team/${opposition.id}`}>{opposition.label}</Link></td>
        <td><Link to={`/match/${match.id}`}>{result}</Link></td>
      <td>{points}</td>
    </tr>
  }
}

export default Team;
