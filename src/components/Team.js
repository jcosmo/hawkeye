import React, {Component} from "react";

class Team extends Component {
  render() {
    return (
        <div className="team">
          Fixture, ladder position, and weekly results of Team {this.props.match.params.teamid}
        </div>
    );
  }
}

export default Team;
