import React, {Component} from "react";
import {Link} from "react-router-dom";

class Fixture extends Component {
  render() {
    const grade = this.props.grade;
    const teams = grade.teams.map(team =>
        <div className="fixtureTeam" key={team.club.id}>
          <div className="fixtureNumber">
            {team.fixtureNumber}
          </div>
          <div className="teamClubName">
            <Link to={`/team/${team.id}`}>{team.club.name}</Link>
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
