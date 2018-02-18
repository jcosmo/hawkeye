import ClubStore from './ClubStore';
import GradeStore from './GradeStore';
import TeamStore from './TeamStore';
import FixtureStore from './FixtureStore';
import PlayerStore from './PlayerStore';
import MatchStore from './MatchStore';
import LadderStore from './LadderStore';
import {action} from 'mobx';

class RootStore {
  clubStore;
  gradeStore;
  teamStore;
  playerStore;
  fixtureStore;
  matchStore;
  ladderStore;

  constructor() {
    this.clubStore = new ClubStore(this);
    this.gradeStore = new GradeStore(this);
    this.teamStore = new TeamStore(this);
    this.fixtureStore = new FixtureStore(this);
    this.playerStore = new PlayerStore(this);
    this.matchStore = new MatchStore(this);
    this.ladderStore = new LadderStore(this);
    this.fetchData();
  }

  @action
  processJson(json) {
    this.clubStore.load(json['clubs'] || []);
    this.gradeStore.load(json['grades'] || []);
    this.teamStore.load(json['teams'] || []);
    this.fixtureStore.load(json['fixture'] || []);
    this.ladderStore.load([{
      id: 0,
      gradeId: 1,
      teams: [
          {teamId: 1, points: 32, percentage: 130},
          {teamId: 2, points: 30, percentage: 130},
          {teamId: 3, points: 29, percentage: 130},
          {teamId: 4, points: 28, percentage: 130},
          {teamId: 5, points: 27, percentage: 130},
          {teamId: 6, points: 26, percentage: 130},
          {teamId: 7, points: 22, percentage: 130},
          {teamId: 8, points: 21, percentage: 130},
          ]
    },{
      id: 1,
      gradeId: 2,
      teams: [
        {teamId: 11, points: 32, percentage: 130},
        {teamId: 12, points: 30, percentage: 130},
        {teamId: 13, points: 29, percentage: 130},
        {teamId: 14, points: 28, percentage: 130},
        {teamId: 15, points: 27, percentage: 130},
        {teamId: 16, points: 26, percentage: 130},
        {teamId: 17, points: 22, percentage: 130},
        {teamId: 18, points: 21, percentage: 130},
      ]
    }]);
  }

  fetchData() {
    return fetch('http://localhost:8088/scrape')
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.processJson(json);
        })
        .catch((ex) => {
          console.log("Error");
          console.log(ex);
          return {};
        });
  }
}

export default RootStore;