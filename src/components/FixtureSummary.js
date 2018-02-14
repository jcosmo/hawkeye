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
          let awayTeam = grade.team(round.schedule[home]);
          return <span key={home} className="fixtureMatch">
            <Link to={`/match/1`}>{homeTeam.label} v {awayTeam.label}</Link></span>;
        }
        return <span key={home} className="fixtureMatch">{home} v {round.schedule[home]}</span>;
      });
      return <tr key={round.number}>
        <td>{roundNumber}</td>
        <td className="date">{round.date}</td>
        <td>{schedule}</td>
      </tr>;
    });
    return <div className="fixtureContainer">
      <div className="header">
        Fixture
      </div>
      <table className="fixtureSummary">
        <tbody>
        <tr>
          <th>Round</th>
          <th>Date</th>
          <th>Matches</th>
        </tr>
        {rounds}
        </tbody>
      </table>
    </div>
  }
}

export default FixtureSummary;
