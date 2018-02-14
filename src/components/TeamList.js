import React, {Component} from "react";
import {inject, observer} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore}))
@observer
class TeamList extends Component {
  render() {
    const gradeid = this.props.gradeid;
    const grade = this.props.gradeStore.resolve(gradeid);

    const content = grade.teams.sort((a, b) => a.fixtureNumber - b.fixtureNumber).map(
        team => <tr key={team.id}>
          <td>{team.fixtureNumber}</td>
          <td>{team.label}</td>
        </tr>);

    return (
        <div className="teamsContainer">
          <div className="header">
            Teams
          </div>
          <table className="teams">
            <tbody>
            {content}
            </tbody>
          </table>
        </div>
    );
  }
}

export default TeamList;
