import React, {Component} from "react";
import {Link} from "react-router-dom";
import {inject, observer} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore}))
@observer
class FixtureSummary extends Component {
  render() {
    const gradeid = this.props.gradeid;
    let grade;
    if (gradeid !== undefined) {
      grade = this.props.gradeStore.resolve(gradeid);
    }
    const fixture = this.props.fixture;

    const rounds = fixture.orderedSchedule.map(round => {
      let roundNumber = `${round.number}`;
      if (grade) {
        roundNumber = <Link to={`/grade/${gradeid}/round/${round.number}`}>{roundNumber}</Link>;
      }
      const schedule = Object.keys(round.schedule).map(home => {
        if (grade) {
          let homeTeam = grade.team(home);
          console.log(`Home team ${home}: ${homeTeam}`);
          let awayTeam = grade.team(round.schedule[home]);
          console.log(`Away team ${round.schedule[home]}: ${awayTeam.label}`);
          return <span key={home}>{homeTeam.label} v {awayTeam.label}</span>;
        }
        return <span key={home}>{home} v {round.schedule[home]}</span>;
      });
      return <tr key={round.number}>
        <td>{roundNumber}</td>
        <td>{round.date}</td>
        <td>{schedule}</td>
      </tr>;
    });
    return <table className="fixtureSummary">
      <tbody>
      <tr>
        <th>Round</th>
        <th>Date</th>
        <th>Matches</th>
      </tr>
      {rounds}
      </tbody>
    </table>
  }
}

export default FixtureSummary;
