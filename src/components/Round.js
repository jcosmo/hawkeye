import React, {Component} from "react";
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore, fixtureStore: stores.rootStore.fixtureStore}))
class Round extends Component {
  render() {
    const grade = this.props.gradeStore.resolve(this.props.match.params.gradeid);
    const fixture = this.props.fixtureStore.fixture;
    const round = fixture.round(this.props.match.params.roundNumber);

    return (
        <div className="round">
          <div className="gradeName"> {grade.name} </div>
          Round {round.number}
        </div>
    );
  }
}

export default Round;
