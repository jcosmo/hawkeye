import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import Clubs from "./Clubs";
import Club from "./Club";
import Ladders from "./Ladders";
import Fixtures from "./Fixtures";
import Team from "./Team";
import Grade from "./Grade";
import Round from "./Round";
import Match from "./Match";

export default class Content extends Component {
  render() {
    return (
        <div id="content" className="content">
          <Switch>
            <Route path="/fixtures" component={Fixtures}/>
            <Route path="/clubs/:clubid" component={Club}/>
            <Route path="/clubs" component={Clubs}/>
            <Route path="/ladders" component={Ladders}/>
            <Route path="/team/:teamid" component={Team}/>
            <Route path="/grade/:gradeid/round/:roundNumber" component={Round}/>
            <Route path="/grade/:gradeid" component={Grade}/>
            <Route path="/match/:matchid" component={Match}/>
            <Redirect from="/" to="/fixtures" exact/>
          </Switch>
        </div>
    );
  }
}