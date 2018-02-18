import React, {Component} from "react";
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore}))
class Ladder extends Component {
  render() {
    const grade = this.props.gradeStore.resolve(this.props.gradeid);
    const ladder = grade.ladder;
    let content;
    if (!ladder) {
      content = <div>Loading ...</div>;
    }
    else {
      const rungs = ladder.teams.map(team => (<tr key={team.team.id}>
        <td>{team.team.label}</td>
        <td>{team.points}</td>
        <td>{team.percentage}</td>
      </tr>));
      content = <table className="ladder">
        <thead>
        <tr>
          <th> Team
          </th>
          <th>Points</th>
          <th> %
          </th>
        </tr>
        </thead>
        <tbody>
        {rungs}
        </tbody>
      </table>;
    }
    return (
        <div className="ladderContainer">
          <div className="header">
            Ladder - Round XXX - {grade.name}
          </div>
          {content}
        </div>
    );
  }
}

export default Ladder;
