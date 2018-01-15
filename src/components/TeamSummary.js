import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Team extends Component {
  render() {
    return (
        <div className="team">
          Summary of Team {this.props.match.params.teamid}

          <Link to={`/team/${this.props.match.params.teamid}`}>Goto Details</Link>
        </div>
    );
  }
}

export default Team;
