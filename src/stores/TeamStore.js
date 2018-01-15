import {observable} from "mobx";
import Team from '../model/Team';

class TeamStore {
  rootStore;
  @observable teams = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.load();
  }

  load() {
    [
      {id: 1, clubId: 1, gradeId: 1, fixtureNumber: 1},
      {id: 2, clubId: 1, gradeId: 2, fixtureNumber: 1},
      {id: 3, clubId: 1, gradeId: 3, fixtureNumber: 1},
      {id: 4, clubId: 1, gradeId: 4, fixtureNumber: 1},
      {id: 5, clubId: 1, gradeId: 5, fixtureNumber: 1},
      {id: 6, clubId: 1, gradeId: 6, fixtureNumber: 1},
      {id: 11, clubId: 2, gradeId: 1, fixtureNumber: 2},
      {id: 12, clubId: 2, gradeId: 2, fixtureNumber: 2},
      {id: 13, clubId: 2, gradeId: 3, fixtureNumber: 2},
      {id: 14, clubId: 2, gradeId: 4, fixtureNumber: 2},
      {id: 15, clubId: 3, gradeId: 5, fixtureNumber: 2},
      {id: 17, clubId: 3, gradeId: 6, fixtureNumber: 2},
      {id: 18, clubId: 3, gradeId: 6, fixtureNumber: 3},
      {id: 19, clubId: 3, gradeId: 6, fixtureNumber: 4},
      {id: 20, clubId: 3, gradeId: 6, fixtureNumber: 5},
      {id: 21, clubId: 3, gradeId: 6, fixtureNumber: 6},
      {id: 22, clubId: 3, gradeId: 6, fixtureNumber: 7},
      {id: 23, clubId: 3, gradeId: 6, fixtureNumber: 8},
    ].forEach(json => this.updateTeamFromJson(json))
  }

  updateTeamFromJson(json) {
    let team = this.teams.find(team => team.id === json.id);
    if (!team) {
      this.teams.push(team = new Team(this, json.id))
    }
    team.updateFromJson(json);
  }

  findForGrade(grade) {
    return this.teams.filter(team => team.grade === grade);
  }
}

export default TeamStore;