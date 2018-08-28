import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import {Link} from "react-router-dom";

@inject(stores => ({gradeStore: stores.rootStore.gradeStore, fixtureStore: stores.rootStore.fixtureStore}))
@observer
class Round extends Component {
  render() {
    const fixture = this.props.fixtureStore.fixture;
    const grade = this.props.gradeStore.resolve(this.props.match.params.gradeid);
    if (!grade || !fixture) {
      return <div>Loading...</div>;
    }
    const round = fixture.round(this.props.match.params.roundNumber);
    if ( !round ) {
      return <div>Not Found</div>;
    }
    const matches = round.matchesForGrade(grade).map(m => this.matchesRow(m));

    return (
        <div className="round">
          <div className="roundName"> {grade.name} - Round {round.number}</div>
          <div className="matchesContainer">
            <div className="header">
              Matches
            </div>
            <table className="matches">
              <thead>
              <tr>
                <th>Home</th>
                <th>Away</th>
                <th>Result</th>
              </tr>
              </thead>
              <tbody>
              {matches}
              </tbody>
            </table>
          </div>
        </div>
    );
  }

  matchesRow(match) {
    return <tr key={match.id}>
      <td><Link to={`/team/${match.homeTeam.id}`}>{match.homeTeam.label}</Link></td>
      <td><Link to={`/team/${match.awayTeam.id}`}>{match.awayTeam.label}</Link></td>
      <td><Link to={`/match/${match.id}`}>{match.isDraw ? 'Draw' : `${match.winningTeam.label} by ${match.scoreDifference}`}</Link></td>
    </tr>
  }
}

export default Round;
