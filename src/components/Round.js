import React, {Component} from "react";
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore, fixtureStore: stores.rootStore.fixtureStore}))
class Round extends Component {
  render() {
    const grade = this.props.gradeStore.resolve(this.props.match.params.gradeid);
    const fixture = this.props.fixtureStore.fixture;
    const round = fixture.round(this.props.match.params.roundNumber);
    const matches = round.matches.map(m => this.matchesRow(m));
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
      <td>{match.homeTeam.label}</td>
      <td>{match.homeTeam.label}</td>
      <td>{match.isDraw ? 'Draw' : `${match.winningTeam.label} by ${match.scoreDifference}`}</td>
    </tr>
  }
}

export default Round;
