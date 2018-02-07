import {observable} from "mobx";

class Team {
  teamStore;
  id;
  @observable club;
  @observable grade;
  @observable fixtureNumber;
  @observable members = [];
  @observable matches = [];
  @observable name;

  constructor(teamStore, id) {
    this.id = id;
    this.teamStore = teamStore;
  }

  updateFromJson(json) {
    this.club = this.teamStore.rootStore.clubStore.resolve(json.clubId);
    this.name = json.name || this.club.name;
    this.grade = this.teamStore.rootStore.gradeStore.resolve(json.gradeId);
    this.fixtureNumber = json.fixtureNumber;
  }

  addMember(player) {
    this.members.push(player);
  }

  addMatch(match) {
    this.matches.push(match);
  }
}

export default Team;