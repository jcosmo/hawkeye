import {observable} from "mobx";
import Match from '../model/Match';

class MatchStore {
  rootStore;
  @observable matches = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.load();
  }

  load() {
    [
      {id: 1, roundNumber: 1, homeScore: 31, awayScore: 22, homeTeamId: 1, awayTeamId: 11},
      {id: 2, roundNumber: 1, homeScore: 10, awayScore: 20, homeTeamId: 6, awayTeamId: 17},
      {id: 3, roundNumber: 1, homeScore: 25, awayScore: 25, homeTeamId: 18, awayTeamId: 19},
      {id: 4, roundNumber: 2, homeTeamId: 17, awayTeamId: 6},
      {id: 5, roundNumber: 1, homeScore: 12, awayScore: 12, homeTeamId: 20, awayTeamId: 21},
      {id: 6, roundNumber: 1, homeScore: 36, awayScore: 30, homeTeamId: 22, awayTeamId: 23},
    ].forEach(json => this.updateMatchFromJson(json))
  }

  updateMatchFromJson(json) {
    let match = this.matches.find(match => match.id === json.id);
    if (!match) {
      this.matches.push(match = new Match(this, json.id));
    }
    match.updateFromJson(json);
  }

  findForGrade(grade) {
    return this.matches.filter(match => match.grade === grade);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.matches.find(x => x.id === id);
  }
}

export default MatchStore;