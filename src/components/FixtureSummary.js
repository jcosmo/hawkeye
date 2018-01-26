import React, {Component} from "react";
import {Link} from "react-router-dom";
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore}))
class FixtureSummary extends Component {
  render() {
    const gradeid = this.props.gradeid;
    if ( gradeid ) {
      this.grade = this.props.gradeStore.resolve(gradeid);
    }
    const fixture = this.props.fixture;
    const rounds = fixture.orderedSchedule.map(round => {
      let roundNumber = `${round.number}`;
      if ( this.grade ) {
        roundNumber = <Link to={`/grade/${gradeid}/round/${round.number}`}>{roundNumber}</Link>;
      }
      const schedule = Object.keys(round.schedule).map(home => (<span key={home}>{home} v {round.schedule[home]}</span>));
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
