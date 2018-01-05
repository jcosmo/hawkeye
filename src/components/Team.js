import React, {Component} from "react";

class Team extends Component {
  render() {
    return (
        <div className="team">
          Details of Team {this.props.match.params.teamid}
        </div>
    );
  }
}

export default Team;
