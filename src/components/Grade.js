import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import Ladder from './Ladder';
import FixtureSummary from './FixtureSummary';
import TeamList from './TeamList';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore, fixtureStore: stores.rootStore.fixtureStore}))
@observer
class Grade extends Component {
  render() {
    const grade = this.props.gradeStore.resolve(this.props.match.params.gradeid);
    if (!grade) {
      return <div>Loading...</div>;
    }
    const fixture = this.props.fixtureStore.fixture;
    return (
        <div className="grade">
          <div className="gradeName"> {grade.name} </div>
          <TeamList gradeid={grade.id}/>
          <Ladder gradeid={grade.id}/>
          <FixtureSummary fixture={fixture} gradeid={grade.id}/>
        </div>
    );
  }
}

export default Grade;
