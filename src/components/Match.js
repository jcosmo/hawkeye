import React, {Component} from "react";
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore, fixtureStore: stores.rootStore.fixtureStore}))
class Match extends Component {
  render() {
    const match = this.props.gradeStore.resolve(this.props.match.params.matchid);

    return (
        <div className="match">
          Match {match.id}
        </div>
    );
  }
}

export default Match;
