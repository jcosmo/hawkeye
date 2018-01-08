import React, {Component} from "react";
import Fixture from './Fixture';
import {inject} from 'mobx-react';

@inject( stores => ({gradeStore: stores.rootStore.gradeStore}))
class Fixtures extends Component {
  render() {
    const grades = this.props.gradeStore.grades;
    const fixtures = grades.map(grade => <Fixture grade={grade}/>);
    return (
        <div className="fixtures">
          {fixtures}
        </div>
    );
  }
}

export default Fixtures;
