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
    this.ladderStore.load(json['ladders'] || []);
    this.matchStore.load(json['matches'] || []);
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