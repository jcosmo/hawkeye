import React, {Component} from "react";
import {inject} from 'mobx-react';

@inject(stores => ({gradeStore: stores.rootStore.gradeStore}))
class Ladder extends Component {
  render() {
    const grade = this.props.gradeStore.resolve( this.props.gradeid );
    return (
        <div className="ladderContainer">
          <div className="header">
            Ladder - Round XXX - {grade.name}
          </div>
          <table className="ladder">
            <thead>
            <tr>
              <th>Club</th>
              <th>Points</th>
              <th>%</th>
            </tr>
            </thead>
            <tbody>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            <tr><td>the club name</td><td>20</td><td>100.2</td></tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Ladder;
