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
      {id: 1, roundNumber: 1, homeScore: 31, awayScore: 22, homeTeamId: 1, awayTeamId: 2},
      {id: 2, roundNumber: 2, homeScore: 10, awayScore: 20, homeTeamId: 1, awayTeamId: 17},
      {id: 3, roundNumber: 3, homeScore: 25, awayScore: 20, homeTeamId: 11, awayTeamId: 1},
      {id: 4, roundNumber: 4, homeTeamId: 1, awayTeamId: 18},
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