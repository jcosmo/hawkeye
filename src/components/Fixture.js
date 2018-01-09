import React, {Component} from "react";

class Fixture extends Component {
  render() {
    const grade = this.props.grade;
    const teams = grade.teams.map(team =>
        <div className="fixtureTeam" key={team.club.id}>
          <div className="fixtureNumber">
            {team.fixtureNumber}
          </div>
          <div className="teamClubName">
            {team.club.name}
          </div>
        </div>);
    return (
        <div className="fixture">
          <div className="fixtureGrade">{grade.name}</div>
          {teams}
        </div>
    );
  }
}

export default Fixture;
