import React, {Component} from "react";

class Fixture extends Component {
  render() {
    const grade = this.props.grade;
    const teams = grade.teams.map( team => <div>{team.club.name}</div>);
    return (
        <div className="fixture">
          <div>{grade.name}</div>
          {teams}
        </div>
    );
  }
}

export default Fixture;
