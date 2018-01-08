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
      {id: 1, clubId: 1, gradeId: 1},
      {id: 2, clubId: 1, gradeId: 2},
      {id: 3, clubId: 1, gradeId: 3},
      {id: 4, clubId: 1, gradeId: 4},
      {id: 5, clubId: 1, gradeId: 5},
      {id: 6, clubId: 1, gradeId: 6},
      {id: 11, clubId: 2, gradeId: 1},
      {id: 12, clubId: 2, gradeId: 2},
      {id: 13, clubId: 2, gradeId: 3},
      {id: 14, clubId: 2, gradeId: 4},
      {id: 15, clubId: 3, gradeId: 5},
      {id: 16, clubId: 3, gradeId: 6},
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