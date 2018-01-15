import React, {Component} from "react";
import Fixture from './Fixture';
import FixtureSummary from './FixtureSummary';
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore, fixtureStore: stores.rootStore.fixtureStore}))
class Fixtures extends Component {
  render() {
    const grades = this.props.gradeStore.grades;
    const fixture = this.props.fixtureStore.fixture;
    const fixtures = grades.map(grade => <Fixture key={grade.id} grade={grade}/>);
    return (
        <div>
          <div className="fixtures">
            {fixtures}
          </div>
          <div className="fixtureSummary">
            <FixtureSummary fixture={fixture}/>
          </div>
        </div>
    );
  }
}

export default Fixtures;
