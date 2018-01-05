import React, {Component} from "react";
import {withRouter} from 'react-router'
import {Switch, Route} from 'react-router-dom'
import ClubList from './ClubList.js'
import Club from './Club.js'

class Clubs extends Component {
  render() {
    const ClubListWithRouter = withRouter(ClubList);
    return (
        <div className="clubs">
          <ClubListWithRouter/>
          <Route path={this.props.match.url + "/:clubid"} component={Club}/>
        </div>
    );
  }
}

export default Clubs;
