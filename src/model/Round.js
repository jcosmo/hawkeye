import {observable} from "mobx";

class Round {
  @observable number;
  @observable date;
  @observable schedule;
  @observable matches = [];

  /*
    schedule = {home => away]
  */
  updateFromJson(json) {
    this.number = json.number;
    this.date = json.date;
    this.schedule = json.schedule;
  }

  addMatch(match) {
    this.matches.push(match);
  }

  matchForTeam(team) {
    return this.matches.find(m => m.isForTeam(team));
  }
}

export default Round;