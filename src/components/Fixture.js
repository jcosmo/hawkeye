import React, {Component} from "react";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";

@observer
class Fixture extends Component {
  render() {
    const grade = this.props.grade;
    const teams = grade.teams.map(team =>
        <div className="fixtureTeam" key={team.id}>
          <div className="fixtureNumber">
            {team.fixtureNumber}
          </div>
          <div className="teamName">
            <Link to={`/team/${team.id}`}>{team.label}</Link>
          </div>
        </div>);
    return (
        <div className="fixture">
          <div className="fixtureGrade"><Link to={`/grade/${grade.id}`}>{grade.name}</Link></div>
          {teams}
        </div>
    );
  }
}

export default Fixture;
