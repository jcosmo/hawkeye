import React, {Component} from "react";
import {Link, Route} from 'react-router-dom';
import TeamSummary from './TeamSummary.js'

class Club extends Component {
  render() {
    return (
        <div className="club">
          <div>
          Welcome to club {this.props.match.params.clubid}.

          here we will have details of the grades that this club have teams in, perhaps the ladders?

          Ability to click through to a particular <Link to={this.props.match.url + "/team/2"}>team</Link>
          </div>
          <Route path={this.props.match.url + "/team/:teamid"} component={TeamSummary}/>
        </div>
    );
  }
}

export default Club;
