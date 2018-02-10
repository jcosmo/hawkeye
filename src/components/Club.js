import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject(stores => ({clubStore: stores.rootStore.clubStore}))
@observer
class Club extends Component {
  render() {
    const club = this.props.clubStore.resolve(this.props.match.params.clubid);
    return (
        <div className="club">
          <div>
            Welcome to the {club.name} Tennis Club.
            <br/>
            Here we will have details of the grades that this club have teams in, perhaps the ladders?
            <br/>
            Ability to click through to a particular <Link to={"/team/2"}>team</Link>
          </div>
        </div>
    );
  }
}

export default Club;
