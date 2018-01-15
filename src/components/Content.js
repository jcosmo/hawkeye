import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import Clubs from "./Clubs";
import Ladders from "./Ladders";
import Fixtures from "./Fixtures";
import Team from "./Team";

export default class Content extends Component {
  render() {
    return (
        <div id="content" className="content">
          <Switch>
            <Route path="/fixtures" component={Fixtures}/>
            <Route path="/clubs" component={Clubs}/>
            <Route path="/ladders" component={Ladders}/>
            <Route path="/team/:teamid" component={Team}/>
            <Redirect from="/" to="/fixture" exact/>
          </Switch>
        </div>
    );
  }
}