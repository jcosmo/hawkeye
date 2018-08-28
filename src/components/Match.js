import React, {Component} from "react";
import {inject, observer} from 'mobx-react';

@inject(stores => ({matchStore: stores.rootStore.matchStore}))
  @observer
class Match extends Component {
  render() {
    const match = this.props.matchStore.resolve(this.props.match.params.matchid);
    if (!match) {
      return <div>Loading ...</div>
    }

    return (
        <div className="match">
          Match {match.id}
        </div>
    );
  }
}

export default Match;
