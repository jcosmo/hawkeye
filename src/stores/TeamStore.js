import {observable} from "mobx";
import Team from '../model/Team';
import BaseStore from './BaseStore';

class TeamStore extends BaseStore{
  @observable teams = [];

  load(teams) {
    teams.forEach(json => this.updateTeamFromJson(json));
    this.loaded();
  }

  updateTeamFromJson(json) {
    let team = this.teams.find(team => team.id === json.id);
    if (!team) {
      this.teams.push(team = new Team(this, json.id));
    }
    team.updateFromJson(json);
  }

  findForGrade(grade) {
    return this.teams.filter(team => team.grade === grade);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.teams.find(x => x.id === id);
  }
}

export default TeamStore;