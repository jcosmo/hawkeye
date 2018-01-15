import React, {Component} from "react";

class FixtureSummary extends Component {
  render() {
    const fixture = this.props.fixture;
    const rounds = fixture.orderedSchedule.map(round => {
      const schedule = Object.keys(round.schedule).map(home => (<span key={home}>{home} v {round.schedule[home]}</span>));
      return <tr key={round.number}>
        <td>{round.number}</td>
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
