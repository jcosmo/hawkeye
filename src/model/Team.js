import {observable} from "mobx";

class Team {
  teamStore;
  id;
  @observable club;
  @observable grade;
  @observable fixtureNumber;
  @observable members = [];

  constructor(teamStore, id) {
    this.id = id;
    this.teamStore = teamStore;
  }

  updateFromJson(json) {
    this.club = this.teamStore.rootStore.clubStore.resolve(json.clubId);
    this.grade = this.teamStore.rootStore.gradeStore.resolve(json.gradeId);
    this.fixtureNumber = json.fixtureNumber;
  }
}

export default Team;